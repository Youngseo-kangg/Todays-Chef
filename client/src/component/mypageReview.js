import { MypageReviewContent, Stars } from '../styled/styleMypage';
import { PagenationList } from '../styled/styleFindChef';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateAccessToken, userStatus } from '../features/user/user';
import { getReview, reviewStatus } from '../features/review/review';
import { modalStatus } from '../features/user/modal';
import { ChefStar } from '../styled/styleFindChef';
import fullStar from '../todaysChefIMG/ratingStar.svg';
import halfStar from '../todaysChefIMG/halfStar.svg';
import noneStar from '../todaysChefIMG/noneStar.svg';
import { format, isAfter, isBefore, addDays } from 'date-fns';
import {
  openFailModal,
  openSuccessModal,
  openServerErrorModal,
  openIsNeedReLoginModal,
} from '../features/user/modal';

require('dotenv').config();
axios.defaults.withCredentials = true;

function MypageReview() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const dispatch = useDispatch();
  const userState = useSelector(userStatus);
  const reviewState = useSelector(reviewStatus);
  const [userPic, setUserPic] = useState({}); // 유저가 로컬에서 업로드한 프로필 이미지
  const [userPicTitle, setUserPicTitle] = useState([]); // 사진 제목들
  const [selected, setSelected] = useState(false); // 글 선택 상태
  const [writeOrShowReview, setWriteOrShowReview] = useState(false); //글 선택 했고 + 리뷰 쓰기 또는 읽기 상태
  // false면 write, true면 show
  const [errorMsg, setErrorMsg] = useState('');
  const [writeReviewContent, setWriteReviewContent] = useState({
    reservation: {
      burner: 0,
      chefName: '',
      courseName: '',
      id: 0,
      rsChefId: 0,
      rsDate: new Date(),
      rsTime: '00:00',
    },
    review: {
      eval: '',
      id: 0,
      rating: 1,
    },
  }); // 쓴 리뷰 담은 상태
  const [clicked, setClicked] = useState([true, false, false, false, false]); // 별점 입력 관련
  let defaultStars = [1, 2, 3, 4, 5]; // 별점 관련
  const [showReviewContent, setShowReviewContent] = useState({
    reservation: {
      burner: 0,
      chefName: '',
      courseName: '',
      id: 0,
      rsDate: new Date(),
      rsTime: '00:00',
    },
    review: {
      eval: '',
      id: 0,
      rating: '',
      rvImg: '',
    },
  }); // 보여줄 리뷰 담은 상태
  // TODO: 1. load 되자마자 서버에 get 요청해서 review 데이터 다 가져오고, redux review 업데이트
  const getReviews = () => {
    axios
      .get(`${url}/mypage/review/user?id=${userState.userId}`, {
        headers: { authorization: `bearer ${userState.accessToken}` },
      })
      .then((result) => {
        console.log(result.data.data);
        if (result.data.accessToken) {
          dispatch(updateAccessToken({ accessToken: result.data.accessToken }));
        }
        dispatch(getReview({ data: result.data.data }));
      })
      .catch((err) => {
        console.log(err);
        if (err.message === 'Network Error') {
          dispatch(openServerErrorModal());
        } else if (err.response.data.message === 'Send new Login Request') {
          dispatch(openIsNeedReLoginModal());
        }
      });
  };
  useEffect(() => {
    getReviews();
  }, []);

  // TODO: 2. review에서 예약날짜 이후 + 1주일 지나기 전 이라면 리뷰 쓸 수 있도록 구현하기 -> Y
  // TODO: 3. review에서 예약날짜 이전 + 1주일 후라면 리뷰 쓸 수 없도록 구현하기 -> Y
  // TODO: 4. 목록에서 리뷰를 클릭하면 #myRecentReview에 리뷰 내용 뜨도록 만들기 (상태값으로 input 또는 div 뜨게)
  // TODO: 5. 별점 클릭해서 만들수 있게 하기

  const handleWriting = (el) => {
    setWriteReviewContent({
      reservation: el.reservation,
      review: el.review,
    });
    handleStarClick(1);
    setSelected(true); // 선택했다고 바꿔줌
    setWriteOrShowReview(false); // 글 쓰는걸로 바꿔주기
  };

  const handleShowing = (el) => {
    setShowReviewContent({
      reservation: el.reservation,
      review: el.review,
    });
    setSelected(true); // 선택했다고 바꿔줌
    setWriteOrShowReview(true); // 글 읽는걸로 바꿔주기
  };

  const handleNotyet = () => {
    dispatch(openFailModal({ message: '예약일 이후에 작성이 가능합니다.' }));
  };

  const handleInputValue = (key) => (e) => {
    setWriteReviewContent({
      ...writeReviewContent,
      review: {
        eval: writeReviewContent.review.eval,
        id: writeReviewContent.review.id,
        rating: writeReviewContent.review.rating,
        [key]: e.target.value,
      },
    });
  };

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 1; i <= 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    updateReview();
  }, [clicked]); // 별 업뎃

  const updateReview = () => {
    let score = clicked.filter(Boolean).length; // 별을 클릭한 갯수
    setWriteReviewContent({
      ...writeReviewContent,
      review: {
        eval: writeReviewContent.review.eval,
        id: writeReviewContent.review.id,
        rating: Number(score),
      },
    });
  };
  // TODO: 5. 사진 업로드 하면 제목 바뀌기 + 업로드 사진 없으면 다른 문구 처리
  const changeProfileBtn = (event) => {
    let formData = new FormData();
    let picTitle = [];
    for (let i = 0; i < event.target.files.length; i++) {
      picTitle.push(event.target.files[i].name);
    }
    if (picTitle.length > 2) {
      // 3개 이상 업로드 하려고 한 경우
      dispatch(
        openFailModal({ message: '사진은 최대 2장 업로드 가능합니다.' })
      ); // 업로드 안된다는 에러창 띄우기
      picTitle = []; // picTitle 리셋
    } else {
      for (let i = 0; i < event.target.files.length; i++) {
        formData.append('image', event.target.files[i]);
      }
      setUserPicTitle(picTitle);
      setUserPic(formData);
    }
  };

  const onSubmit = async () => {
    // 선택한 파일을 서버로 axios 요청을 보내 유저 db의 userPic 업데이트
    try {
      // 유효성 검사
      if (writeReviewContent.review.eval === '') {
        setErrorMsg('내용을 작성해주세요.');
      } else if (writeReviewContent.review.eval === '') {
        setErrorMsg('점수를 입력해주세요.');
      } else {
        // 만약 사진 업로드 한게 있다면 사진 올려주고
        if (userPicTitle.length !== 0) {
          let imageRes = await axios.post(
            `${url}/mypage/review/${userState.userId}`,
            userPic,
            {
              headers: {
                authorization: `Bearer ${userState.accessToken}`,
                'Content-Type': 'multipart/form-data',
              },
            }
          );
        }
        // 이후에 받아온 사진주소 받아서 글이랑 같이 올려주기
        let patchResult = await axios.patch(
          `${url}/mypage/review/user?id=${writeReviewContent.review.id}`,
          {
            rsChefId: writeReviewContent.reservation.rsChefId,
            rating: writeReviewContent.review.rating,
            eval: writeReviewContent.review.eval,
            id: writeReviewContent.review.id,
          },
          { headers: { authorization: `bearer ${userState.accessToken}` } }
        );
        if (patchResult.data.message === 'ok') {
          // accessToken 있으면 업데이트
          console.log(
            'patchResult.data.accessToken: ',
            patchResult.data.accessToken
          );
          if (patchResult.data.accessToken) {
            dispatch(
              updateAccessToken({ accessToken: patchResult.data.accessToken })
            );
          }
          // 완료 모달 띄워주기
          dispatch(
            openSuccessModal({ message: '리뷰 작성이 완료되었습니다.' })
          );
          // 서버 다시 요청해서 업뎃
          getReviews();
          // 선택한거 없다고 바꿔주기
          setSelected(false);
        }
      }
    } catch (err) {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch(openServerErrorModal());
      } else if (err.response.data.message === 'Send new Login Request') {
        dispatch(openIsNeedReLoginModal());
      }
    }
  };

  const ratingStar = (el) => {
    let arr = [];
    let NumRating = Number(el);
    let parsed = parseInt(NumRating);
    let rest = NumRating - parsed;
    //* fullStar 처리 : 정수로 만들어 버려서 있으면 무조건 다 주기
    for (let i = 0; i < parsed; i++) {
      arr.push(fullStar);
    }
    // * halfStar 처리 : 0~1 사이에 rest가 있는지, 0~0.5면 none, 0.5이상이면 halfStar
    if (0 < rest && rest < 1) {
      if (0 < rest && rest < 0.5) {
        arr.push(noneStar);
      } else {
        arr.push(halfStar);
      }
    }
    // * 남은 부분에 noneStar 넣어주기
    for (let i = arr.length; i < 5; i++) {
      arr.push(noneStar);
    }
    console.log(arr);
    return arr;
  };
  return (
    <>
      <MypageReviewContent
        className={reviewState.data.length === 0 ? 'noReview' : null}
      >
        <div id='mypageReviewTitle'>
          <h2>리뷰 쓰기</h2>
        </div>

        {reviewState.data.length === 0 ? (
          <p id='noMyComments'>이용 내역이 없습니다.</p>
        ) : (
          <>
            <div id='myRecentComment'>
              {!selected ? (
                '아래 항목을 클릭하여 리뷰를 작성하거나, 확인해보세요.'
              ) : (
                <>
                  {writeOrShowReview ? ( //true면 글 읽기, false면 쓰기
                    <div id='myRecentReview'>
                      <div id='myRecentReviewExtra'>
                        <div id='myRecentCommentTitle' className='showReview'>
                          <h3>
                            {userState.nickname}님이 작성하신{' '}
                            {format(
                              new Date(showReviewContent.reservation.rsDate),
                              'yyyy-MM-dd'
                            )}
                            예약에 대한 리뷰입니다.
                          </h3>
                        </div>
                        <ChefStar key={showReviewContent.review.id}>
                          <div>
                            {ratingStar(showReviewContent.review.rating).map(
                              (ele, idx) => {
                                return <img src={ele} alt='별점' key={idx} />;
                              }
                            )}
                          </div>
                        </ChefStar>
                        <div id='myRecentCommentPic'>
                          <div id='myRecentCommentPicList'>
                            {showReviewContent.review.rvImg.length === 0 ? (
                              <p>업로드한 사진이 없습니다.</p>
                            ) : (
                              showReviewContent.reservation.rvImg.map(
                                (el, idx) => {
                                  return <p key={idx}>{el}</p>;
                                }
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div id='myRecentReviewContent' className='showReview'>
                        <div>
                          {showReviewContent.review.eval === ''
                            ? '리뷰를 작성하지 않았습니다.'
                            : showReviewContent.review.eval}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div id='myRecentReview'>
                      <div id='myRecentReviewExtra'>
                        <div id='myRecentCommentTitle'>
                          <h3>
                            {userState.nickname}님의{' '}
                            {format(
                              new Date(writeReviewContent.reservation.rsDate),
                              'yyyy-MM-dd'
                            )}{' '}
                            예약에 대한 리뷰입니다.
                          </h3>
                        </div>
                        <div id='myRecentCommentStar'>
                          <Stars>
                            {defaultStars.map((el, idx) => {
                              return (
                                <FaStar
                                  key={idx}
                                  size='20'
                                  onClick={() => handleStarClick(el)}
                                  className={clicked[el] && 'brownStar'}
                                />
                              );
                            })}
                          </Stars>

                          <input
                            type='hidden'
                            onChange={handleInputValue('rating')}
                            value={writeReviewContent.review.rating}
                          />
                        </div>
                        <div id='myRecentCommentPic'>
                          <div id='myRecentCommentPicList'>
                            {userPicTitle.length === 0 ? (
                              <p>업로드한 사진이 없습니다.</p>
                            ) : (
                              userPicTitle.map((el) => {
                                return <p>{el}</p>;
                              })
                            )}
                          </div>
                          <div className='myRecentReviewBtn'>
                            <label htmlFor='image'>사진 업로드</label>
                            <input
                              type='file'
                              name='image'
                              id='image'
                              multiple
                              accept='image/*'
                              onChange={changeProfileBtn}
                            />
                          </div>
                        </div>
                      </div>
                      <div id='myRecentReviewContent'>
                        <textarea
                          placeholder='리뷰를 입력해주세요.'
                          onChange={handleInputValue('eval')}
                          value={writeReviewContent.review.eval}
                        />
                        <div className='myRecentReviewBtn'>
                          <button onClick={onSubmit}>저장하기</button>
                        </div>
                        {errorMsg ? <p>{errorMsg}</p> : null}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <div id='myCommentList'>
              <div id='myCommentListWrap'>
                <ul id='myComments'>
                  {reviewState.data.map((el, idx) => {
                    return isAfter(
                      new Date(),
                      new Date(el.reservation.rsDate)
                    ) === true ? (
                      <li
                        key={idx}
                        onClick={
                          el.review.eval === '' && // el.review.eval 작성한적이 없고
                          isBefore(
                            new Date(),
                            addDays(new Date(el.reservation.rsDate), 7)
                          ) // 오늘과 예약날짜+7일 비교했을때 1주일 이내일때
                            ? () => handleWriting(el)
                            : () => handleShowing(el)
                        }
                      >
                        <p>
                          {format(
                            new Date(el.reservation.rsDate),
                            'yyyy-MM-dd'
                          )}
                        </p>
                        <p>{el.reservation.chefName} 셰프님</p>
                        <p>{el.reservation.courseName} 코스</p>
                      </li>
                    ) : (
                      <li key={idx} onClick={handleNotyet}>
                        <p>
                          {format(
                            new Date(el.reservation.rsDate),
                            'yyyy-MM-dd'
                          )}
                        </p>
                        <p>{el.reservation.chefName} 셰프님</p>
                        <p>{el.reservation.courseName} 코스</p>
                      </li>
                    );
                  })}
                </ul>
                <PagenationList>
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                  </ul>
                </PagenationList>
              </div>
            </div>
          </>
        )}
      </MypageReviewContent>
    </>
  );
}

export default MypageReview;
