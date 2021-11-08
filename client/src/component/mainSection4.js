import { MainSection4Wrap, BeChefWrap } from '../styled/styleMain';
import { Link } from 'react-router-dom';

function MainSection4() {
  return (
    <>
      <MainSection4Wrap>
        <BeChefWrap>
          <div id='beChefBackground'>
            <div id='beChefDescWrap'>
              <h3>Be Chef 시작하기</h3>
              <p>
                셰프님들의 최고의 만찬을 뽐낼 수 있는 <br /> 기회를 만끽하며,
                쏠쏠한 부수입도 올려보세요.
              </p>
              <Link to='/beChef'>
                <button onClick={() => window.scrollTo(0, 0)}>
                  셰프 등록하러 가기
                </button>
              </Link>
            </div>
          </div>
        </BeChefWrap>
      </MainSection4Wrap>
    </>
  );
}

export default MainSection4;
