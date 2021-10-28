import mainVideo from '../todaysChefIMG/mainPlay1.mp4';
import {
  MainBackground,
  SloganWrap,
  MainBackgroundWrap,
} from '../styled/styleMain';

function MainSection1() {
  return (
    <MainBackgroundWrap>
      <MainBackground muted autoPlay loop>
        <source src={mainVideo} type='video/mp4' />
      </MainBackground>
      <SloganWrap>
        <h1>최고의 음식을 내 집에서</h1>
        <h2>
          특별한 날, 외출하지 않고 <br /> 집에서 특별하게 지내는 방법 <br />
          셰프를 초대해 집에서 산해진미를 즐겨보세요!
        </h2>
      </SloganWrap>
    </MainBackgroundWrap>
  );
}

export default MainSection1;
