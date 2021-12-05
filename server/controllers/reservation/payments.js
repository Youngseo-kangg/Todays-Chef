const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  post: async (req, res) => {
    try {
      const { imp_uid, merchant_uid } = req.body.data;

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
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err });
    }
  },
};
