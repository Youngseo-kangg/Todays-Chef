const { user, chef } = require('../../models');
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

    // console.log('req.body : ', authorizationCode);

    res.json({ data: authorizationCode });

    // const kakaoData = await axios({
    //   method: 'post',
    //   url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_REST_API}&redirect_uri=${kakaoRedirectUri}&code=${authorizationCode}`,
    //   headers: {
    //     'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    //   },
    // });

    // console.log('access_token 확인 : ', kakaoData.data);
    // res.json({ reqBody: authorizationCode, accessToken: kakaoData.data });

    // const userData = await axios({
    //   method: 'get',
    //   url: `https://kapi.kakao.com/v2/user/me?access_token=${kakaoData.data.access_token}`,
    //   headers: {
    //     'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    //   },
    // }); // 카카오에서 가지고 온 유저 정보
    // console.log('유저 정보 : ', userData.data);

    // const findUser = await user.findOne({
    //   where: { email: userData.data.kakao_account.email },
    // });

    // if (!authorizationCode) {
    //   res.status(400).json({ message: 'authorizationCode does not exist' });
    // } else {
    //   if (findUser) {
    //     // 이미 회원가입이 일반가입으로 되어있을 때
    //     if (!findUser.dataValues.isOauth) {
    //       res.status(400).json({ message: 'You already Signed up' });
    //     } else {
    //       const userInfo = findUser.dataValues;
    //       delete userInfo.password;
    //       delete userInfo.updatedAt;
    //       delete userInfo.createdAt;

    //       const accessToken = basicAccessToken(userInfo);
    //       const refreshToken = basicRefreshToken(userInfo);

    //       sendRefreshToken(res, refreshToken);

    //       if (!userInfo.isChef) {
    //         res
    //           .status(200)
    //           .json({ accessToken: accessToken, userInfo: userInfo });
    //       } else {
    //         const findChef = await chef.findOne({
    //           where: { chUserId: findUser.dataValues.id },
    //         });
    //         userInfo.chefId = findChef.dataValues.id;
    //         res
    //           .status(200)
    //           .json({ accessToken: accessToken, userInfo: userInfo });
    //       }
    //     }
    //   } else {
    //     const newUserData = await user.create({
    //       email: userData.data.kakao_account.email,
    //       nickname: userData.data.kakao_account.profile.nickname,
    //       userImg: userData.data.kakao_account.profile.profile_image_url,
    //       isChef: false,
    //       isOauth: true,
    //       isAdmin: false,
    //       isSubmit: false,
    //     });

    //     const userInfo = newUserData.dataValues;
    //     delete userInfo.password;
    //     delete userInfo.updatedAt;
    //     delete userInfo.createdAt;

    //     const accessToken = basicAccessToken(userInfo);
    //     const refreshToken = basicRefreshToken(userInfo);

    //     sendRefreshToken(res, refreshToken);
    //     res.status(201).json({ accessToken: accessToken, userInfo: userInfo });
    //   }
    // }
  },
};
