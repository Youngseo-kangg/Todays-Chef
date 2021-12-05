const { review, chef, user } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const { refreshAuthorized } = require('../token/refreshToken');

module.exports = {
  get: async (req, res) => {
    const cuisine = decodeURI(decodeURIComponent(req.params.cuisine));
    const reqCuisine = req.params.cuisine;
    const findAllReview = await review.findAll();
    const allReviewsData = [];

    const accessVerify = isAuthorized(req);

    for (let i = 0; i < findAllReview.length; i++) {
      // 리뷰쓴 사람들 이름과 cuisine 종류 찾아서 붙이기
      const userId = findAllReview[i].dataValues.rvUserId;
      const findUser = await user.findOne({ where: { id: userId } });
      const findUserName = findUser.dataValues.nickname;

      const chefId = findAllReview[i].dataValues.rvChefId;
      const findChefInfo = await chef.findOne({ where: chefId });
      const findChefCuisine = findChefInfo.dataValues.cuisine;

      findAllReview[i].dataValues.nickname = findUserName;
      findAllReview[i].dataValues.cuisine = findChefCuisine;
      delete findAllReview[i].dataValues.rvUserId;
      delete findAllReview[i].dataValues.rvImg;
      delete findAllReview[i].dataValues.rvChefId;
      delete findAllReview[i].dataValues.updatedAt;

      allReviewsData.push(findAllReview[i].dataValues);
    }

    const filterReviewsData = allReviewsData.filter(
      (el) => el.cuisine === cuisine
    );

    const startSlice = Number(req.query.startNum);
    const endSlice = Number(req.query.endNum);

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
            length: filterReviewsData.length,
            data: filterReviewsData.slice(startSlice, endSlice),
          });
        } else if (!req.query.startNum || !req.query.endNum) {
          res.status(400).json({ message: 'undefined review' });
        }
      }
    } else {
      if (req.query.startNum && req.query.endNum) {
        res.status(200).json({
          message: 'ok',
          length: filterReviewsData.length,
          data: filterReviewsData.slice(startSlice, endSlice),
        });
      } else if (!req.query.startNum || !req.query.endNum) {
        res.status(400).json({ message: 'undefined review' });
      }
    }
  },

  post: async (req, res) => {
    const accessVerify = isAuthorized(req);

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      } else {
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);

        await review.destroy({ where: { id: req.body.id }, force: true });
        res.status(201).json({ accessToken, message: 'ok' });
      }
    } else {
      await review.destroy({ where: { id: req.body.id }, force: true });
      res.status(200).json({ message: 'ok' });
    }
  },
};
