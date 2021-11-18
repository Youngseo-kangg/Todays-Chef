import {
  ChefAllReviewInfo,
  ReviewWrap,
  ReviewPagenation,
  UserReview,
  UserReviewNone,
} from '../styled/styleChefInfo';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import axios from 'axios';
import { useEffect, useState } from 'react';

require('dotenv').config();
axios.defaults.withCredentials = true;

function ChefAllReview({ reviewLength, query, setMagnifyPic }) {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const showPicture = (address) => {
    setMagnifyPic({
      picState: true,
      picAddress: address,
    });
  }; // 사진 크게 보여주는 함수
  // console.log('chefAllReview에서 reviewLength', reviewLength); // 2
  const [reviewData, setReviewData] = useState([]);
  const [reviewsPerPage, setReviewsPerPage] = useState({
    start: 0,
    end: 3,
    array: [],
    length: reviewLength,
  });

  const getReview = async () => {
    const result = await axios.get(
      `${url}/chef?chefId=${query}&startNum=0&endNum=3`
    ); // axios 요청 (무조건 처음엔 0~3개만) .. query는 chefInfo에서 가져온 chefId 숫자
    setReviewData(result.data.data); // 2. result값으로 reviewData 없데이트
    let newArr = [];
    for (let i = 0; i < result.data.data.length; i += 3) {
      newArr.push(i); // 3씩 끊은 수 들어가게
    }
    setReviewsPerPage({
      ...reviewsPerPage,
      array: newArr,
    }); // 3. result값으로 reviewsPerPage 업데이트
  }; // 0~3번 리뷰 가져올 때

  const getReviewMore = async (start, end) => {
    const result = await axios.get(
      `${url}/chef?chefId=${query}&startNum=${start}&endNum=${end}`
    ); // axios 요청 (0~3 이후에 번호들) .. query는 chefInfo에서 가져온 chefId 숫자
    setReviewData(result.data.data);
    let newArr = [];
    for (let i = 0; i < result.data.data.length; i += 3) {
      newArr.push(i); // 3씩 끊은 수 들어가게
    }
    setReviewsPerPage({
      ...reviewsPerPage,
      array: newArr,
    }); // 3. result값으로 reviewsPerPage 업데이트
  }; // 4번 이후의 리뷰를 가져올 때

  useEffect(() => {
    getReview();
  }, []);

  return (
    <>
      <ChefAllReviewInfo>
        <div id='chefReviewWrap'>
          {reviewLength === 0 ? (
            <UserReviewNone>
              <p>아직 등록된 리뷰가 없습니다.</p>
            </UserReviewNone>
          ) : (
            <>
              <ReviewWrap>
                {reviewData.map((el, idx) => {
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
              {reviewsPerPage.array.map((el, idx) => {
                return (
                  <li key={idx} onClick={() => getReviewMore(el, el + 3)}>
                    {idx + 1}
                  </li>
                );
              })}
            </ul>
          </ReviewPagenation>
        </div>
      </ChefAllReviewInfo>
    </>
  );
}

export default ChefAllReview;
