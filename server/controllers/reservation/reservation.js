const { reservation } = require('../../models');
const { chef } = require('../../models');
const { course } = require('../../models');
const { isAuthorized } = require('../token/accessToken');

module.exports = {
  // accessToken 받아와서 기한이 만료 됐는지 안 됐는지 확인 후 예약할 수 있게끔 만들어주기
  post: async (req, res) => {
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

    console.log(isAuthorized(req));
    if (isAuthorized(req)) {
      await reservation.create({
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
      res.status(200).json({ message: 'ok' });
    } else {
      res.status();
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
