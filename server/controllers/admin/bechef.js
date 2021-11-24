const { bechef } = require('../../models');

module.exports = {
  get: async (req, res) => {
    const allDataBeChef = await bechef.findAll();
    let weekFilterArr = [];
    let monthFilterArr = [];
    let monthsFilterArr = [];
    let allFilterArr = [];

    const findWeek = new Date(new Date().setDate(new Date().getDate() - 7));
    // 현재부터 일주일 전 시간
    const findMonth = new Date(new Date().setMonth(new Date().getMonth() - 1));
    // 현재에서부터 한 달전 시간
    const findThreeMonth = new Date(
      new Date().setMonth(new Date().getMonth() - 3)
    );

    const filterDate = req.params.date;
    const startSlice = Number(req.query.startNum);
    const endSlice = Number(req.query.endNum);

    for (let i = 0; i < allDataBeChef.length; i++) {
      let dataDay = allDataBeChef[i].dataValues.createdAt;
      delete allDataBeChef[i].dataValues.updatedAt;

      if (filterDate === 'week') {
        if (findWeek <= dataDay && dataDay <= new Date()) {
          weekFilterArr.push(allDataBeChef[i].dataValues);
        }
      } else if (filterDate === 'month') {
        if (findMonth <= dataDay && dataDay <= new Date()) {
          monthFilterArr.push(allDataBeChef[i].dataValues);
        }
      } else if (filterDate === 'months') {
        if (findThreeMonth <= dataDay && dataDay <= new Date()) {
          monthsFilterArr.push(allDataBeChef[i].dataValues);
        }
      } else if (filterDate === 'all') {
        allFilterArr.push(allDataBeChef[i].dataValues);
      }
    }

    if (req.query.startNum && req.query.endNum) {
      if (filterDate === 'week') {
        res.status(200).json({
          message: 'ok',
          length: weekFilterArr.length,
          data: weekFilterArr.slice(startSlice, endSlice + 1),
        });
      } else if (filterDate === 'month') {
        res.status(200).json({
          message: 'ok',
          length: monthFilterArr.length,
          data: monthFilterArr.slice(startSlice, endSlice + 1),
        });
      } else if (filterDate === 'months') {
        res.status(200).json({
          message: 'ok',
          length: monthsFilterArr.length,
          data: monthsFilterArr.slice(startSlice, endSlice + 1),
        });
      } else if (filterDate === 'all') {
        res.status(200).json({
          message: 'ok',
          length: allFilterArr.length,
          data: allFilterArr.slice(startSlice, endSlice + 1),
        });
      }
    } else if (!req.query.startNum || !req.query.endNum) {
      res.status(400).json({ message: 'undefined bechef' });
    }
  },
};
