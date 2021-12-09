const { chef, reservation, course } = require('../../models');
const { basicAccessToken, isAuthorized } = require('../token/accessToken');
const {
  sendRefreshToken,
  refreshAuthorized,
} = require('../token/refreshToken');

const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  get: async (req, res) => {
    const findReservation = await reservation.findAll({
      where: { rsUserId: req.query.id },
    });

    const sendDataArr = [];

    // console.log(findReservation);

    for (let i = 0; i < findReservation.length; i++) {
      const findChef = await chef.findOne({
        where: { id: findReservation[i].dataValues.rsChefId },
      });

      const findCourse = await course.findOne({
        where: { id: findReservation[i].dataValues.rsCourseId },
      });

      findReservation[i].dataValues.courseName =
        findCourse.dataValues.courseName;
      delete findReservation[i].dataValues.createdAt;
      delete findReservation[i].dataValues.updatedAt;

      findReservation[i].dataValues.chefName = findChef.dataValues.chefName;
      findReservation[i].dataValues.cuisine = findChef.dataValues.cuisine;

      sendDataArr.push(findReservation[i].dataValues);
    }

    const accessVerify = isAuthorized(req);
    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      console.log('refreshVerify: ', refreshVerify);
      if (!refreshVerify) {
        // refreshToken 까지 만료 됐을 때
        console.log('!refreshVerify');
        res.status(401).json({ message: 'Send new Login Request' });
      } else {
        delete refreshVerify.exp;

        const accessToken = basicAccessToken(refreshVerify);
        res.status(201).json({ accessToken, message: 'ok', data: sendDataArr });
      }
    } else {
      res.status(200).json({ message: 'ok', data: sendDataArr });
    }
  },

  post: async (req, res) => {
    try {
      const accessVerify = isAuthorized(req);

      console.log('cancel', req.body);

      const { body } = req;
      const { merchantUid, reason, cancel_request_amount } = body; // 클라이언트로부터 전달받은 주문번호, 환불사유, 환불금액

      console.log(body);

      const findReservation = await reservation.findOne({
        where: { merchantUid: merchantUid },
      });

      const paymentData = findReservation.dataValues;

      const { impUid, amount } = paymentData;

      if (accessVerify) {
        if (amount !== 10) {
          return res
            .status(400)
            .json({ message: '이미 전액환불된 주문입니다.' });
        } else {
          const getToken = await axios({
            url: 'https://api.iamport.kr/users/getToken',
            method: 'post', // POST method
            headers: { 'Content-Type': 'application/json' }, // "Content-Type": "application/json"
            data: {
              imp_key: process.env.IAMPORT_RESTAPI_KEY, // REST API 키
              imp_secret: process.env.IAMPORT_RESTAPI_SECRET, // REST API Secret
            },
          });
          const { access_token } = getToken.data.response; // 인증 토큰

          console.log('accessToken', access_token);

          const getCancelData = await axios({
            url: 'https://api.iamport.kr/payments/cancel',
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              Authorization: access_token, // 아임포트 서버로부터 발급받은 엑세스 토큰
            },
            data: {
              reason, // 가맹점 클라이언트로부터 받은 환불사유
              imp_uid: impUid, // imp_uid를 환불 `unique key`로 입력
              amount: amount, // 가맹점 클라이언트로부터 받은 환불금액
              checksum: amount, // [권장] 환불 가능 금액 입력
            },
          });

          const { response } = getCancelData.data;
          if (response.status === 'cancelled') {
            await reservation.destroy({
              where: { id: req.body.id },
              force: true,
            });
            res.status(200).json({ message: 'ok' });
          }
        }
      } else {
        const refreshVerify = refreshAuthorized(req);
        if (!refreshVerify) {
          // refreshToken 까지 만료 됐을 때
          res.status(401).json({ message: 'Send new Login Request' });
        } else {
          if (amount !== 10) {
            return res
              .status(400)
              .json({ message: '이미 전액환불된 주문입니다.' });
          } else {
            const getToken = await axios({
              url: 'https://api.iamport.kr/users/getToken',
              method: 'post', // POST method
              headers: { 'Content-Type': 'application/json' }, // "Content-Type": "application/json"
              data: {
                imp_key: process.env.IAMPORT_RESTAPI_KEY, // REST API 키
                imp_secret: process.env.IAMPORT_RESTAPI_SECRET, // REST API Secret
              },
            });
            const { access_token } = getToken.data.response; // 인증 토큰

            console.log('accessToken', access_token);

            const getCancelData = await axios({
              url: 'https://api.iamport.kr/payments/cancel',
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
                Authorization: access_token, // 아임포트 서버로부터 발급받은 엑세스 토큰
              },
              data: {
                reason, // 가맹점 클라이언트로부터 받은 환불사유
                imp_uid: impUid, // imp_uid를 환불 `unique key`로 입력
                amount: amount, // 가맹점 클라이언트로부터 받은 환불금액
                checksum: amount, // [권장] 환불 가능 금액 입력
              },
            });

            const { response } = getCancelData.data;
            if (response.status === 'cancelled') {
              await reservation.destroy({
                where: { id: req.body.id },
                force: true,
              });
              delete refreshVerify.exp;
              const accessToken = basicAccessToken(refreshVerify);
              res.status(201).json({ accessToken, message: 'ok' });
            }
          }
        }
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
