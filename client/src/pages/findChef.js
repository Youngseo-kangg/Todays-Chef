import { Link } from 'react-router-dom';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import {
  FindChefGrid,
  SelectCuisine,
  ChefList,
  ChefListTitleWrap,
  ChefItemList,
  PagenationList,
} from '../styled/styleFindChef';

function FindChef() {
  return (
    <FindChefGrid>
      <SelectCuisine>
        <div id='cuisineChoiceWrap'>
          <ul>
            <li>
              <img />
              <h2>한식</h2>
            </li>
            <li>
              <img />
              <h2>일식</h2>
            </li>
            <li>
              <img />
              <h2>중식</h2>
            </li>
            <li>
              <img />
              <h2>양식</h2>
            </li>
          </ul>
        </div>
      </SelectCuisine>

      <ChefList>
        <div id='chefListWrap'>
          <ChefListTitleWrap>
            <h2>한식 셰프</h2>
            <select name='findChefCuisine' id='findChefCuisine'>
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
                <span>4.7</span>
              </li>
              <li className='chef'>
                <div className='chefPic'>
                  <img src={basic_profile} alt='셰프 사진' />
                </div>
                <h3>
                  <Link to='/chefInfo'>박코딩 셰프</Link>
                </h3>
                <span>4.8</span>
              </li>
              <li className='chef'>
                <div className='chefPic'>
                  <img src={basic_profile} alt='셰프 사진' />
                </div>
                <h3>
                  <Link to='/chefInfo'>이코딩 셰프</Link>
                </h3>
                <span>4.7</span>
              </li>
              <li className='chef'>
                <div className='chefPic'>
                  <img src={basic_profile} alt='셰프 사진' />
                </div>
                <h3>
                  <Link to='/chefInfo'>최코딩 셰프</Link>
                </h3>
                <span>4.7</span>
              </li>
            </ul>
          </ChefItemList>

          <PagenationList>ararar</PagenationList>
        </div>
      </ChefList>
    </FindChefGrid>
  );
}

export default FindChef;
