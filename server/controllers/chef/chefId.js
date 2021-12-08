const { chef, course, review, user } = require('../../models');

module.exports = {
  get: async (req, res) => {
    const findChefId = Number(req.query.chefId);
    const chefInfo = await chef.findOne({ where: { id: findChefId } });
    const findCourse = await course.findAll({
      where: { coChefId: findChefId },
    }); // 그 셰프에 맞는 코스찾기
    const findReview = await review.findAll({
      where: { rvChefId: findChefId },
    }); // 그 셰프에 맞는 리뷰 찾기

    if (!chefInfo) {
      res.status(400).json({ message: 'undefined chefId' });
    } else {
      delete chefInfo.dataValues.chUserId;
      delete chefInfo.dataValues.rating;
      delete chefInfo.dataValues.createdAt;
      delete chefInfo.dataValues.updatedAt;
      // 셰프 정보 보낼 것만 보내기 위함

      const chefCourse = [];
      for (let i = 0; i < findCourse.length; i++) {
        // delete findCourse[i].dataValues.id;
        delete findCourse[i].dataValues.coChefId;
        delete findCourse[i].dataValues.createdAt;
        delete findCourse[i].dataValues.updatedAt;

        chefCourse.push(findCourse[i]);
      }
      // 셰프 코스 보낼 것만 보내기 위함

      const startSlice = Number(req.query.startNum);
      const endSlice = Number(req.query.endNum);

      const chefReview = [];
      for (let i = 0; i < findReview.length; i++) {
        delete findReview[i].dataValues.createdAt;
        delete findReview[i].dataValues.updatedAt;

        chefReview.push(findReview[i]);
      }

      for (let i = 0; i < chefReview.length; i++) {
        let test = findReview[i].rvUserId;
        const findUser = await user.findOne({
          where: { id: test },
        });
        chefReview[i].dataValues.nickname = findUser.dataValues.nickname;
        chefReview[i].dataValues.userImg = findUser.dataValues.userImg;
      }
      // 셰프 리뷰 보낼 것만 보내기 위함

      if (req.query.startNum && req.query.endNum) {
        res.status(200).json({ data: chefReview.slice(startSlice, endSlice) });
      } else if (!startSlice || !endSlice) {
        res.status(200).json({
          data: chefInfo,
          chefCourse: chefCourse,
          chefReviewLength: chefReview.length,
        });
      }
    }
  },
};
