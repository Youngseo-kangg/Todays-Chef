import { Link } from 'react-router-dom';
import { FindChefGrid, SelectCuisine, ChefList } from '../styled/styleFindChef';

function FindChef() {
  return (
    <FindChefGrid>
      <SelectCuisine>
        <div id='cuisineChoiceWrap'>
          <ul>
            <li>한식</li>
            <li>일식</li>
          </ul>
          <ul>
            <li>양식</li>
            <li>중식</li>
          </ul>
        </div>
      </SelectCuisine>

      <ChefList>
        <p>셰프님들 선택</p>
        <ul>
          <li>
            <Link to='/chefInfo'>1번 chefInfo</Link>
          </li>
          <li>
            <Link to='/chefInfo'>2번 chefInfo</Link>
          </li>
          <li>
            <Link to='/chefInfo'>3번 chefInfo</Link>
          </li>
        </ul>
      </ChefList>
    </FindChefGrid>
  );
}

export default FindChef;
