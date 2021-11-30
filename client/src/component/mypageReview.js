import { MypageReviewContent } from '../styled/styleMypage';
import { PagenationList } from '../styled/styleFindChef';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { userStatus } from '../features/user/user';

require('dotenv').config();
axios.defaults.withCredentials = true;

function MypageReview() {
  const userState = useSelector(userStatus);
  const [userPic, setUserPic] = useState({}); // 유저가 로컬에서 업로드한 프로필 이미지
  // TODO: 1. load 되자마자 서버에 get 요청해서 review 데이터 다 가져오고, redux review 업데이트
  // TODO: 2. review에서 예약날짜 이후 + 1주일 지나기 전 이라면 리뷰 쓸 수 있도록 구현하기
  // TODO: 3. review에서 예약날짜 이전 + 1주일 후라면 리뷰 쓸 수 없도록 구현하기
  // TODO: 4. 목록에서 리뷰를 클릭하면 #myRecentReview에 리뷰 내용 뜨도록 만들기 (상태값으로 input 또는 div 뜨게)
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;

  const changeProfileBtn = (event) => {
    // 로컬에서 선택한 사진 파일을 마이페이지 상에 미리보기로 띄움
    let formData = new FormData();
    // formData.append('image', event.target.files);
    for (let i = 0; i < event.target.files.length; i++) {
      formData.append('image', event.target.files[i]);
    }
    setUserPic(formData);

    // // FormData의 key 확인
    // for (let key of formData.keys()) {
    //   console.log('aaa', key);
    // }
    // //FormData의 value 확인
    // for (let value of formData.values()) {
    //   console.log('bbb', value);
    // }
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
        <div id='myRecentReview'>
          <div id='myRecentReviewExtra'>
            <div id='myRecentCommentTitle'>
              <h3>~~~님의 2021-01-02 예약에 대한 리뷰입니다.</h3>
            </div>
            <div id='myRecentCommentStar'>⭐⭐⭐⭐⭐</div>
            <div id='myRecentCommentPic'>
              <div id='myRecentCommentPicList'>
                <p>~~~.jpg</p>
                <p>~~~.jpg</p>
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
      </div>

      <div id='myCommentList'>
        <div id='myCommentListWrap'>
          <ul id='myComments'>
            <li>
              <p>2021-01-01</p>
              <p>김한식</p>
              <p>코스 이름</p>
            </li>
            <li>
              <p>2021-01-01</p>
              <p>김한식</p>
              <p>코스 이름</p>
            </li>
            <li>
              <p>2021-01-01</p>
              <p>김한식</p>
              <p>코스 이름</p>
            </li>
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
