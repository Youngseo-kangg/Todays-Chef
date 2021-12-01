import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import koreanFood from '../todaysChefIMG/foodKorean.png';
import japaneseFood from '../todaysChefIMG/foodJapanese.png';
import italianFood from '../todaysChefIMG/foodItalian.png';
import chineseFood from '../todaysChefIMG/foodChinese.png';
import {
  FindChefGrid,
  SelectCuisine,
  ChefList,
  ChefListTitleWrap,
  ChefItemList,
  ChefStar,
  PagenationList,
} from '../styled/styleFindChef';

require('dotenv').config();
axios.defaults.withCredentials = true;

function FindChef() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const history = useHistory();
  const [selected, setSelected] = useState('한식'); // select 선택값 -> 최신순, 별점순
  const [chefData, setChefData] = useState([]);
  const [chefsPerPage, setChefsPerPage] = useState({
    start: 0,
    end: 4,
    array: [],
    length: 0,
  }); // 몇개를 가져올지

  const handleSelected = (cuisine) => {
    setSelected(cuisine); // select값 업데이트
  }; // select에서 선택하는대로 값 변경 + 요청하기

  const getChefList = async () => {
    try {
      let encodeSelected = encodeURI(encodeURIComponent(selected));
      const result = await axios.get(
        `${url}/chef/${encodeSelected}?startNum=0&endNum=4`
      ); // axios 요청 (무조건 처음엔 0~3개만)
      setChefData(result.data.data); // 2. result값으로 chefData 없데이트
      let newArr = [];
      for (let i = 0; i < result.data.length; i += 4) {
        newArr.push(i); // 3씩 끊은 수 들어가게
      }
      setChefsPerPage({
        ...chefsPerPage,
        array: newArr,
        length: result.data.length,
      }); // 3. result값으로 dataLength 업데이트
    } catch (err) {
      console.log(err);
    }
  };

  const getChefListMore = async (start, end) => {
    try {
      let encodeSelected = encodeURI(encodeURIComponent(selected));
      const result = await axios.get(
        `${url}/chef/${encodeSelected}?startNum=${start}&endNum=${end}`
      ); // axios 요청 (무조건 처음엔 0~3개만)

      setChefData(result.data.data); // 2. result값으로 chefData 없데이트
      let newArr = [];
      for (let i = 0; i < result.data.length; i += 4) {
        newArr.push(i); // 3씩 끊은 수 들어가게
      }
      setChefsPerPage({
        ...chefsPerPage,
        array: newArr,
        length: result.data.length,
      }); // 3. result값으로 dataLength 업데이트
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getChefList(); // 0~3 데이터값 가져오기
  }, [selected]); // 로드 되자마자 + select값 변경 될때 마다 리렌더링

  return (
    <FindChefGrid>
      <SelectCuisine>
        <div id='cuisineChoiceWrap'>
          <ul>
            <li>
              <div
                className='cuisineChoice'
                onClick={() => handleSelected('한식')}
              >
                <img src={koreanFood} alt='한식' />
                <h2>한식</h2>
              </div>
            </li>
            <li>
              <div
                className='cuisineChoice'
                onClick={() => handleSelected('일식')}
              >
                <img src={japaneseFood} alt='일식' />
                <h2>일식</h2>
              </div>
            </li>
            <li>
              <div
                className='cuisineChoice'
                onClick={() => handleSelected('중식')}
              >
                <img src={chineseFood} alt='중식' />
                <h2>중식</h2>
              </div>
            </li>
            <li>
              <div
                className='cuisineChoice'
                onClick={() => handleSelected('양식')}
              >
                <img src={italianFood} alt='양식' />
                <h2>양식</h2>
              </div>
            </li>
          </ul>
        </div>
      </SelectCuisine>

      <ChefList>
        <div id='chefListWrap'>
          <ChefListTitleWrap>
            <h2>{selected} 셰프</h2>
          </ChefListTitleWrap>

          <ChefItemList>
            <ul>
              {chefData.map((el) => {
                return (
                  <li
                    className='chef'
                    key={el.id}
                    onClick={() => history.push(`/chef?chefId=${el.id}`)}
                  >
                    <div className='chefPic'>
                      <img src={basic_profile} alt='셰프 사진' />{' '}
                      {/* img파일 지정하고 나면 basic_profile 없애고 랜더링 해주기 */}
                    </div>
                    <h3>
                      <Link to={`/chef?chefId=${el.id}`}>
                        {el.chefName} 셰프
                      </Link>
                    </h3>
                    <span>{el.rating}</span>
                    <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
                  </li>
                );
              })}
            </ul>
          </ChefItemList>

          <PagenationList>
            <ul>
              {chefsPerPage.array.map((el, idx) => {
                return (
                  <li key={idx} onClick={() => getChefListMore(el, el + 4)}>
                    {idx + 1}
                  </li>
                );
              })}
            </ul>
          </PagenationList>
        </div>
      </ChefList>
    </FindChefGrid>
  );
}

export default FindChef;
