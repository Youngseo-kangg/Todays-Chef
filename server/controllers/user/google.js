const { user, chef } = require('../../models');
const { basicAccessToken } = require('../token/accessToken');
const {
  basicRefreshToken,
  sendRefreshToken,
} = require('../token/refreshToken');

const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

module.exports = {
  post: async (req, res) => {
    const { authorizationCode } = req.body;
    console.log('authorizationCode', authorizationCode);
    if (!authorizationCode) {
      console.log('첫쨰');
      res.status(400).json({ message: 'authorizationCode does not exist' });
    }

    // ! 유저 정보 가져오기
    const googleClientId = process.env.GOOGLE_CLIENT_ID;
    const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirect_url = process.env.REDIRECT_URI || `http://localhost:3000`;
    const googleClient = new OAuth2Client(
      googleClientId,
      googleClientSecret,
      redirect_url
    );

    console.log('googleClient', googleClient);

    let code;
    try {
      code = await googleClient.getToken(authorizationCode);
    } catch (error) {
      console.log('둘쨰');
      console.log(error);
      res.status(400).json({ message: 'authorizationCode does not exist' });
    }

    const idToken = code.tokens.id_token;
    const ticket = await googleClient.verifyIdToken({ idToken });
    const googleUserInfo = ticket.getPayload();
    const googleEmail = googleUserInfo.email;
    const googleName = googleUserInfo.name;
    const googleUserPic = googleUserInfo.picture;

    const userUsingEmail = await user.findOne({
      where: { email: googleEmail },
    });

    // 없으면 가입하기
    if (!userUsingEmail) {
      const userInfo = await user.create({
        email: googleEmail,
        nickname: googleName,
        userImg: googleUserPic,
        isChef: false,
        isOauth: true,
        isAdmin: false,
        isSubmit: false,
      });

      delete userInfo.dataValues.password;
      delete userInfo.dataValues.updatedAt;
      delete userInfo.dataValues.createdAt;

      const accessToken = basicAccessToken(userInfo.dataValues);
      const refreshToken = basicRefreshToken(userInfo.dataValues);

      sendRefreshToken(res, refreshToken);
      res.status(201).json({ accessToken: accessToken, userInfo: userInfo });
    } else {
      // 있으면 로그인
      if (userUsingEmail.dataValues.isOauth) {
        delete userUsingEmail.dataValues.password;
        delete userUsingEmail.dataValues.createdAt;
        delete userUsingEmail.dataValues.updatedAt;

        const accessToken = basicAccessToken(userUsingEmail.dataValues);
        const refreshToken = basicRefreshToken(userUsingEmail.dataValues);
        sendRefreshToken(res, refreshToken);

        if (!userUsingEmail.dataValues.isChef) {
          res.status(200).json({ accessToken, userInfo: userUsingEmail });
        } else {
          const findChef = await chef.findOne({
            where: { chUserId: userUsingEmail.dataValues.id },
          });

          userUsingEmail.dataValues.chefId = findChef.dataValues.id;
          res.status(200).json({ accessToken, userInfo: userUsingEmail });
        }
      } else {
        res.status(400).json({ message: 'You Already Signed up' });
      }
    }
  },
};
