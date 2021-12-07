'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      people: {
        type: Sequelize.INTEGER,
      },
      allergy: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      mobile: {
        type: Sequelize.STRING,
      },
      rsDate: {
        type: Sequelize.DATE,
      },
      rsTime: {
        type: Sequelize.STRING,
      },
      isOven: {
        type: Sequelize.BOOLEAN,
      },
      burner: {
        type: Sequelize.INTEGER,
      },
      messageToChef: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      merchantUid: {
        type: Sequelize.STRING,
      },
      impUid: {
        type: Sequelize.STRING,
      },
      receiptUrl: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reservations');
  },
};
