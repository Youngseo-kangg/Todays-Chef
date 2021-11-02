'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'reviews',
      [
        {
          rating: 0,
          eval: '',
          rvImg: '',
          rvDate: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          createdAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          rvUserId: 1,
          rvChefId: 2,
          rvReservationId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(null, {});
  },
};
