import { Link } from 'react-router-dom';
import { ChefInfoGrid } from '../styled/styleChefInfo';

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
