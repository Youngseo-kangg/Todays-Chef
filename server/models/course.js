'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  course.init({
    coChefId: DataTypes.INTEGER,
    courseName: DataTypes.STRING,
    peopleMax: DataTypes.INTEGER,
    peopleMin: DataTypes.INTEGER,
    courseDesc: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};