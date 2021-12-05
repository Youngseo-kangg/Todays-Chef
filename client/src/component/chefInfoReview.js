import {
  ChefAllReviewInfo,
  ReviewWrap,
  ReviewPagenation,
  UserReview,
  ChefInfoNone,
} from '../styled/styleChefInfo';
import { ChefStar } from '../styled/styleFindChef';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import axios from 'axios';
import { useEffect, useState } from 'react';

import fullStar from '../todaysChefIMG/ratingStar.svg';
import halfStar from '../todaysChefIMG/halfStar.svg';
import noneStar from '../todaysChefIMG/noneStar.svg';

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
  console.log(reviewData);
  const [reviewsPerPage, setReviewsPerPage] = useState({
    start: 0,
    end: 4,
    array: [],
    length: reviewLength,
  });

  const getReview = async () => {
    const result = await axios.get(
      `${url}/chef?chefId=${query}&startNum=0&endNum=3`
    ); // axios 요청 (무조건 처음엔 0~3개만) .. query는 chefInfo에서 가져온 chefId 숫자
    setReviewData(result.data.data); // 2. result값으로 reviewData 없데이트
    let newArr = [];
    for (let i = 0; i < result.data.data.length; i += 4) {
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
    for (let i = 0; i < result.data.data.length; i += 4) {
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

  const ratingStar = (el) => {
    const arr = [];
    const NumRating = Number(el.rating);

    if (NumRating >= 0 && NumRating < 1) {
      arr.push(
        <div>
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 1 && NumRating < 2) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 2 && NumRating < 3) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={halfStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 3 && NumRating < 4) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 4 && NumRating < 5) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={halfStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating === 5) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
        </div>
      );
    }

    return arr;
  };

  return (
    <>
      <ChefAllReviewInfo>
        {reviewLength === 0 ? (
          <ChefInfoNone>
            <p>아직 등록된 리뷰가 없습니다.</p>
          </ChefInfoNone>
        ) : (
          <>
            <div id='chefReviewWrap'>
              <ReviewWrap>
                {reviewData.map((el, idx) => {
                  return (
                    <UserReview key={idx}>
                      <div className='userProfile'>
                        <div className='userProfileWrap'>
                          {el.userImg === '' ? (
                            <img src={basic_profile} alt='유저 사진' />
                          ) : (
                            <img src={el.userImg} alt='유저 사진' />
                          )}
                        </div>
                        <h2 className='userNickname'>{el.nickname}님</h2>
                        <span>{el.rating}</span>
                        <ChefStar>{ratingStar(el)}</ChefStar>
                      </div>
                      <div className='reviewTextWrap'>
                        <p className='reviewText'>{el.eval}</p>
                      </div>
                      <div className='reviewPicture'>
                        {el.rvImg.length === 0 ? (
                          <p>등록한 사진이 없습니다.</p>
                        ) : (
                          <div className='reviewPictureFrame'>
                            {el.rvImg.split(',').map((ele) => {
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
            </div>

            <ReviewPagenation>
              <ul>
                {reviewsPerPage.array.map((el, idx) => {
                  return (
                    <li key={idx} onClick={() => getReviewMore(el, el + 4)}>
                      {idx + 1}
                    </li>
                  );
                })}
              </ul>
            </ReviewPagenation>
          </>
        )}
      </ChefAllReviewInfo>
    </>
  );
}

export default ChefAllReview;
