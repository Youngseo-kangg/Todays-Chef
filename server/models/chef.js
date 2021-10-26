'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chef extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  chef.init({
    cuisine: DataTypes.STRING,
    chUserId: DataTypes.INTEGER,
    chefImg: DataTypes.STRING,
    greeting: DataTypes.STRING,
    career: DataTypes.STRING,
    values: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'chef',
  });
  return chef;
};