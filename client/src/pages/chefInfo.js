import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ChefInfoGrid = styled.div`
  display: grid;
  grid-template-rows: 100px 800px;
  row-gap: 50px;
  margin-bottom: 50px;
`;

function ChefInfo() {
  return (
    <ChefInfoGrid>
      <p>this is ChefInfo</p>
      <div>
        <p>셰프 정보</p>
        <Link to='/reservation'>예약하러 가기</Link>
      </div>
    </ChefInfoGrid>
  );
}

export default ChefInfo;
