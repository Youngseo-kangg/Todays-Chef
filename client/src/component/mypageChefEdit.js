import { MypageChefEditContent } from '../styled/styleMypage';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import axios from 'axios';
import { userStatus } from '../features/user/user';
import { useSelector } from 'react-redux';
import { useState } from 'react';

require('dotenv').config();
axios.defaults.withCredentials = true;

function MypageChefEdit() {
  const userState = useSelector(userStatus);
  const [userPic, setUserPic] = useState({}); // 유저가 로컬에서 업로드한 프로필 이미지
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  // TODO: 1. load 되자마자 서버에 get 요청해서 chef 데이터 다 가져오고, redux chef 업데이트
  // TODO: 2. 자기소개 부분 수정 구현하기 + 유효성 검사
  // TODO: 3. 코스 소개 정보 입력 + 유효성 검사 + 서버에 저장하고 아래에 #chefCourseInfo로 렌더 되서 뜨도록 하기 + 필요한 modal, redux modal 업데이트
  // TODO: 4. #chefCourseInfo로 렌더된 코스 정보 -> 수정, 삭제 구현하기 + 필요한 modal, redux modal 업데이트

  const changeProfileBtn = (event) => {
    // 로컬에서 선택한 사진 파일을 마이페이지 상에 미리보기로 띄움
    let formData = new FormData();
    formData.append('image', event.target.files[0]);
    setUserPic(formData);
  };

  const sendImgToServer = async () => {
    // 선택한 파일을 서버로 axios 요청을 보내 유저 db의 userPic 업데이트
    try {
      console.log(userState.userId);
      const imageRes = await axios.post(
        `${url}/mypage/image/${userState.userId}`,
        userPic,
        {
          headers: { authorization: `Bearer ${userState.accessToken}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MypageChefEditContent>
      <div id='chefEditIntro'>
        <h2>셰프 자기소개 수정</h2>
        <div id='chefEditIntroSaveBtn'>
          <button onClick={sendImgToServer}>저장하기</button>
        </div>
        <div id='chefEditIntroPic'>
          <img src={basic_profile} alt='셰프 사진' />
          <label htmlFor='chefPicUpload'>사진 업로드</label>
          <input
            type='file'
            name='chefPicUpload'
            id='chefPicUpload'
            onChange={changeProfileBtn}
          />
        </div>
        <div id='chefEditIntroText'>
          <p>줄바꿈은 띄어쓰기 없이 '/'로 표시 바랍니다. </p>
          <div className='chefEditInfoWrap'>
            <label htmlFor='chefEditInfoChefname'>셰프 이름</label>
            <input
              type='text'
              name='chefEditInfoChefname'
              placeholder='셰프 이름을 입력해주세요.'
            />
            <select>
              <option value='한식'>한식</option>
              <option value='일식'>일식</option>
              <option value='중식'>중식</option>
              <option value='양식'>양식</option>
            </select>
          </div>
          <div className='chefEditInfoWrap'>
            <label htmlFor='chefEditInfoGreeting'>인삿말</label>
            <textarea
              name='chefEditInfoGreeting'
              placeholder='인삿말을 입력해주세요. ex)안녕하세요./한식 셰프 김OO입니다.'
            />
          </div>
          <div className='chefEditInfoWrap'>
            <label htmlFor='chefEditInfoCareer'>경력</label>
            <textarea
              name='chefEditInfoCareer'
              placeholder='경력을 입력해주세요. ex)2015.03~ 2017.02 AA호텔 근무/2017.03~ 2018.02 BB호텔 근무'
            />
          </div>
          <div className='chefEditInfoWrap'>
            <label htmlFor='chefEditInfoValues'>가치관</label>
            <textarea
              name='chefEditInfoValues'
              placeholder='가치관을 입력해주세요. ex)건강하면서도 아름다운 음식을 만들려고 합니다./눈이 즐겁고, 입도 즐거운 미식 코스를 추구합니다.'
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
                <div className='chefCourseInfoBtnWrap'>
                  <button>수정하기</button>
                  <button>삭제하기</button>
                </div>
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
                <div className='chefCourseInfoBtnWrap'>
                  <button>수정하기</button>
                  <button>삭제하기</button>
                </div>
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
        </div>
      </div>
    </MypageChefEditContent>
  );
}

export default MypageChefEdit;
