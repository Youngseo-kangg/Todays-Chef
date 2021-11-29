import { MypageReviewContent } from '../styled/styleMypage';
import { PagenationList } from '../styled/styleFindChef';
import axios from 'axios';

require('dotenv').config();
axios.defaults.withCredentials = true;

function MypageReview() {
  // TODO: 1. load 되자마자 서버에 get 요청해서 review 데이터 다 가져오고, redux review 업데이트
  // TODO: 2. review에서 예약날짜 이후 + 1주일 지나기 전 이라면 리뷰 쓸 수 있도록 구현하기
  // TODO: 3. review에서 예약날짜 이전 + 1주일 후라면 리뷰 쓸 수 없도록 구현하기
  // TODO: 4. 목록에서 리뷰를 클릭하면 #myRecentReview에 리뷰 내용 뜨도록 만들기 (상태값으로 input 또는 div 뜨게)

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
                <p>~~~.jpg</p>
              </div>
              <div className='myRecentReviewBtn'>
                <label htmlFor='reviewPic'>사진 업로드</label>
                <input type='file' name='reviewPic' id='reviewPic' multiple />
              </div>
            </div>
          </div>
          <div id='myRecentReviewContent'>
            <textarea placeholder='리뷰를 입력해주세요.' />
            <div className='myRecentReviewBtn'>
              <button>저장하기</button>
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
