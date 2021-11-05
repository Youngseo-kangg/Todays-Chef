import { MainGrid } from '../styled/styleMain';
import MainSection1 from '../component/mainSection1';
import MainSection2 from '../component/mainSection2';
import MainSection3 from '../component/mainSection3';

function Main() {
  return (
    <MainGrid>
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <div>this is main</div>
    </MainGrid>
  );
}

export default Main;
