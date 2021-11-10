import {
  MainSection3Wrap,
  BestOfChefsWrap,
  BestChefBox,
  RatingStar,
  ChefStar,
} from '../styled/styleMain';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';

function MainSection3() {
  return (
    <>
      <MainSection3Wrap>
        <h3>각 요리별 최고의 셰프를 알아보고 경험해보세요.</h3>
        <BestOfChefsWrap>
          <ul>
            <li className='chef'>
              <div className='bestCuisine'>한식</div>
              <div className='chefPic'>
                <img src={basic_profile} alt='셰프 사진' />
              </div>
              <h4>김코딩 셰프</h4>
              <span>4.9</span>
              <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
            </li>
            <li className='chef'>
              <div className='bestCuisine'>일식</div>
              <div className='chefPic'>
                <img src={basic_profile} alt='셰프 사진' />
              </div>
              <h4>박코딩 셰프</h4>

              <span>4.9</span>
              <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
            </li>
            <li className='chef'>
              <div className='bestCuisine'>중식</div>
              <div className='chefPic'>
                <img src={basic_profile} alt='셰프 사진' />
              </div>
              <h4>이코딩 셰프</h4>

              <span>4.9</span>
              <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
            </li>
            <li className='chef'>
              <div className='bestCuisine'>양식</div>
              <div className='chefPic'>
                <img src={basic_profile} alt='셰프 사진' />
              </div>
              <h4>최코딩 셰프</h4>

              <span>4.9</span>
              <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
            </li>
          </ul>
        </BestOfChefsWrap>
      </MainSection3Wrap>
    </>
  );
}

export default MainSection3;
