'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'cherry333@naver.com',
          password: 'cherry333?!',
          nickname: '카드캡터 체리',
          userImg: '',
          isChef: false,
          isOauth: false,
          createdAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
        },
        {
          email: 'rocktiger12@gmail.com',
          password: 'rocktiger12?!',
          nickname: '호랑이 돌',
          userImg: '',
          isChef: false,
          isOauth: false,
          createdAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
        },
        {
          email: 'iamChef@gmail.com',
          password: 'iamChef12?!',
          nickname: '나셰프',
          userImg: '',
          isChef: true,
          isOauth: false,
          createdAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
        },
        {
          email: 'yangsik@gmail.com',
          password: 'yangsik12?!',
          nickname: '양식이',
          userImg: '',
          isChef: true,
          isOauth: true,
          createdAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(null, {});
  },
};
