import {
  BeAChefGrid,
  BeAChefIntro,
  BeAChefDesc,
  BeAChefResumeWrap,
} from '../styled/styleBeAChef';

function BeAChef() {
  return (
    <BeAChefGrid>
      <BeAChefIntro>
        <div id='beChefSlogan'>
          <div id='beChefSloganText'>
            <h3>레스토랑에서 고객의 식탁으로</h3>
            <p>다양한 고객을 만나고 경험을 쌓고,</p>
            <p>다채로운 미식 체험을 제공해 보세요.</p>
          </div>
        </div>
      </BeAChefIntro>
      <BeAChefDesc>BeAChef 설명</BeAChefDesc>
      <BeAChefResumeWrap>BeAChef 신청하기</BeAChefResumeWrap>
    </BeAChefGrid>
  );
}

export default BeAChef;
