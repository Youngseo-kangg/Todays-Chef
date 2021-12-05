'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reservation.init(
    {
      rsUserId: DataTypes.INTEGER,
      people: DataTypes.INTEGER,
      allergy: DataTypes.STRING,
      location: DataTypes.STRING,
      mobile: DataTypes.STRING,
      rsDate: DataTypes.DATE,
      rsTime: DataTypes.STRING,
      isOven: DataTypes.BOOLEAN,
      burner: DataTypes.INTEGER,
      messageToChef: DataTypes.STRING,
      rsChefId: DataTypes.INTEGER,
      rsCourseId: DataTypes.INTEGER,
      merchantUid: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'reservation',
    }
  );
  return reservation;
};
