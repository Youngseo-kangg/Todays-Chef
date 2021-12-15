'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  review.init(
    {
      rvUserId: DataTypes.INTEGER,
      rating: DataTypes.STRING,
      eval: DataTypes.STRING,
      rvImg: DataTypes.STRING,
      rvChefId: DataTypes.INTEGER,
      rvReservationId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'review',
    }
  );
  return review;
};
