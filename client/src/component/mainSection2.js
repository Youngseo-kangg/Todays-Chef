import { MainSection2Wrap } from '../styled/styleMain';
import koreanFood from '../todaysChefIMG/foodKorean.png';
import japaneseFood from '../todaysChefIMG/foodJapanese.png';
import italianFood from '../todaysChefIMG/foodItalian.png';
import chineseFood from '../todaysChefIMG/foodChinese.png';

function MainSection2() {
  return (
    <>
      <MainSection2Wrap>
        <h3>원하시는 식사 종류를 골라주세요.</h3>
        <div id='cuisineBtnWrap'>
          <div className='cuisineBtn'>
            <img src={koreanFood} alt='' />
            <div className='cuisineText'>
              <h4>한식</h4>
              <p>특별한 한식요리를 즐겨보세요!</p>
            </div>
          </div>
          <div className='cuisineBtn'>
            <img src={japaneseFood} alt='' />
            <div className='cuisineText'>
              <h4>일식</h4>
              <p>깔끔한 일식요리를 즐겨보세요!</p>
            </div>
          </div>
          <div className='cuisineBtn'>
            <img src={chineseFood} alt='' />
            <div className='cuisineText'>
              <h4>중식</h4>
              <p>풍성한 중식요리를 즐겨보세요!</p>
            </div>
          </div>
          <div className='cuisineBtn'>
            <img src={italianFood} alt='' />
            <div className='cuisineText'>
              <h4>양식</h4>
              <p>다양한 양식요리를 즐겨보세요!</p>
            </div>
          </div>
        </div>
      </MainSection2Wrap>
    </>
  );
}

export default MainSection2;
