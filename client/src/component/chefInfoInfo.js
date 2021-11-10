import { ChefAllInformation } from '../styled/styleChefInfo';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';

function ChefInfoDesc() {
  return (
    <ChefAllInformation>
      <div id='chefInfoAll'>
        <div id='chefImgWrap'>
          <div id='chefName'>
            <h2>김코딩 셰프</h2>
          </div>
          <div id='chefImg'>
            <img src={basic_profile} alt='셰프 사진' />
          </div>
        </div>

        <div id='chefTextWrap'>
          <div id='chefsGreeting'>
            <h3>Greetings</h3>
            <p>셰프의 인삿말</p>
          </div>
          <div id='chefsCareer'>
            <h3>Careers</h3>
            <p>셰프 경력 소개</p>
          </div>
          <div id='chefsMindset'>
            <h3>chefsMindset</h3>
            <p>셰프의 가치관</p>
          </div>
        </div>
      </div>
    </ChefAllInformation>
  );
}

export default ChefInfoDesc;
