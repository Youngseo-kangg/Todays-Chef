const { reservation, course, chef, user, review } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const {
  sendRefreshToken,
  refreshAuthorized,
} = require('../token/refreshToken');

module.exports = {
  // accessToken 받아와서 기한이 만료 됐는지 안 됐는지 확인 후 예약할 수 있게끔 만들어주기
  post: async (req, res) => {
    console.log('req.body: ', req.body);
    const {
      people,
      allergy,
      location,
      mobile,
      rsDate,
      rsTime,
      isOven,
      burner,
      messageToChef,
      rsUserId,
      rsChefId,
      rsCourseId,
    } = req.body;
    const accessVerify = isAuthorized(req);
    const refreshVerify = refreshAuthorized(req);

    // console.log(refreshVerify);

    if (accessVerify) {
      const makeReservation = await reservation.create({
        people: people,
        allergy: allergy,
        location: location,
        mobile: mobile,
        rsDate: rsDate,
        rsTime: rsTime,
        isOven: isOven,
        burner: burner,
        messageToChef: messageToChef,
        rsUserId: rsUserId,
        rsChefId: rsChefId,
        rsCourseId: rsCourseId,
      });

      await review.create({
        rating: '',
        eval: '',
        rvImg: '',
        rvUserId: rsUserId,
        rvChefId: rsChefId,
        rvReservationId: makeReservation.dataValues.id,
      });
      res.status(200).json({ message: 'ok' });
    } else {
      if (refreshVerify) {
        // accessToken은 만료 됐지만 refreshToken은 존재할 때
        delete refreshVerify.iat;
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);
        res.status(201).json({ message: 'ok', accessToken: accessToken });
      } else {
        // token이 둘 다 만료 됐을 때
        res.status(401).json({ message: 'Send new login request' });
      }
    }
  },

  get: async (req, res) => {
    if (req.query.chefId && req.query.courseId) {
      const findChefName = await chef.findOne({
        where: { id: req.query.chefId },
      });

      const findCourse = await course.findOne({
        where: { id: req.query.courseId },
      });

      const sendCourse = findCourse.dataValues;
      delete sendCourse.createdAt;
      delete sendCourse.updatedAt;
      if (!findCourse || !findChefName) {
        res.status(400).json({ message: 'undefined Info' });
      }
      res.status(200).json({
        message: 'ok',
        data: {
          chefName: findChefName.dataValues.chefName,
          course: sendCourse,
        },
      });
    } else if (!req.query.courseId || !req.query.chefId) {
      res.status(400).json({ message: 'plz input both chefId and courseId' });
    }
  },
};
