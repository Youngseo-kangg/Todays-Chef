import {
  ChefAllInformation,
  ChefImgWrap,
  ChefTextWrap,
} from '../styled/styleChefInfo';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import axios from 'axios';

require('dotenv').config();
axios.defaults.withCredentials = true;

function ChefInfoDesc({ chefInfo }) {
  return (
    <ChefAllInformation>
      <div id='chefInfoAll'>
        <ChefImgWrap>
          <div id='chefName'>
            <h2>{chefInfo.chefName} 셰프</h2>
          </div>
          <div id='chefImg'>
            <img
              src={chefInfo.chefImg ? chefInfo.chefImg : basic_profile}
              alt='셰프 사진'
            />
          </div>
        </ChefImgWrap>

        <ChefTextWrap>
          <div id='chefsGreeting'>
            <h3>셰프의 인삿말</h3>
            <p>{chefInfo.greeting}</p>
          </div>
          <div id='chefsCareer'>
            <h3>셰프 경력</h3>
            <ul>
              {(chefInfo.career || '').split('/').map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          </div>
          <div id='chefsMindset'>
            <h3>셰프의 가치관</h3>
            <p>{chefInfo.values}</p>
          </div>
        </ChefTextWrap>
      </div>
    </ChefAllInformation>
  );
}

export default ChefInfoDesc;
