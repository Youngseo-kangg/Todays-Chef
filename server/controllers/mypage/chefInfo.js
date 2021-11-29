const { chef, course } = require('../../models');
const { basicAccessToken, isAuthorized } = require('../token/accessToken');
const {
  sendRefreshToken,
  refreshAuthorized,
} = require('../token/refreshToken');

module.exports = {
  post: async (req, res) => {
    const accessVerify = isAuthorized(req);
    const findChef = await chef.findOne({ where: { id: req.query.id } });
    const data = req.body;
    // const { chefName, cuisine, chefImg, greeting, career, values } = data;

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      } else {
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);
        if (req.body.chefName) {
          await chef.update(
            {
              chefName: data.chefName,
              cuisine: data.cuisine,
              chefImg: data.chefImg,
              greeting: data.greeting,
              career: data.career,
              values: data.values,
            },
            { where: { id: req.query.id } }
          );
        } else {
          const findCourse = await course.findOne({
            where: { coChefId: req.query.id },
          });
          if (!findCourse) {
            await course.create({
              courseName: data.courseName,
              peopleMax: data.peopleMax,
              peopleMin: data.peopleMin,
              price: data.price,
              courseDesc: data.courseDesc,
              coChefId: req.query.id,
            });
          }
        }
        res.status(201).json({ accessToken, message: 'ok' });
      }
    } else {
      if (req.body.chefName) {
        await chef.update(
          {
            chefName: data.chefName,
            cuisine: data.cuisine,
            chefImg: data.chefImg,
            greeting: data.greeting,
            career: data.career,
            values: data.values,
          },
          { where: { id: req.query.id } }
        );
      } else {
        const findCourse = await course.findOne({
          where: { coChefId: req.query.id },
        });
        if (!findCourse) {
          await course.create({
            courseName: data.courseName,
            peopleMax: data.peopleMax,
            peopleMin: data.peopleMin,
            price: data.price,
            courseDesc: data.courseDesc,
            coChefId: req.query.id,
          });
        }
      }
      res.status(200).json({ message: 'ok' });
    }
  },
  patch: async (req, res) => {
    res.status(200).json({ message: 'patch ready' });
  },
  delete: async (req, res) => {
    res.status(200).json({ message: 'delete ready' });
  },
};
