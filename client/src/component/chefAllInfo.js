import { ChefAllInformation } from '../styled/styleChefInfo';

function ChefAllInfo() {
  return (
    <ChefAllInformation>
      <div id='chefInfoAll'>
        <div id='chefImgWrap'>
          <div id='chefName'>
            <h2>OOO 셰프</h2>
          </div>
          <div id='chefImg'>
            <img alt='셰프 사진' />
          </div>
        </div>

        <div id='chefTextWrap'>
          <div id='chefsGreeting'>셰프의 인사말</div>
          <div id='chefsCareer'>셰프 경력 소개</div>
          <div id='chefsMindset'>셰프 가치관</div>
        </div>
      </div>
    </ChefAllInformation>
  );
}

export default ChefAllInfo;
