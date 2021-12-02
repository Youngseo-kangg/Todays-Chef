import { MypageChefEditContent } from '../styled/styleMypage';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import axios from 'axios';
import { userStatus } from '../features/user/user';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateAccessToken } from '../features/user/user';
import { chefMypage, chefStatus } from '../features/chef/chef';
import {
  openServerErrorModal,
  openIsNeedReLoginModal,
  openSuccessModal,
} from '../features/user/modal';
require('dotenv').config();
axios.defaults.withCredentials = true;

function MypageChefEdit() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const dispatch = useDispatch();
  const userState = useSelector(userStatus);
  const chefState = useSelector(chefStatus);
  const [errorMsg, setErrorMsg] = useState(''); // 에러메세지
  const [userPic, setUserPic] = useState({}); // 유저가 로컬에서 업로드한 프로필 이미지
  const [update, setUpdate] = useState(false);
  const [preview, setPreview] = useState(''); // 사진 미리보기
  const [chefEditText, setChefEditText] = useState({
    chefId: -1,
    chefName: '',
    cuisine: '',
    chefImg: '',
    greeting: '',
    career: '',
    values: '',
    rating: '',
    chUserId: -1,
  });
  // TODO: 1. load 되자마자 서버에 get 요청해서 chef 데이터 다 가져오고, redux chef 업데이트
  const getChefInfo = async () => {
    try {
      let result = await axios.get(
        `${url}/mypage/info/chef?id=${chefState.chefId}`,
        {
          headers: { authorization: `bearer ${userState.accessToken}` },
        }
      );
      if (result.data.accessToken) {
        dispatch(updateAccessToken({ accessToken: result.data.accessToken }));
      }
      dispatch(
        chefMypage({
          chefName: result.data.data.chefName,
          cuisine: result.data.data.cuisine,
          chefImg: result.data.data.chefImg,
          greeting: result.data.data.greeting,
          career: result.data.data.career,
          values: result.data.data.values,
          rating: result.data.data.rating,
          chUserId: result.data.data.chUserId,
        })
      );
      setChefEditText({
        chefName: result.data.data.chefName || '',
        cuisine: result.data.data.cuisine || '',
        chefImg: result.data.data.chefImg || '',
        greeting: result.data.data.greeting || '',
        career: result.data.data.career || '',
        values: result.data.data.values || '',
        rating: result.data.data.rating || '',
        chUserId: result.data.data.chUserId,
      });
    } catch (err) {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch(openServerErrorModal());
      } else if (err.response.data.message === 'Send new Login Request') {
        dispatch(openIsNeedReLoginModal());
      }
    }
  };

  useEffect(() => {
    getChefInfo();
  }, [update]);
  // TODO: 2. 자기소개 부분 수정 구현하기 + 유효성 검사
  // TODO: 3. 코스 소개 정보 입력 + 유효성 검사 + 서버에 저장하고 아래에 #chefCourseInfo로 렌더 되서 뜨도록 하기 + 필요한 modal, redux modal 업데이트
  // TODO: 4. #chefCourseInfo로 렌더된 코스 정보 -> 수정, 삭제 구현하기 + 필요한 modal, redux modal 업데이트

  const changeProfileBtn = (event) => {
    let formData = new FormData();
    formData.append('image', event.target.files[0]);
    const imageSRC = window.URL.createObjectURL(event.target.files[0]);
    setPreview(imageSRC);
    setUserPic(formData);
  }; // 업로드 + 미리보기

  const sendImgToServer = async () => {
    // 선택한 파일을 서버로 axios 요청을 보내 유저 db의 userPic 업데이트
    try {
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

  const handleIntroInputValue = (key) => (e) => {
    setErrorMsg(''); // 에러 메세지 초기화
    setChefEditText({
      ...chefEditText,
      [key]: e.target.value,
    });
  }; // 입력값 받아오기

  const onSubmit = async () => {
    try {
      // 유효성 검사하기
      console.log(chefEditText);
      if (
        chefEditText.chefName === '' ||
        chefEditText.greeting === '' ||
        chefEditText.career === '' ||
        chefEditText.values === ''
      ) {
        setErrorMsg('모든 항목을 작성하셔야 합니다.');
      } else if (!chefState.chefImg && !preview) {
        // 지정해둔 사진이 없고 + 업로드(=preview 될때)도 안했다면
        setErrorMsg('사진이 필요합니다.');
      } else {
        // 이미지 업로드 했다면
        if (preview) {
          sendImgToServer();
        }
        // axios 요청
        let postResult = await axios.post(
          `${url}/mypage/info/chef?id=${chefState.chefId}`,
          {
            chefName: chefEditText.chefName,
            cuisine: chefEditText.cuisine,
            greeting: chefEditText.greeting,
            career: chefEditText.career,
            values: chefEditText.values,
          },
          { headers: { authorization: `bearer ${userState.accessToken}` } }
        );
        console.log(postResult);
        if (postResult.data.message === 'ok') {
          if (postResult.data.accessToken) {
            dispatch(updateAccessToken(postResult.data.accessToken));
          }
          // 성공했다는 모달 띄우기
          dispatch(
            openSuccessModal({ message: '셰프 정보 변경이 완료되었습니다.' })
          );
          // redux 업뎃해주기
          setUpdate(!update);
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

  return (
    <MypageChefEditContent>
      <div id='chefEditIntro'>
        <h2>셰프 자기소개 수정</h2>
        <div id='chefEditIntroSaveBtn'>
          <button onClick={onSubmit}>저장하기</button>
        </div>
        <div id='chefEditIntroPic'>
          <img
            src={
              chefEditText.chefImg === ''
                ? preview === ''
                  ? basic_profile
                  : preview
                : chefEditText.chefImg
            }
            alt='셰프 사진'
          />
          <label htmlFor='chefPicUpload'>사진 업로드</label>
          <input
            type='file'
            name='chefPicUpload'
            id='chefPicUpload'
            accept='image/*'
            onChange={changeProfileBtn}
          />
        </div>
        <div id='chefEditIntroText'>
          <p id='chefEditDirection'>
            줄바꿈은 띄어쓰기 없이 '/'로 표시 바랍니다.{' '}
          </p>
          <div className='chefEditInfoWrap'>
            <label htmlFor='chefEditInfoChefname'>셰프 이름</label>
            <input
              type='text'
              name='chefEditInfoChefname'
              value={chefEditText.chefName ? chefEditText.chefName : ''}
              onChange={handleIntroInputValue('chefName')}
              placeholder='셰프 이름을 입력해주세요.'
            />
            <select
              defaultValue={
                chefEditText.cuisine ? chefEditText.cuisine : '한식'
              }
              onChange={handleIntroInputValue('cuisine')}
            >
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
              value={chefEditText.greeting ? chefEditText.greeting : ''}
              onChange={handleIntroInputValue('greeting')}
              placeholder='인삿말을 입력해주세요. ex)안녕하세요./한식 셰프 김OO입니다.'
            />
          </div>
          <div className='chefEditInfoWrap'>
            <label htmlFor='chefEditInfoCareer'>경력</label>
            <textarea
              name='chefEditInfoCareer'
              value={chefEditText.career ? chefEditText.career : ''}
              onChange={handleIntroInputValue('career')}
              placeholder='경력을 입력해주세요. ex)2015.03~ 2017.02 AA호텔 근무/2017.03~ 2018.02 BB호텔 근무'
            />
          </div>
          <div className='chefEditInfoWrap'>
            <label htmlFor='chefEditInfoValues'>가치관</label>
            <textarea
              name='chefEditInfoValues'
              value={chefEditText.values ? chefEditText.values : ''}
              onChange={handleIntroInputValue('values')}
              placeholder='가치관을 입력해주세요. ex)건강하면서도 아름다운 음식을 만들려고 합니다./눈이 즐겁고, 입도 즐거운 미식 코스를 추구합니다.'
            />
          </div>
          {errorMsg ? <p id='chefEditWarning'>{errorMsg}</p> : null}
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
