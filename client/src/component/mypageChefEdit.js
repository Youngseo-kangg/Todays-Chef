import { MypageChefEditContent } from '../styled/styleMypage';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';

function MypageChefEdit() {
  return (
    <MypageChefEditContent>
      <div id='chefEditIntro'>
        <h2>셰프 자기소개 수정</h2>
        <div id='chefEditIntroPic'>
          <img src={basic_profile} alt='셰프 사진' />
          <button>사진 업로드</button>
        </div>
        <div id='chefEditIntroText'>
          <div className='chefEditInfoWrap'>
            <label htmlFor='chefEditInfoGreeting'>인삿말</label>
            <textarea
              name='chefEditInfoGreeting'
              placeholder='인삿말을 입력해주세요.'
            />
          </div>
          <div className='chefEditInfoWrap'>
            <label htmlFor='chefEditInfoCareer'>경력</label>
            <textarea
              name='chefEditInfoCareer'
              placeholder='경력을 입력해주세요.'
            />
          </div>
          <div className='chefEditInfoWrap'>
            <label htmlFor='chefEditInfoValues'>가치관</label>
            <textarea
              name='chefEditInfoValues'
              placeholder='가치관을 입력해주세요.'
            />
          </div>
        </div>
      </div>
      <div id='chefEditInfo'>
        <div id='chefCourseInfo'>
          <h2>셰프 코스 수정</h2>
          <div id='chefCourseInfoFormWrap'>
            <div id='chefCourseInfoForm'>
              <div className='chefCourseInfoFormItem'>
                <label htmlFor='chefCourseName'>코스 이름</label>
                <input
                  type='text'
                  name='chefCourseName'
                  placeholder='코스 이름'
                />
              </div>
              <div className='chefCourseInfoFormItem'>
                <label htmlFor='chefCoursePrice'>코스 가격</label>
                <input
                  type='text'
                  name='chefCoursePrice'
                  placeholder='코스 가격'
                />
              </div>
              <div className='chefCourseInfoFormItem'>
                <label htmlFor='chefCourseMin'>최소 인원</label>
                <input
                  type='text'
                  name='chefCourseMin'
                  placeholder='최소 인원'
                />
              </div>
              <div className='chefCourseInfoFormItem'>
                <label htmlFor='chefCourseMax'>최대 인원</label>
                <input
                  type='text'
                  name='chefCourseMax'
                  placeholder='최대 인원'
                />
              </div>
              <textarea name='chefCourseDesc' placeholder='코스 설명' />
            </div>
            <button id='chefCourseInfoAdd'>추가하기</button>
          </div>

          <div id='chefCourseInfoDataWrap'>
            <div className='chefCourseInfoData'>
              <div className='chefCourseInfoBtn'>
                <button>수정하기</button>
              </div>
              <div className='chefCourseInfoItem'>
                <h3>코스 이름</h3>
                <p>~~~~~~</p>
              </div>
              <div className='chefCourseInfoItem'>
                <h3>최소 인원</h3>
                <p>3</p>
              </div>

              <div className='chefCourseInfoItem'>
                <h3>최대 인원</h3>
                <p>6</p>
              </div>
              <div className='chefCourseInfoItem'>
                <h3>코스 가격</h3>
                <p>~~~~~~</p>
              </div>

              <div className='chefCourseInfoItemDesc'>fdfdfdfdfdd</div>
            </div>
            <div className='chefCourseInfoData'>
              <div className='chefCourseInfoBtn'>
                <button>수정하기</button>
              </div>
              <div className='chefCourseInfoItem'>
                <h3>코스 이름</h3>
                <p>~~~~~~</p>
              </div>

              <div className='chefCourseInfoItem'>
                <h3>코스 가격</h3>
                <p>~~~~~~</p>
              </div>

              <div className='chefCourseInfoItem'>
                <h3>최소 인원</h3>
                <p>3</p>
              </div>

              <div className='chefCourseInfoItem'>
                <h3>최대 인원</h3>
                <p>6</p>
              </div>

              <div className='chefCourseInfoItemDesc'>fdfdfdfdfdd</div>
            </div>
          </div>

          <div id='chefCourseSaveBtn'>
            <button>저장하기</button>
          </div>
        </div>
      </div>
    </MypageChefEditContent>
  );
}

export default MypageChefEdit;
