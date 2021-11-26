import { MypageReviewContent } from '../styled/styleMypage';

function MypageReview() {
  return (
    <MypageReviewContent>
      <div id='myRecentComment'>
        <div id='myRecentCommentTitle'>
          <h2>~~~님의 2021-01-02에 대한 리뷰입니다.</h2>
        </div>
        <div id='myRecentReview'>
          <div id='myRecentReviewExtra'>
            <div id='myRecentCommentStar'>⭐⭐⭐⭐⭐</div>
            <div id='myRecentCommentPic'>
              <div>사진 사진 사진</div>
              <div className='myRecentReviewBtn'>
                <button>사진 업로드</button>
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
        <ul>
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
      </div>
    </MypageReviewContent>
  );
}

export default MypageReview;
