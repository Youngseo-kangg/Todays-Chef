import { Link } from 'react-router-dom';
import { useState } from 'react';
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

function FindChef() {
  const [selected, setSelected] = useState('한식');
  const handleSelected = (event) => {
    if (event.target.value === 'kr') {
      setSelected('한식');
    } else if (event.target.value === 'jp') {
      setSelected('일식');
    } else if (event.target.value === 'ch') {
      setSelected('중식');
    } else if (event.target.value === 'eu') {
      setSelected('양식');
    }
  }; // select에서 선택하는대로 어떤 퀴진 셰프인지 변경해주는 함수

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
              <option value='kr'>한식</option>
              <option value='jp'>일식</option>
              <option value='ch'>중식</option>
              <option value='eu'>양식</option>
            </select>
          </ChefListTitleWrap>

          <ChefItemList>
            <ul>
              <li className='chef'>
                <div className='chefPic'>
                  <img src={basic_profile} alt='셰프 사진' />
                </div>
                <h3>
                  <Link to='/chefInfo'>김코딩 셰프</Link>
                </h3>
                <span>4.9</span>
                <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
              </li>
              <li className='chef'>
                <div className='chefPic'>
                  <img src={basic_profile} alt='셰프 사진' />
                </div>
                <h3>
                  <Link to='/chefInfo'>박코딩 셰프</Link>
                </h3>

                <span>4.9</span>
                <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
              </li>
              <li className='chef'>
                <div className='chefPic'>
                  <img src={basic_profile} alt='셰프 사진' />
                </div>
                <h3>
                  <Link to='/chefInfo'>이코딩 셰프</Link>
                </h3>

                <span>4.9</span>
                <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
              </li>
              <li className='chef'>
                <div className='chefPic'>
                  <img src={basic_profile} alt='셰프 사진' />
                </div>
                <h3>
                  <Link to='/chefInfo'>최코딩 셰프</Link>
                </h3>

                <span>4.9</span>
                <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
              </li>
              <li className='chef'>
                <div className='chefPic'>
                  <img src={basic_profile} alt='셰프 사진' />
                </div>
                <h3>
                  <Link to='/chefInfo'>김코딩 셰프</Link>
                </h3>

                <span>4.9</span>
                <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
              </li>
              <li className='chef'>
                <div className='chefPic'>
                  <img src={basic_profile} alt='셰프 사진' />
                </div>
                <h3>
                  <Link to='/chefInfo'>박코딩 셰프</Link>
                </h3>

                <span>4.9</span>
                <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
              </li>
              <li className='chef'>
                <div className='chefPic'>
                  <img src={basic_profile} alt='셰프 사진' />
                </div>
                <h3>
                  <Link to='/chefInfo'>이코딩 셰프</Link>
                </h3>

                <span>4.9</span>
                <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
              </li>
              <li className='chef'>
                <div className='chefPic'>
                  <img src={basic_profile} alt='셰프 사진' />
                </div>
                <h3>
                  <Link to='/chefInfo'>최코딩 셰프</Link>
                </h3>

                <span>4.9</span>
                <ChefStar>⭐⭐⭐⭐⭐</ChefStar>
              </li>
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
