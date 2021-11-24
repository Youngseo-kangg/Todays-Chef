const { review, chef, user, course, reservation } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const { refreshAuthorized } = require('../token/refreshToken');

module.exports = {
  get: async (req, res) => {
    const cuisine = decodeURI(decodeURIComponent(req.params.cuisine));
    const reqCuisine = req.params.cuisine;
    const sendChefInfoArr = [];

    const accessVerify = isAuthorized(req);

    const startSlice = Number(req.query.startNum);
    const endSlice = Number(req.query.endNum);

    const findChef = await chef.findAll({ where: { cuisine: cuisine } });

    for (let i = 0; i < findChef.length; i++) {
      delete findChef[i].dataValues.chefImg;
      delete findChef[i].dataValues.greeting;
      delete findChef[i].dataValues.career;
      delete findChef[i].dataValues.values;
      delete findChef[i].dataValues.createdAt;
      delete findChef[i].dataValues.updatedAt;

      sendChefInfoArr.push(findChef[i].dataValues);
    }

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      } else {
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);

        if (req.query.startNum && req.query.endNum) {
          res.status(201).json({
            accessToken,
            message: 'ok',
            length: sendChefInfoArr.length,
            data: sendChefInfoArr.slice(startSlice, endSlice + 1),
          });
        } else if (!req.query.startNum || !req.query.endNum) {
          res.status(400).json({ message: 'undefined chef' });
        }
      }
    } else {
      if (req.query.startNum && req.query.endNum) {
        res.status(200).json({
          message: 'ok',
          length: sendChefInfoArr.length,
          data: sendChefInfoArr.slice(startSlice, endSlice + 1),
        });
      } else if (!req.query.startNum || !req.query.endNum) {
        res.status(400).json({ message: 'undefined chef' });
      }
    }
  },

  post: async (req, res) => {
    // user 정보 삭제, chef 정보 삭제, 예약 정보 삭제, 리뷰 정보 삭제
    const findChefId = await chef.findOne({ id: req.body.id });
    const userId = findChefId.dataValues.chUserId;

    const accessVerify = isAuthorized(req);

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      } else {
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);

        await review.destroy({ where: { rvChefId: req.body.id }, force: true });
        await reservation.destroy({
          where: { rsChefId: req.body.id },
          force: true,
        });
        await course.destroy({ where: { coChefId: req.body.id }, force: true });
        await chef.destroy({ where: { id: req.body.id }, force: true });
        await user.destroy({ where: { id: userId }, force: true });

        res.status(201).json({ accessToken, message: 'ok' });
      }
    } else {
      await review.destroy({ where: { rvChefId: req.body.id }, force: true });
      await reservation.destroy({
        where: { rsChefId: req.body.id },
        force: true,
      });
      await course.destroy({ where: { coChefId: req.body.id }, force: true });
      await chef.destroy({ where: { id: req.body.id }, force: true });
      await user.destroy({ where: { id: userId }, force: true });

      res.status(200).json({ message: 'ok' });
    }
  },
};
