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

    console.log(allFilterArr);

    res.status(200).json({ message: 'bechef ready' });
  },
};
