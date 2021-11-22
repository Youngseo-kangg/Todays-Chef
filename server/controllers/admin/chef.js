const { review, chef, user } = require('../../models');

module.exports = {
  get: async (req, res) => {
    const cuisine = decodeURI(decodeURIComponent(req.params.cuisine));
    const reqCuisine = req.params.cuisine;
    const sendChefInfoArr = [];

    const findChef = await chef.findAll({ where: { cuisine: cuisine } });

    for (let i = 0; i < findChef.length; i++) {
      delete findChef[i].dataValues.chefImg;
      delete findChef[i].dataValues.greeting;
      delete findChef[i].dataValues.career;
      delete findChef[i].dataValues.values;
      delete findChef[i].dataValues.createdAt;
      delete findChef[i].dataValues.updatedAt;

      sendChefInfoArr.push(findChef[i].dataValues);
    }

    const startSlice = Number(req.query.startNum);
    const endSlice = Number(req.query.endNum);

    if (req.query.startNum && req.query.endNum) {
      res.status(200).json({
        message: 'ok',
        length: sendChefInfoArr.length,
        data: sendChefInfoArr.slice(startSlice, endSlice + 1),
      });
    } else if (!req.query.startNum || !req.query.endNum) {
      res.status(400).json({ message: 'undefined chef' });
    }
  },
};
