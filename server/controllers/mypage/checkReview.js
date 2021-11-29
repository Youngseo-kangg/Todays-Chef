const { reservation, chef, course, review } = require('../../models');
const { basicAccessToken, isAuthorized } = require('../token/accessToken');
const {
  sendRefreshToken,
  refreshAuthorized,
} = require('../token/refreshToken');

module.exports = {
  get: async (req, res) => {
    const accessVerify = isAuthorized(req);

    const findReservation = await reservation.findAll({
      where: { rsUserId: req.query.id },
    });

    const findMonth = new Date(new Date().setMonth(new Date().getMonth() - 1));
    // 한달이라는 시간 기준으로 잡기

    const sendDataArr = [];

    for (let i = 0; i < findReservation.length; i++) {
      const reservationDate = findReservation[i].dataValues.rsDate;
      const findChef = await chef.findOne({
        where: { id: findReservation[i].dataValues.rsChefId },
      });
      const findCourse = await course.findOne({
        where: { id: findReservation[i].dataValues.rsCourseId },
      });
      const findReview = await review.findOne({
        where: { rvReservationId: findReservation[i].dataValues.id },
      });

      delete findReservation[i].dataValues.people;
      delete findReservation[i].dataValues.allergy;
      delete findReservation[i].dataValues.location;
      delete findReservation[i].dataValues.mobile;
      delete findReservation[i].dataValues.isOven;
      delete findReservation[i].dataValues.isOven;
      delete findReservation[i].dataValues.messageToChef;
      delete findReservation[i].dataValues.updatedAt;
      delete findReservation[i].dataValues.createdAt;
      delete findReservation[i].dataValues.rsUserId;
      delete findReservation[i].dataValues.rsCourseId;
      delete findReservation[i].dataValues.rsChefId;

      delete findReview.dataValues.updatedAt;
      delete findReview.dataValues.createdAt;
      delete findReview.dataValues.rvUserId;
      delete findReview.dataValues.rvChefId;
      delete findReview.dataValues.rvReservationId;

      findReservation[i].dataValues.chefName = findChef.dataValues.chefName;

      findReservation[i].dataValues.courseName =
        findCourse.dataValues.courseName;

      if (reservationDate > findMonth && findMonth <= new Date()) {
        sendDataArr.push({
          reservation: findReservation[i].dataValues,
          review: findReview.dataValues,
        });
      }
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

  patch: async (req, res) => {
    const accessVerify = isAuthorized(req);
    const { rating, eval, rvImg, id } = req.body;

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if(!refreshVerify){
        res.status(401).json({ message: 'Send new Login Request' });
      }else{
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);
        await review.update({rating : rating, eval : eval, rvImg : rvImg}, { where: { id: id } });
        res.status(201).json({ accessToken , message: 'ok' });
      }
    }else{
      await review.update({rating : rating, eval : eval, rvImg : rvImg}, { where: { id: id } });
      res.status(200).json({ message: 'ok' });
    }
  },
};
