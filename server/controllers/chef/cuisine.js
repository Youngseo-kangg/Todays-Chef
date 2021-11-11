const { chef } = require('../../models');

module.exports = {
  get: async (req, res) => {
    const cuisine = decodeURI(decodeURIComponent(req.params.id));
    const chefAllInfo = await chef.findAll({ where: { cuisine } });
    const findChefCuisfine = await chef.findOne({ where: { cuisine } });
    console.log('params.id', cuisine);
    console.log(req.query);
    if (!cuisine) {
      // 한,일,중,양식중에 고르지 않았을 떄
      res.status(400).json({ message: 'undefined cuisine' });
    } else {
      const newData = [];
      for (let i = 0; i < chefAllInfo.length; i++) {
        delete chefAllInfo[i].dataValues.chUserId;
        delete chefAllInfo[i].dataValues.greeting;
        delete chefAllInfo[i].dataValues.career;
        delete chefAllInfo[i].dataValues.values;
        delete chefAllInfo[i].dataValues.createdAt;
        delete chefAllInfo[i].dataValues.updatedAt;

        newData.push(chefAllInfo[i]);
      }

      // res.json({ data: newData });

      const startSlice = Number(req.query.startNum);
      const endSlice = Number(req.query.endNum);
      res.json({
        message: 'ok',
        length: chefAllInfo.length,
        data: newData.slice(startSlice, endSlice + 1),
      });
    }
  },
};
