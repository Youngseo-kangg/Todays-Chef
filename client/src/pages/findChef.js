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
  const [selected, setSelected] = useState('한식'); // select 선택값
  const [chefData, setChefData] = useState([]);
  const [dataLength, setDataLength] = useState({
    start: 0, // 시작점
    groups: [0, 7], // 작은 묶음 (1,2,3,4,5,....)
    end: 7,
  });

  const handleSelected = (event) => {
    setSelected(event.target.value); // select값 업데이트
  }; // select에서 선택하는대로 어떤 퀴진 셰프인지 변경 + 데이터 새로 요청

  const getChefList = async () => {
    try {
      let encodeSelected = encodeURI(encodeURIComponent(selected));
      const result = await axios.get(
        `${url}/chef/${encodeSelected}?startNum=0&endNum=7`
      ); // axios 요청
      console.log('응답: ', result);

      setChefData(result.data.data); // 2. result값으로 chefData 없데이트
      setDataLength({
        ...dataLength,
        groups: [0, 7], // !! 수정 필요
        end: result.data.length,
      }); // 3. result값으로 dataLength 업데이트
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 가장 위로 올리기
    getChefList(); // 데이터값 가져오기
  }, [selected]); // 로드 되자마자 + select값 변경 될때 마다 리렌더링

  return (
    <FindChefGrid>
      <SelectCuisine>
        <div id='cuisineChoiceWrap'>
          <ul>
            <li>
              <div className='cuisineChoice'>
                <img src={koreanFood} alt='한식' />
                <h2>한식</h2>
              </div>
            </li>
            <li>
              <div className='cuisineChoice'>
                <img src={japaneseFood} alt='일식' />
                <h2>일식</h2>
              </div>
            </li>
            <li>
              <div className='cuisineChoice'>
                <img src={chineseFood} alt='중식' />
                <h2>중식</h2>
              </div>
            </li>
            <li>
              <div className='cuisineChoice'>
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
            <select
              name='findChefCuisine'
              id='findChefCuisine'
              onChange={handleSelected}
            >
              <option value='한식'>한식</option>
              <option value='일식'>일식</option>
              <option value='중식'>중식</option>
              <option value='양식'>양식</option>
            </select>
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
              <li>&lt;&lt;</li>
              <li>&lt;</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>&gt;</li>
              <li>&gt;&gt;</li>
            </ul>
          </PagenationList>
        </div>
      </ChefList>
    </FindChefGrid>
  );
}

export default FindChef;
