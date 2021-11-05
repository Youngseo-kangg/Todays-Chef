import { MainGrid } from '../styled/styleMain';
import MainSection1 from '../component/mainSection1';
import MainSection2 from '../component/mainSection2';

function Main() {
  return (
    <MainGrid>
      <MainSection1 />
      <MainSection2 />
      <div>this is main</div>
      <div>this is main</div>
    </MainGrid>
  );
}

export default Main;
