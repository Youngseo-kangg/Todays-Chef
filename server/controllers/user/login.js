const { user } = require('../../models');
const { basicAccessToken } = require('../token/accessToken');
const {
  basicRefreshToken,
  sendRefreshToken,
} = require('../token/refreshToken');
const { comparePwd } = require('../hashing/hashingPwd');

module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;
    const userInfo = await user.findOne({ where: { email } });

    if (!userInfo) {
      res.status(400).json({ message: 'Invalid User' });
    } else {
      const comparedPwd = comparePwd(password, userInfo.dataValues.password);
      if (!comparedPwd) {
        res.status(400).json({ message: 'Invalid User' });
      } else {
        if (userInfo.dataValues.isOAuth) {
          res.status(400).json({ message: 'You Already Signed up' });
        } else {
          delete userInfo.dataValues.password;
          delete userInfo.dataValues.createdAt;
          delete userInfo.dataValues.updatedAt;

          const accessToken = basicAccessToken(userInfo.dataValues);
          const refreshToken = basicRefreshToken(userInfo.dataValues);

          sendRefreshToken(res, refreshToken);
          res.status(200).json({ accessToken, userInfo });
        }
      }
    }
  },
};
