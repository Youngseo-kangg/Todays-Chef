'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bechef extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bechef.init(
    {
      pdfAdress: DataTypes.STRING,
      bcUserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'bechef',
    }
  );
  return bechef;
};
