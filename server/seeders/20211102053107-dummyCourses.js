'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'courses',
      [
        {
          courseName: '매화',
          peopleMax: 4,
          peopleMin: 3,
          courseDesc:
            '약재물과 곡류로 쑤어낸 건강곡류죽/2+한우 육사시미와 제철 채소 샐러드/제철 과일 수제 드레싱/2+한우 육전과 약선 월과채/약재와 약선간장으로 조려낸 전복찜과 관자구이/제철 채소와 된장페스토/제철 과일로 숙성시킨 약선고추양념으로 볶아낸 제철 해산물 볶음과 쌈/갖은 견과와 한약재로 맛을 낸 한우갈비찜/제철나물 4찬과 소고기미역국 또는 해물된장찌개/약재 달인 물과 사골로 지어낸 영양밥/약선고추장 또는 약선 간장/계절 과일과 차',
          price: 400000,
          createdAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          coChefId: 1,
        },
        {
          courseName: '수국',
          peopleMax: 2,
          peopleMin: 2,
          courseDesc:
            '약재물과 곡류로 쑤어낸 건강곡류죽/2+한우 육사시미와 제철 채소 샐러드/제철 과일 수제 드레싱/2+한우 육전과 약선 월과채/약재와 약선간장으로 조려낸 전복찜과 관자구이/제철 과일로 숙성시킨 약선고추양념으로 볶아낸 제철 해산물 볶음과 쌈/갖은 견과와 한약재로 맛을 낸 한우갈비찜/제철나물 4찬과 소고기미역국 또는 해물된장찌개/약재 달인 물과 사골로 지어낸 영양밥/계절 과일과 차',
          price: 300000,
          createdAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          coChefId: 1,
        },
        {
          courseName: '프리미엄 이태리',
          peopleMax: 6,
          peopleMin: 4,
          courseDesc:
            '카라멜라이징한 크리미 양파와 이베리코 프로슈토 파마산치즈의 치아바타 샌드위치/리코타치즈와 후레쉬 블루베리, 퓨레 피스타치오 파우더를 올린 브루스케타/세가지 스타일의 크림치즈와 미니콘/스모크치즈, 까망베르치즈, 과일치즈, 에멘탈치즈, 견과류/숙성 발사믹 식초에 절인 야채와 사과 올리브 안티파스토/엔다이브에 와사비 아이올리에 마리네이드한 연어와 캐비어/이베리코 프로슈토 멜론/발사믹 리덕션 후레쉬 바질 보코치니와 방울토마토 카프레제/베이컨칩을 곁들인 체다치즈 향의 베샤멜소스 맥앤치즈/허브버터에 마리네이드하고 저온에서 수비드한 안심과 오리엔탈풍의 전복구이, 말돈소금 표고향의 그레이비 소스와 계절채소 가니쉬/진한 카스타드 향의 크림뷔렐레/블루베리 필링을 올린 요거트 무스',
          price: 1400000,
          createdAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          coChefId: 2,
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
