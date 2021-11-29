import { MypageReviewContent } from '../styled/styleMypage';
import { PagenationList } from '../styled/styleFindChef';

function MypageReview() {
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
