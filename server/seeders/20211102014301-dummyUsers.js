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
          nickname: '양식박',
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

        {
          email: 'parkHansik@gmail.com',
          password: 'iamChef12?!',
          nickname: '한식박',
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
          email: 'leeHansik@gmail.com',
          password: 'iamChef12?!',
          nickname: '한식이',
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
          email: 'youHansik@gmail.com',
          password: 'iamChef12?!',
          nickname: '한식유',
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
          email: 'choiHansik@gmail.com',
          password: 'iamChef12?!',
          nickname: '한식최',
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
          email: 'LeeYangsik@gmail.com',
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
        {
          email: 'kimYangsik@gmail.com',
          password: 'yangsik12?!',
          nickname: '양식김',
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
          password: 'choiyangsik12?!',
          nickname: '양식최',
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
          email: 'parkYangsik@gmail.com',
          password: 'oYangsik12?!',
          nickname: '양식오',
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
          email: 'jungIlsik@gmail.com',
          password: 'Ilsik12?!',
          nickname: '일식정',
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
          email: 'bangHansik@gmail.com',
          password: 'iamChef12?!',
          nickname: '한식방',
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
          email: 'gangHansik@gmail.com',
          password: 'iamChef12?!',
          nickname: '한식강',
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
          email: 'minHansik@gmail.com',
          password: 'iamChef12?!',
          nickname: '한식민',
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
          email: 'jungHansik@gmail.com',
          password: 'iamChef12?!',
          nickname: '한식정',
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
          email: 'namgungHansik@gmail.com',
          password: 'iamChef12?!',
          nickname: '한식남궁',
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
          email: 'jeonJungsik@gmail.com',
          password: 'iamChef12?!',
          nickname: '중식전',
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
          email: 'purple@gmail.com',
          password: 'purple12?!',
          nickname: '보라돌이',
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
          email: 'yellowNana@gmail.com',
          password: 'yellowNana12?!',
          nickname: '나나',
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
          email: 'ppoppo@gmail.com',
          password: 'ppoppo12?!',
          nickname: '뽀잉',
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
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(null, {});
  },
};
