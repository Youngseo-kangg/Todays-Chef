import { MainGrid } from '../styled/styleMain';
import MainSection1 from '../component/mainSection1';
import MainSection2 from '../component/mainSection2';
import MainSection3 from '../component/mainSection3';
import MainSection4 from '../component/mainSection4';

function Main() {
  return (
    <MainGrid>
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <MainSection4 />
    </MainGrid>
  );
}

export default Main;
