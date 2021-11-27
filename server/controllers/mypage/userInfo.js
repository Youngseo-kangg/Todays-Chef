const { basicAccessToken, isAuthorized } = require('../token/accessToken');
const {
  sendRefreshToken,
  refreshAuthorized,
} = require('../token/refreshToken');
const { user } = require('../../models');
const { encryptPwd, comparePwd } = require('../hashing/hashingPwd');

module.exports = {
  post: async (req, res) => {
    const accessVerify = isAuthorized(req);
    const findUser = await user.findOne({ where: { id: req.params.id } });

    console.log(findUser);
    const editUserData = req.body;
    const { nickname, oldPwd, newPwd } = editUserData;

    if (!findUser) {
      res.status(400).json({ message: 'undefined user' });
    } else {
      if (!nickname) {
        if (!accessVerify) {
          const refreshVerify = refreshAuthorized(req);
          if (!refreshVerify) {
            res.status(401).json({ message: 'Send new Login Request' });
          } else {
            delete refreshVerify.exp;
            const accessToken = basicAccessToken(refreshVerify);

            if (comparePwd(oldPwd, findUser.dataValues.password)) {
              const encryptedPw = encryptPwd(newPwd);
              await user.update(
                { password: encryptedPw },
                { where: { id: accessVerify.id } }
              );
              res.status(201).json({ accessToken, message: 'ok' });
            } else {
              res.status(400).json({ message: 'wrong password' });
            }
          }
        } else {
          if (comparePwd(oldPwd, findUser.dataValues.password)) {
            const encryptedPw = encryptPwd(newPwd);
            await user.update(
              { password: encryptedPw },
              { where: { id: accessVerify.id } }
            );
            res.status(200).json({ message: 'ok' });
          } else {
            res.status(400).json({ message: 'wrong password' });
          }
        }
      } else {
        if (!accessVerify) {
          const refreshVerify = refreshAuthorized(req);
          if (!refreshVerify) {
            res.status(401).json({ message: 'Send new Login Request' });
          } else {
            delete refreshVerify.exp;
            const accessToken = basicAccessToken(refreshVerify);
            await user.update(
              { nickname: nickname },
              { where: { id: accessVerify.id } }
            );
            res.status(201).json({ accessToken, message: 'ok' });
          }
        } else {
          await user.update(
            { nickname: nickname },
            { where: { id: accessVerify.id } }
          );
          res.status(200).json({ message: 'ok' });
        }
      }
    }
  },

  delete: async (req, res) => {
    const accessVerify = isAuthorized(req);
    const refreshVerify = refreshAuthorized(req);
    const userId = req.params.id;

    if (accessVerify || refreshVerify) {
      await user.destroy({
        where: { id: userId },
        force: true,
      });
      sendRefreshToken(res, null);
      res.status(200).json({ message: 'ok' });
    } else {
      res.status(401).json({ message: 'Send new Login Request' });
    }
  },
};
