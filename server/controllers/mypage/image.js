const { user, chef } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const { refreshAuthorized } = require('../token/refreshToken');

module.exports = {
  post: async (req, res) => {
    const accessVerify = isAuthorized(req);
    // req.params.id;
    // accessToken 만료
    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      // refreshToken 만료
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      }
      // refreshToken 유효
      else {
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);
        // const findBooleanChef = await user.findOne({
        //   where: { id: req.params.id },
        // });

        res.status(201).json({
          accessToken,
          message: 'user ok',
          location: req.file.location,
        });
      }
    } else {
      await user.update(
        { userImg: req.file.location },
        { where: { id: req.params.id } }
      );
      res.status(200).json({ message: 'user ok', location: req.file.location });
    }
  },
};
