const { user, bechef } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const { refreshAuthorized } = require('../token/refreshToken');
const { successMail } = require('../sendMail');

module.exports = {
  post: async (req, res) => {
    const accessVerify = isAuthorized(req);
    const findBechef = await bechef.findOne({ where: { id: req.body.id } });
    const findEmail = await user.findOne({
      where: { id: findBechef.dataValues.bcUserId },
    });

    console.log('userEmail : ', findEmail.dataValues.email);

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      } else {
        // refreshToken 유효s
        // ***nodeMail 해주기
        successMail(findEmail.dataValues.email);
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);
        await user.update(
          { isSubmit: false, isChef: true },
          { where: { id: findBechef.dataValues.bcUserId } }
        );
        await bechef.destroy({ where: { id: req.body.id }, force: true });

        res.status(201).json({ accessToken, message: 'ok' });
      }
    } else {
      // ***nodeMail 해주기
      successMail(findEmail.dataValues.email);
      await user.update(
        { isSubmit: false, isChef: true },
        { where: { id: findBechef.dataValues.bcUserId } }
      );
      await bechef.destroy({ where: { id: req.body.id }, force: true });
      res.status(200).json({ message: 'ok' });
    }
  },
};
