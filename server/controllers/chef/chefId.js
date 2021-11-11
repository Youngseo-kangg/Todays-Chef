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

    delete chefInfo.dataValues.chUserId;
    delete chefInfo.dataValues.rating;
    delete chefInfo.dataValues.createdAt;
    delete chefInfo.dataValues.updatedAt;
    // 셰프 정보 보낼 것만 보내기 위함

    const chefCourse = [];
    for (let i = 0; i < findCourse.length; i++) {
      delete findCourse[i].dataValues.id;
      delete findCourse[i].dataValues.coChefId;
      delete findCourse[i].dataValues.createdAt;
      delete findCourse[i].dataValues.updatedAt;

      chefCourse.push(findCourse[i]);
    }

    const chefReview = [];

    for (let i = 0; i < findReview.length; i++) {
      delete findReview[i].dataValues.rvChefId;
      delete findReview[i].dataValues.createdAt;
      delete findReview[i].dataValues.updatedAt;

      chefReview.push(findReview[i]);
    }

    for (let i = 0; i < findReview.length; i++) {
      let test = findReview[i].dataValues.rvUserId;
      const findUser = await user.findOne({
        where: { id: test },
      });
    }
    res.json(chefReview);
  },
};

// chefReview:[
//   {
//        id : 1,
//        userNickname:"맛있으면 우는 닭",
//        userImg: "~~~~",
//        userRating: 4.5,
//        userEval:"꼬꼬댁꼬꼬댁 꼬꼬꼬, 꼬끼오"
//        rvImg: "",
//        rvDate: "2021-11-11T07:49:13.000Z",
//   },

// {
//   "id": 1,
//   "rvUserId": 1,
//   "rating": 5,
//   "eval": "무척 맛있고 고급스러웠음",
//   "rvImg": "",
//   "rvChefId": 1,
//   "rvDate": "2021-11-11T07:49:13.000Z",
//   "createdAt": "2021-11-11T07:49:13.000Z",
//   "updatedAt": "2021-11-11T07:49:13.000Z"
// },

// ++ userNickname, userImg;
// -- rvUserId, rvChefId, createdAt, updatedAt;
