'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'reviews',
      [
        {
          rating: 5,
          eval: '무척 맛있고 고급스러웠음',
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
          rvChefId: 1,
          rvReservationId: 1,
        },
        {
          rating: 4,
          eval: '맛은 있었지만 뭔가 아쉬운 느낌은 있었어요. 건강한 음식이라 조금 밍밍한 맛이랄까?',
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
          rvUserId: 2,
          rvChefId: 1,
          rvReservationId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(null, {});
  },
};
