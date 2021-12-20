const { review } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const { refreshAuthorized } = require('../token/refreshToken');

module.exports = {
  post: async (req, res) => {
    const accessVerify = isAuthorized(req);
    const saveImg = req.files.map((el) => el.location).join(',');
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
        await review.update(
          { rvImg: saveImg },
          { where: { id: req.params.id } }
        );

        res.status(201).json({ accessToken, message: 'ok' });
      }
    } else {
      await review.update({ rvImg: saveImg }, { where: { id: req.params.id } });

      res.status(200).json({ message: 'ok' });
    }
  },
};
