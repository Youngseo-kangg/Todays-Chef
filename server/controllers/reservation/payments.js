const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const {
  sendRefreshToken,
  refreshAuthorized,
} = require('../token/refreshToken');

const { reservation, review } = require('../../models');

const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  post: async (req, res) => {
    try {
      const { imp_uid, merchant_uid } = req.body.data;

      const {
        people,
        allergy,
        location,
        mobile,
        rsDate,
        rsTime,
        isOven,
        burner,
        messageToChef,
        rsUserId,
        rsChefId,
        rsCourseId,
        merchent_uid,
      } = req.body.data.reservationData;

      const accessVerify = isAuthorized(req);
      const refreshVerify = refreshAuthorized(req);

      // console.log(refreshVerify);

      console.log('req : ', req.headers);
      console.log('accssVeri : ', accessVerify);

      if (accessVerify) {
        const makeReservation = await reservation.create({
          people: people,
          allergy: allergy,
          location: location,
          mobile: mobile,
          rsDate: rsDate,
          rsTime: rsTime,
          isOven: isOven,
          burner: burner,
          messageToChef: messageToChef,
          rsUserId: rsUserId,
          rsChefId: rsChefId,
          rsCourseId: rsCourseId,
          merchantUid: merchant_uid,
        });

        await review.create({
          rating: '',
          eval: '',
          rvImg: '',
          rvUserId: rsUserId,
          rvChefId: rsChefId,
          rvReservationId: makeReservation.dataValues.id,
        });
        res.status(200).json({ message: 'ok' });
      } else {
        if (refreshVerify) {
          // accessToken은 만료 됐지만 refreshToken은 존재할 때
          const makeReservation = await reservation.create({
            people: people,
            allergy: allergy,
            location: location,
            mobile: mobile,
            rsDate: rsDate,
            rsTime: rsTime,
            isOven: isOven,
            burner: burner,
            messageToChef: messageToChef,
            rsUserId: rsUserId,
            rsChefId: rsChefId,
            rsCourseId: rsCourseId,
            merchantUid: merchant_uid,
          });

          await review.create({
            rating: '',
            eval: '',
            rvImg: '',
            rvUserId: rsUserId,
            rvChefId: rsChefId,
            rvReservationId: makeReservation.dataValues.id,
          });

          delete refreshVerify.iat;
          delete refreshVerify.exp;
          const accessToken = basicAccessToken(refreshVerify);
          res.status(201).json({ message: 'ok', accessToken: accessToken });
        } else {
          // token이 둘 다 만료 됐을 때
          await reservation.destroy({
            where: { merchantUid: req.body.data.merchant_uid, force: true },
          });
          res.status(401).json({ message: 'Send new login request' });
        }
      }
      // !!!!!!!!!!!!!reservation 만들어주기!!!!!!!!!!!!!!!!!!!

      console.log('첫빠따');

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

      console.log('req_body', req.body);
      console.log('getToken : ', getToken.data);

      console.log('imp_uid', req.body.data.imp_uid);

      const getPaymentData = await axios({
        url: `https://api.iamport.kr/payments/${imp_uid}`, // imp_uid 전달
        method: 'get', // GET method
        headers: { Authorization: access_token }, // 인증 토큰 Authorization header에 추가
      });
      const paymentData = getPaymentData.data.response; // 조회한 결제 정보

      console.log('getPaymentData : ', getPaymentData);
      console.log('aaa', paymentData);

      const findReservation = await reservation.findOne({
        where: { merchantUid: paymentData.merchant_uid },
      });

      const { amount, status } = paymentData;

      if (amount === 10) {
        switch (status) {
          case 'paid': // 결제 완료
            res.send({ status: 'success', message: '일반 결제 성공' });
            break;
        }
      } else {
        throw { status: 'forgery', message: '위조된 결제시도' };
      }
    } catch (err) {
      console.log(err);
      await reservation.destroy({
        where: { merchantUid: req.body.data.merchant_uid, force: true },
      });
      res.status(400).json({ message: err });
    }
  },
};
