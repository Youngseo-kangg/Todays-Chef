import {
  ChefAllReviewInfo,
  ReviewWrap,
  ReviewPagenation,
  UserReview,
  UserReviewNone,
} from '../styled/styleChefInfo';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import axios from 'axios';

require('dotenv').config();
axios.defaults.withCredentials = true;

function ChefAllReview({ chefReview, setMagnifyPic }) {
  const showPicture = (address) => {
    setMagnifyPic({
      picState: true,
      picAddress: address,
    });
  }; // 사진 크게 보여주는 함수

  return (
    <>
      <ChefAllReviewInfo>
        <div id='chefReviewWrap'>
          {chefReview.length === 0 ? (
            <UserReviewNone>
              <p>아직 등록된 리뷰가 없습니다.</p>
            </UserReviewNone>
          ) : (
            <>
              <ReviewWrap>
                {chefReview.map((el, idx) => {
                  return (
                    <UserReview key={idx}>
                      <div className='userProfile'>
                        <div className='userProfileWrap'>
                          <img src={basic_profile} alt='유저 사진' />
                        </div>
                        <h2 className='userNickname'>{el.nickname}님</h2>
                        <span>{el.rating}</span>
                        <div>⭐⭐⭐⭐⭐</div>
                      </div>
                      <div className='reviewTextWrap'>
                        <p className='reviewText'>{el.eval}</p>
                      </div>
                      <div className='reviewPicture'>
                        {el.rvImg.length === 0 ? (
                          <p>등록한 사진이 없습니다.</p>
                        ) : (
                          <div className='reviewPictureFrame'>
                            {el.rvImg.map((ele) => {
                              return (
                                <div
                                  className='reviewPicture'
                                  onClick={() => showPicture(ele)}
                                >
                                  <img src={ele} alt='코스 사진' />
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </UserReview>
                  );
                })}
              </ReviewWrap>
            </>
          )}

          <ReviewPagenation>
            <ul>
              <li>&lt;&lt;</li>
              <li>&lt;</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>&gt;</li>
              <li>&gt;&gt;</li>
            </ul>
          </ReviewPagenation>
        </div>
      </ChefAllReviewInfo>
    </>
  );
}

export default ChefAllReview;
