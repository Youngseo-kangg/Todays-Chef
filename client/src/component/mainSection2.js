import { Link } from 'react-router-dom';
import { MainSection2Wrap } from '../styled/styleMain';
import koreanFood from '../todaysChefIMG/foodKorean.png';
import japaneseFood from '../todaysChefIMG/foodJapanese.png';
import italianFood from '../todaysChefIMG/foodItalian.png';
import chineseFood from '../todaysChefIMG/foodChinese.png';
import { useDispatch } from 'react-redux';
import { updateSearchWord } from '../features/user/modal';

function MainSection2() {
  const dispatch = useDispatch();
  const handleSelected = (cuisine) => {
    dispatch(updateSearchWord({ searchWord: cuisine })); // select값 업데이트
  }; // select에서 선택하는대로 값 변경 + 요청하기

  return (
    <>
      <MainSection2Wrap>
        <h3>원하시는 식사 종류를 골라주세요.</h3>
        <div id='cuisineBtnWrap'>
          <div className='cuisineBtn' onClick={() => handleSelected('한식')}>
            <Link to={`/findChef`}>
              <img src={koreanFood} alt='' />
              <div className='cuisineText'>
                <h4>한식</h4>
                <p>특별한 한식요리를 즐겨보세요!</p>
              </div>
            </Link>
          </div>
          <div className='cuisineBtn' onClick={() => handleSelected('일식')}>
            <Link to={`/findChef`}>
              <img src={japaneseFood} alt='' />
              <div className='cuisineText'>
                <h4>일식</h4>
                <p>깔끔한 일식요리를 즐겨보세요!</p>
              </div>
            </Link>
          </div>
          <div className='cuisineBtn' onClick={() => handleSelected('중식')}>
            <Link to={`/findChef`}>
              <img src={chineseFood} alt='' />
              <div className='cuisineText'>
                <h4>중식</h4>
                <p>풍성한 중식요리를 즐겨보세요!</p>
              </div>
            </Link>
          </div>
          <div className='cuisineBtn' onClick={() => handleSelected('양식')}>
            <Link to={`/findChef`}>
              <img src={italianFood} alt='' />
              <div className='cuisineText'>
                <h4>양식</h4>
                <p>다양한 양식요리를 즐겨보세요!</p>
              </div>
            </Link>
          </div>
        </div>
      </MainSection2Wrap>
    </>
  );
}

export default MainSection2;
