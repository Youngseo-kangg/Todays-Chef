const { user, bechef } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const { refreshAuthorized } = require('../token/refreshToken');

module.exports = {
  post: async (req, res) => {
    const accessVerify = isAuthorized(req);
    const findBechef = await bechef.findOne({ where: { id: req.body.id } });

    console.log(findUser);

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      } else {
        // refreshToken 유효
        // ***nodeMail 해주기
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);
        await user.update(
          { isSubmit: false },
          { where: { id: findBechef.dataValues.bcUserId } }
        );
        await bechef.destory({ where: { id: req.body.id } });
        res.status(201).json({ accessToken, message: 'ok' });
      }
    } else {
      // ***nodeMail 해주기
      await user.update(
        { isSubmit: false },
        { where: { id: findBechef.dataValues.bcUserId } }
      );
      await bechef.destory({ where: { id: req.body.id } });
      res.status(200).json({ message: 'ok' });
    }
  },
};
