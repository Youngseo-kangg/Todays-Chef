const { reservation } = require('../../models');

module.exports = {
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
  },

  get: async (req, res) => {
    console.log(req.query);
  },
};
