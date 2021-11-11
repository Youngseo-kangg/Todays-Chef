const { chef, course, review } = require('../../models');

module.exports = {
  get: async (req, res) => {
    const findChefId = Number(req.query.chefId);
    const chefInfo = await chef.findOne({ where: { id: findChefId } });
    const findCourse = await course.findAll({
      where: { coChefId: findChefId },
    });
    const findReview = await review.findAll({ where: {} });

    console.log(findCourse);
  },
};
