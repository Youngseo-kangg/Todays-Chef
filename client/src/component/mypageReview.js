import { MypageReviewContent } from '../styled/styleMypage';
import { PagenationList } from '../styled/styleFindChef';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateAccessToken, userStatus } from '../features/user/user';
import { getReview, reviewStatus } from '../features/review/review';
import { format, isAfter, isBefore, addDays } from 'date-fns';
require('dotenv').config();
axios.defaults.withCredentials = true;

function MypageReview() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const dispatch = useDispatch();
  const userState = useSelector(userStatus);
  const reviewState = useSelector(reviewStatus);
  const [userPic, setUserPic] = useState({}); // 유저가 로컬에서 업로드한 프로필 이미지
  const [userPicTitle, setUserPicTitle] = useState([]); // 사진 제목들
  const [writeOrShowReview, setWriteOrShowReview] = useState(false); //리뷰 쓰기 또는 읽기 상태
  // false면 write, true면 show
  const [writeReviewContent, setWriteReviewContent] = useState({}); // 쓴 리뷰 담은 상태
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
  useEffect(() => {
    axios
      .get(`${url}/mypage/review/user?id=${userState.userId}`, {
        headers: { authorization: `bearer ${userState.accessToken}` },
      })
      .then((result) => {
        // console.log(result.data.data);
        if (result.data.accessToken) {
          dispatch(updateAccessToken({ accessToken: result.data.accessToken }));
        }
        dispatch(getReview({ data: result.data.data }));
      });
  }, []);

  // reviewState.data.map((el, idx) => {
  //   console.log(`${el.reservation.rsDate}`);
  //   console.log(`el.review.eval 비어있는가: `, el.review.eval === '');
  //   console.log(
  //     `오늘이 예약날짜 이후인가: `,
  //     isAfter(new Date(), new Date(el.reservation.rsDate))
  //   );
  //   console.log(
  //     `오늘이 rsDate+7일보다 전인가: `,
  //     isBefore(new Date(), addDays(new Date(el.reservation.rsDate), 7))
  //   );
  // });
  reviewState.data.map((el) => console.log(el));

  // TODO: 2. review에서 예약날짜 이후 + 1주일 지나기 전 이라면 리뷰 쓸 수 있도록 구현하기 -> Y
  // TODO: 3. review에서 예약날짜 이전 + 1주일 후라면 리뷰 쓸 수 없도록 구현하기 -> Y
  // TODO: 4. 목록에서 리뷰를 클릭하면 #myRecentReview에 리뷰 내용 뜨도록 만들기 (상태값으로 input 또는 div 뜨게)

  const handleWriting = (el) => {
    setWriteOrShowReview(false); // 글 쓰는걸로 바꿔주기
    console.log('글 쓰기');
    console.log(el);
  };
  const handleShowing = (el) => {
    setWriteOrShowReview(true); // 글 읽는걸로 바꿔주기
    console.log(el);
    setShowReviewContent({
      reservation: el.reservation,
      review: el.review,
    });
  };

  // TODO: 5. 사진 업로드 하면 제목 바뀌기 + 업로드 사진 없으면 다른 문구 처리
  const changeProfileBtn = (event) => {
    let formData = new FormData();
    let picTitle = [];
    for (let i = 0; i < event.target.files.length; i++) {
      picTitle.push(event.target.files[i].name);
      formData.append('image', event.target.files[i]);
    }
    setUserPicTitle(picTitle);
    setUserPic(formData);
  };

  const sendImgToServer = async () => {
    // 선택한 파일을 서버로 axios 요청을 보내 유저 db의 userPic 업데이트
    try {
      console.log(userState.userId);
      const imageRes = await axios.post(`${url}/mypage/review/3`, userPic, {
        headers: {
          authorization: `Bearer ${userState.accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MypageReviewContent>
      <div id='mypageReviewTitle'>
        <h2>개인 정보 수정</h2>
      </div>

      <div id='myRecentComment'>
        {writeOrShowReview ? ( //true면 글쓰기, false면 읽기
          <div id='myRecentReview'>
            <div id='myRecentReviewExtra'>
              <div id='myRecentCommentTitle'>
                <h3>
                  {userState.nickname}님의 2021-01-02 예약에 대한 리뷰입니다.
                </h3>
              </div>
              <div id='myRecentCommentStar'>⭐⭐⭐⭐⭐</div>
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
                    onChange={changeProfileBtn}
                  />
                </div>
              </div>
            </div>
            <div id='myRecentReviewContent'>
              <textarea placeholder='리뷰를 입력해주세요.' />
              <div className='myRecentReviewBtn'>
                <button onClick={sendImgToServer}>저장하기</button>
              </div>
            </div>
          </div>
        ) : (
          <div id='myRecentReview'>
            <div id='myRecentReviewExtra'>
              <div id='myRecentCommentTitle'>
                <h3>{userState.nickname}님의 예약에 대한 리뷰입니다.</h3>
              </div>
              <div id='myRecentCommentStar'>⭐⭐⭐⭐⭐</div>
              <div id='myRecentCommentPic'>
                <div id='myRecentCommentPicList'>
                  {showReviewContent.review.rvImg.length === 0 ? (
                    <p>업로드한 사진이 없습니다.</p>
                  ) : (
                    showReviewContent.reservation.rvImg.map((el) => {
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
                    onChange={changeProfileBtn}
                  />
                </div>
              </div>
            </div>
            <div id='myRecentReviewContent'>
              <div>{showReviewContent.review.eval}</div>
              <div className='myRecentReviewBtn'>
                <button>저장하기</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div id='myCommentList'>
        <div id='myCommentListWrap'>
          <ul id='myComments'>
            {reviewState.data.map((el) => {
              return isAfter(new Date(), new Date(el.reservation.rsDate)) ===
                true ? (
                <li
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
                  <p>{format(new Date(el.reservation.rsDate), 'yyyy-MM-dd')}</p>
                  <p>{el.reservation.chefName} 셰프님</p>
                  <p>{el.reservation.courseName} 코스</p>
                </li>
              ) : (
                <li onClick={() => console.log('아직 글 못씀')}>
                  <p>{format(new Date(el.reservation.rsDate), 'yyyy-MM-dd')}</p>
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
    </MypageReviewContent>
  );
}

export default MypageReview;
