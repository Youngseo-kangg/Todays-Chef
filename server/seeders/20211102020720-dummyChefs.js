'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'chefs',
      [
        {
          chefName: '김한식',
          cuisine: '한식',
          chefImg: '',
          greeting:
            '한식으로 건강한 건강식을 만드는 김한식 셰프입니다. 영양소를 고루고루 갖춘 식사로 하루한끼를 여러분께 제공할 자신이 있습니다. 맛과 건강 모두 챙기기 위해 수많은 연구를 하였으며, 그것을 한식으로 녹여냈습니다.',
          career:
            '신라호텔 출신/세계요리대회 개인부문 대상/한국 역대 최대규모 건강식 캠페인 총지배인',
          values: '음식은 하나의 작품이자, 하나의 행복이자, 하나의 치료이다.',
          rating: 0,
          createdAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          chUserId: 3,
        },
        {
          chefName: '박양식',
          cuisine: '양식',
          chefImg: '',
          greeting:
            '안녕하세요, 이탈리안 전문 셰프 박양식 입니다. 15년간 이태리 곳곳을 돌아다니며 음식을 연구했습니다. 유러피안 다이닝 레스토랑에서 총책임자로 일을 하며 많은 분들의 입맛을 사로 잡았습니다. 한국에서 본연의 이태리를 느끼고자 하는 분들께 최선을 다하겠습니다.',
          career:
            '이탈리안 프렌치 퓨전요리 전문/2015 WACS 코리아 푸드 트렌드 페어 최우수상/이태리 몽뗌쥬 수석 졸업',
          values:
            '현재 위치에서 자만하지 말고 끊임없이 연구해 한 발자국 더 나아가자.',
          rating: 0,
          createdAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          chUserId: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(null, {});
  },
};
