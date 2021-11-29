const { course, reservation, user } = require('../../models');
const { basicAccessToken, isAuthorized } = require('../token/accessToken');
const {
  sendRefreshToken,
  refreshAuthorized,
} = require('../token/refreshToken');

module.exports = {
  get: async (req, res) => {
    const accessVerify = isAuthorized(req);

    const findReservation = await reservation.findAll({
      where: { rsChefId: req.query.id },
    });

    const sendDataArr = [];

    for (let i = 0; i < findReservation.length; i++) {
      const findUser = await user.findOne({
        where: { id: findReservation[i].dataValues.rsUserId },
      });
      const findCourse = await course.findOne({
        where: { id: findReservation[i].dataValues.rsCourseId },
      });

      findReservation[i].dataValues.userName = findUser.dataValues.nickname;
      findReservation[i].dataValues.courseName =
        findCourse.dataValues.courseName;

      delete findReservation[i].dataValues.rsUserId;
      delete findReservation[i].dataValues.createdAt;
      delete findReservation[i].dataValues.updatedAt;
      delete findReservation[i].dataValues.rsChefId;
      delete findReservation[i].dataValues.updatedAt;
      delete findReservation[i].dataValues.coChefId;

      sendDataArr.push(findReservation[i].dataValues);
    }

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      } else {
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);
        res.status(201).json({ accessToken, message: 'ok', data: sendDataArr });
      }
    } else {
      res.status(200).json({ message: 'ok', data: sendDataArr });
    }
  },
};
