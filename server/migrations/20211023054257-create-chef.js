'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('chefs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cuisine: {
        type: Sequelize.STRING
      },
      chUserId: {
        type: Sequelize.INTEGER
      },
      chefImg: {
        type: Sequelize.STRING
      },
      greeting: {
        type: Sequelize.STRING
      },
      career: {
        type: Sequelize.STRING
      },
      values: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('chefs');
  }
};