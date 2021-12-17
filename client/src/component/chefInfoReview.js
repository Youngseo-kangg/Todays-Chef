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

  const ratingStar = (el, idx) => {
    let arr = [];
    let NumRating = Number(el.rating);
    let parsed = parseInt(NumRating);
    let rest = NumRating - parsed;
    //* fullStar 처리 : 정수로 만들어 버려서 있으면 무조건 다 주기
    for (let i = 0; i < parsed; i++) {
      arr.push(fullStar);
    }
    // * halfStar 처리 : 0~1 사이에 rest가 있는지, 0~0.5면 none, 0.5이상이면 halfStar
    if (0 < rest && rest < 1) {
      if (0 < rest && rest <= 0.5) {
        arr.push(noneStar);
      } else {
        arr.push(halfStar);
      }
    }
    // * 남은 부분에 noneStar 넣어주기
    for (let i = arr.length; i < 5; i++) {
      arr.push(noneStar);
    }
    return arr;
  };

  return (
    <>
      <ChefAllReviewInfo>
        {reviewData.length === 0 ? (
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
                        <ChefStar key={idx}>
                          <div>
                            {ratingStar(el, idx).map((ele, idx) => {
                              return <img src={ele} alt='별점' key={idx} />;
                            })}
                          </div>
                        </ChefStar>
                      </div>
                      <div className='reviewTextWrap'>
                        <p className='reviewText'>{el.eval}</p>
                      </div>
                      <div className='reviewPicture'>
                        {el.rvImg.length === 0 ? (
                          <p>등록한 사진이 없습니다.</p>
                        ) : (
                          <div className='reviewPictureFrame'>
                            {el.rvImg.split(',').map((ele, idx) => {
                              return (
                                <div
                                  key={idx}
                                  className='reviewPictureItem'
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
