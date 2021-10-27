import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FindChefGrid = styled.div`
  /* position: relative;
  top: 80px; */
  display: grid;
  grid-template-rows: 200px 750px;
  row-gap: 50px;
  margin-bottom: 50px;
`;

function FindChef() {
  return (
    <FindChefGrid>
      <p>cuisine 선택</p>
      <div>
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
      </div>
    </FindChefGrid>
  );
}

export default FindChef;
