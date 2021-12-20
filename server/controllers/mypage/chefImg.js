const { chef } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const { refreshAuthorized } = require('../token/refreshToken');

module.exports = {
  post: async (req, res) => {
    const accessToken = isAuthorized(req);

    if (!accessToken) {
      const refreshVerify = refreshAuthorized(req);
      // refreshToken 만료
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      }
      // refreshToken 유효
      else {
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);

        await chef.update(
          { chefImg: req.file.location },
          { where: { id: req.query.id } }
        );

        res.status(201).json({
          accessToken,
          message: 'chef ok',
          location: req.file.location,
        });
      }
    } else {
      await chef.update(
        { chefImg: req.file.location },
        { where: { id: req.query.id } }
      );

      res.status(200).json({ message: 'chef ok', location: req.file.location });
    }
  },
};
