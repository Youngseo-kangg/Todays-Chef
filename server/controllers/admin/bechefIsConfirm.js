const { user, bechef, chef } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const { refreshAuthorized } = require('../token/refreshToken');
const { successMail, failMail } = require('../sendMail');

module.exports = {
  post: async (req, res) => {
    const accessVerify = isAuthorized(req);
    const findBechef = await bechef.findOne({ where: { id: req.body.id } });
    console.log('findBechef: ', findBechef);
    const findEmail = await user.findOne({
      where: { id: findBechef.dataValues.bcUserId },
    });
    console.log('findEmail: ', findEmail);

    if (req.params.isConfirm === 'confirm') {
      if (!accessVerify) {
        const refreshVerify = refreshAuthorized(req);
        if (!refreshVerify) {
          res.status(401).json({ message: 'Send new Login Request' });
        } else {
          // refreshToken 유효
          // ***nodeMail 해주기
          delete refreshVerify.exp;
          const accessToken = basicAccessToken(refreshVerify);
          let mail = await successMail(
            findEmail.dataValues.email,
            findEmail.dataValues.nickname
          );
          console.log('mail: ', mail);
          await user.update(
            { isSubmit: false, isChef: true },
            { where: { id: findBechef.dataValues.bcUserId } }
          );
          await chef.create({
            chefName: '',
            cuisine: '',
            chefImg: '',
            greeting: '',
            career: '',
            values: '',
            rating: '',
            chUserId: findBechef.dataValues.bcUserId,
          });
          await bechef.destroy({ where: { id: req.body.id }, force: true });

          res.status(201).json({ accessToken, message: 'confirm ok' });
        }
      } else {
        // ***nodeMail 해주기
        let mail = await successMail(
          findEmail.dataValues.email,
          findEmail.dataValues.nickname
        );
        console.log('mail: ', mail);
        await user.update(
          { isSubmit: false, isChef: true },
          { where: { id: findBechef.dataValues.bcUserId } }
        );
        await chef.create({
          chefName: '',
          cuisine: '',
          chefImg: '',
          greeting: '',
          career: '',
          values: '',
          rating: '',
          chUserId: findBechef.dataValues.bcUserId,
        });
        await bechef.destroy({ where: { id: req.body.id }, force: true });
        res.status(200).json({ message: 'confirm ok' });
      }
    } else if (req.params.isConfirm === 'refuse') {
      if (!accessVerify) {
        const refreshVerify = refreshAuthorized(req);
        if (!refreshVerify) {
          res.status(401).json({ message: 'Send new Login Request' });
        } else {
          // refreshToken 유효
          // ***nodeMail 해주기
          delete refreshVerify.exp;
          const accessToken = basicAccessToken(refreshVerify);
          let failmail = failMail(
            findEmail.dataValues.email,
            findEmail.dataValues.nickname
          );
          console.log('failmail: ', failmail);
          await user.update(
            { isSubmit: false },
            { where: { id: findBechef.dataValues.bcUserId } }
          );
          await bechef.destroy({ where: { id: req.body.id }, force: true });

          res.status(201).json({ accessToken, message: 'refuse ok' });
        }
      } else {
        // ***nodeMail 해주기
        let failmail = failMail(
          findEmail.dataValues.email,
          findEmail.dataValues.nickname
        );
        console.log('failmail: ', failmail);
        await user.update(
          { isSubmit: false },
          { where: { id: findBechef.dataValues.bcUserId } }
        );
        await bechef.destroy({ where: { id: req.body.id }, force: true });
        res.status(200).json({ message: 'refuse ok' });
      }
    }
  },
};
