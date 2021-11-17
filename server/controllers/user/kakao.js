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

    console.log('req.body : ', authorizationCode);

    const kakaoData = await axios({
      method: 'post',
      url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_REST_API}&redirect_uri=${kakaoRedirectUri}&code=${authorizationCode}`,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    console.log('access_token 확인 : ', kakaoData.data);

    const userData = await axios({
      method: 'get',
      url: `https://kapi.kakao.com/v2/user/me?access_token=${kakaoData.data.access_token}`,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    }); // 카카오에서 가지고 온 유저 정보
    console.log('유저 정보 : ', userData.data);

    const findUser = await user.findOne({
      where: { email: userData.data.kakao_account.email },
    });

    if (findUser) {
      // 이미 회원가입을 했을 때
      // if(findUser.dataValues)
      res.status(400).json({ message: 'You already Signed up' });
    } else {
      const newUserData = await user.create({
        email: userData.data.kakao_account.email,
        nickname: userData.data.kakao_account.profile.nickname,
        userImg: userData.data.kakao_account.profile.profile_image_url,
      });
    }

    res.status(200).json({ message: 'kakaoLogin' });
  },
};
