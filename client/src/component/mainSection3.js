import {
  MainSection3Wrap,
  BestOfChefsWrap,
  BestChefBox,
  RatingStar,
} from '../styled/styleMain';

function MainSection3() {
  return (
    <>
      <MainSection3Wrap>
        <div id='mainSection3Wrap'>
          <h3>최고의 셰프를 경험해보세요.</h3>
          <BestOfChefsWrap>
            <div className='bestChefBox'>
              <h4 className='bestChefCuisine'>한식</h4>
              <div className='bestChefPicture'>셰프 이미지</div>
              <div className='bestChefDesc'>
                <span className='chefName'>셰프 이름</span>
                <div className='ratingStar'>
                  <span>4.9</span>
                  <RatingStar></RatingStar>
                </div>
              </div>
            </div>

            <div className='bestChefBox'>
              <h4 className='bestChefCuisine'>일식</h4>
              <div className='bestChefPicture'>셰프 이미지</div>
              <div className='bestChefDesc'>
                <span className='chefName'>셰프 이름</span>
                <div className='ratingStar'>
                  <span>4.7</span>
                  <RatingStar></RatingStar>
                </div>
              </div>
            </div>

            <div className='bestChefBox'>
              <h4 className='bestChefCuisine'>중식</h4>
              <div className='bestChefPicture'>셰프 이미지</div>
              <div className='bestChefDesc'>
                <span className='chefName'>셰프 이름</span>
                <div className='ratingStar'>
                  <span>4.5</span>
                  <RatingStar></RatingStar>
                </div>
              </div>
            </div>

            <div className='bestChefBox'>
              <h4 className='bestChefCuisine'>양식</h4>
              <div className='bestChefPicture'>셰프 이미지</div>
              <div className='bestChefDesc'>
                <span className='chefName'>셰프 이름</span>
                <div className='ratingStar'>
                  <span>4.8</span>
                  <RatingStar></RatingStar>
                </div>
              </div>
            </div>
          </BestOfChefsWrap>
        </div>
      </MainSection3Wrap>
    </>
  );
}

export default MainSection3;
