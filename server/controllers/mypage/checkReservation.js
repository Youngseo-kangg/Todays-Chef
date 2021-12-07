const { chef, reservation, course } = require('../../models');
const { basicAccessToken, isAuthorized } = require('../token/accessToken');
const { refreshAuthorized } = require('../token/refreshToken');

module.exports = {
  get: async (req, res) => {
    const accessVerify = isAuthorized(req);
    const findReservation = await reservation.findAll({
      where: { rsUserId: req.query.id },
    });

    const sendDataArr = [];

    // console.log(findReservation);

    for (let i = 0; i < findReservation.length; i++) {
      const findChef = await chef.findOne({
        where: { id: findReservation[i].dataValues.rsChefId },
      });

      const findCourse = await course.findOne({
        where: { id: findReservation[i].dataValues.rsCourseId },
      });

      findReservation[i].dataValues.courseName =
        findCourse.dataValues.courseName;
      delete findReservation[i].dataValues.createdAt;
      delete findReservation[i].dataValues.updatedAt;

      findReservation[i].dataValues.chefName = findChef.dataValues.chefName;
      findReservation[i].dataValues.cuisine = findChef.dataValues.cuisine;

      sendDataArr.push(findReservation[i].dataValues);
    }

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        // refreshToken 까지 만료 됐을 때
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

  post: async (req, res) => {
    const accessVerify = isAuthorized(req);

    console.log('cancel', req.body);

    // if (!accessVerify) {
    //   const refreshVerify = refreshAuthorized(req);
    //   if (!refreshVerify) {
    //     // refreshToken 까지 만료 됐을 때
    //     res.status(401).json({ message: 'Send new Login Request' });
    //   } else {
    //     delete refreshVerify.exp;
    //     const accessToken = basicAccessToken(refreshVerify);
    //     await reservation.destroy({ where: { id: req.body.id }, force: true });
    //     res.status(201).json({ accessToken, message: 'ok' });
    //   }
    // } else {
    //   await reservation.destroy({ where: { id: req.body.id }, force: true });
    //   res.status(200).json({ message: 'cancel ready ok' });
    // }
  },
};
