'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'reservations',
      [
        {
          people: 5,
          allergy: '땅콩 알레르기 있음',
          location: '서울시 소원구 양식로 좋아 아파트 111동 3333호',
          mobile: '010-1111-3333',
          rsDate: '2021-11-11',
          rsTime: 13,
          isOven: true,
          burner: 2,
          messageToChef: '땅콩만 조심해주셨으면 좋겠습니다:)',
          createdAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          rsUserId: 1,
          rsChefId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
