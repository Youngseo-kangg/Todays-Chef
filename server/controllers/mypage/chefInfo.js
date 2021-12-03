const { chef, course } = require('../../models');
const { basicAccessToken, isAuthorized } = require('../token/accessToken');
const {
  sendRefreshToken,
  refreshAuthorized,
} = require('../token/refreshToken');

module.exports = {
  get: async (req, res) => {
    const accessVerify = isAuthorized(req);
    const findChef = await chef.findOne({ where: { id: req.query.id } });
    const findCourse = await course.findAll({
      where: { coChefId: req.query.id },
    });

    delete findChef.dataValues.rating;
    delete findChef.dataValues.createdAt;
    delete findChef.dataValues.updatedAt;

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      } else {
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);
        res.status(201).json({
          accessToken,
          message: 'ok',
          data: { info: findChef.dataValues, courses: findCourse },
        });
      }
    } else {
      res.status(200).json({
        message: 'ok',
        data: { info: findChef.dataValues, courses: findCourse },
      });
    }
  },
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
              greeting: data.greeting,
              career: data.career,
              values: data.values,
            },
            { where: { id: req.query.id } }
          );
          res.status(201).json({ accessToken, message: 'ok' });
        } else {
          // console.log(createCourse);
          const findSameCoure = await course.findOne({
            where: { courseName: data.courseName },
          });
          if (!findSameCoure) {
            let result = await course.create({
              courseName: data.courseName,
              peopleMax: data.peopleMax,
              peopleMin: data.peopleMin,
              price: data.price,
              courseDesc: data.courseDesc,
              coChefId: req.query.id,
            });

            res.status(201).json({ accessToken, message: 'ok', data: result });
          } else {
            res.status(400).json({ message: 'Already same course' });
          }
        }
      }
    } else {
      if (req.body.chefName) {
        await chef.update(
          {
            chefName: data.chefName,
            cuisine: data.cuisine,
            greeting: data.greeting,
            career: data.career,
            values: data.values,
          },
          { where: { id: req.query.id } }
        );
        res.status(200).json({ message: 'ok' });
      } else {
        // console.log(createCourse);
        const findSameCoure = await course.findOne({
          where: { courseName: data.courseName },
        });
        if (!findSameCoure) {
          const result = await course.create({
            courseName: data.courseName,
            peopleMax: data.peopleMax,
            peopleMin: data.peopleMin,
            price: data.price,
            courseDesc: data.courseDesc,
            coChefId: req.query.id,
          });

          res.status(200).json({ message: 'ok', data: result });
        } else {
          res.status(400).json({ message: 'Already same course' });
        }
      }
    }
  },
  patch: async (req, res) => {
    const accessVerify = isAuthorized(req);

    const data = req.body;
    const { courseName, price, peopleMax, peopleMin, courseDesc, id } = data;

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      } else {
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);
        await course.update(
          {
            courseName,
            price,
            peopleMax,
            peopleMin,
            courseDesc,
          },
          { where: { id: id } }
        );
        res.status(201).json({ accessToken, message: 'ok' });
      }
    } else {
      await course.update(
        {
          courseName,
          price,
          peopleMax,
          peopleMin,
          courseDesc,
        },
        { where: { id: id } }
      );
      res.status(200).json({ message: 'ok' });
    }
  },
  delete: async (req, res) => {
    const accessVerify = isAuthorized(req);
    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      } else {
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);
        await course.destroy({
          where: { id: req.query.courseId },
          force: true,
        });
        res.status(201).json({ accessToken, message: 'ok' });
      }
    } else {
      await course.destroy({
        where: { id: req.query.courseId },
        force: true,
      });
      res.status(200).json({ message: 'ok' });
    }
  },
};
