import { MypageReviewContent } from '../styled/styleMypage';
import { PagenationList } from '../styled/styleFindChef';

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
                <input type='file' multiple />
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
