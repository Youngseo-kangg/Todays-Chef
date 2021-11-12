const { user } = require('../../models');
const axios = require('axios');
const { basicAccessToken } = require('../token/accessToken');
const {
  basicRefreshToken,
  sendRefreshToken,
} = require('../token/refreshToken');

module.exports = {
  post: async (req, res) => {
    const { authorizationCode } = req.body;
    const kakaoRedirectUri =
      process.env.REDIRECT_URI || `http://localhost:3000`;

    const kakaoData = await axios({
      method: 'post',
      url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_REST_API}&redirect_uri=${kakaoRedirectUri}&code=${authorizationCode}`,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    console.log('access_token 확인 : ', kakaoData);

    res.status(200).json({ message: 'kakaoLogin' });
  },
};
