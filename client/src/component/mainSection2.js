import { MainSection2Wrap } from '../styled/styleMain';
import koreanFood from '../todaysChefIMG/foodKorean.png';
import japaneseFood from '../todaysChefIMG/foodJapanese.png';
import italianFood from '../todaysChefIMG/foodItalian.png';
import chineseFood from '../todaysChefIMG/foodChinese.png';

function MainSection2() {
  return (
    <>
      <MainSection2Wrap>
        <div id='mainSection2Wrap'>
          <h3>원하시는 식사 종류를 골라주세요.</h3>
          <ul id='cuisineBtnWrap'>
            <li className='cuisineBtn'>
              <div className='cuisine'>
                <img src={koreanFood} alt='한식' />
                <div className='cuisineText'>
                  <h4>한식</h4>
                  <p>특별한 한식요리를 즐겨보세요!</p>
                </div>
              </div>
            </li>
            <li className='cuisineBtn'>
              <div className='cuisine'>
                <img src={japaneseFood} alt='일식' />
                <div className='cuisineText'>
                  <h4>일식</h4>
                  <p>깔끔한 일식요리를 즐겨보세요!</p>
                </div>
              </div>
            </li>
            <li className='cuisineBtn'>
              <div className='cuisine'>
                <img src={chineseFood} alt='중식' />
                <div className='cuisineText'>
                  <h4>중식</h4>
                  <p>풍성한 중식요리를 즐겨보세요!</p>
                </div>
              </div>
            </li>
            <li className='cuisineBtn'>
              <div className='cuisine'>
                <img src={italianFood} alt='양식' />
                <div className='cuisineText'>
                  <h4>양식</h4>
                  <p>다양한 양식요리를 즐겨보세요!</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </MainSection2Wrap>
    </>
  );
}

export default MainSection2;
