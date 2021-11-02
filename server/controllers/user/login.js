const { user } = require('../../models');
const { basicAccessToken } = require('../token/accessToken');
const {
  basicRefreshToken,
  sendRefreshToken,
} = require('../token/refreshToken');

module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;
    const userInfo = await user.findOne({ where: { email, password } });

    if (!userInfo) {
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
    // try {
    //   console.log('hi');
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json({ message: 'Internal server error' });
    // }
  },
};
