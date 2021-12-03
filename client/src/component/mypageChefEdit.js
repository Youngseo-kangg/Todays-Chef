import { MypageChefEditContent } from '../styled/styleMypage';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import axios from 'axios';
import { userStatus } from '../features/user/user';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateAccessToken } from '../features/user/user';
import {
  addCourse,
  chefMypage,
  chefCourses,
  updateCourse,
  chefStatus,
} from '../features/chef/chef';
import {
  openServerErrorModal,
  openIsNeedReLoginModal,
  openSuccessModal,
  openChoiceModal,
} from '../features/user/modal';
require('dotenv').config();
axios.defaults.withCredentials = true;

function MypageChefEdit() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const dispatch = useDispatch();
  const userState = useSelector(userStatus);
  const chefState = useSelector(chefStatus);
  const [errorMsg, setErrorMsg] = useState(''); // 자기소개 에러메세지
  const [courseErrorMsg, setCourseErrorMsg] = useState(''); // 코스 관련 에러메세지
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
  const [courseText, setCourseText] = useState({
    courseName: '',
    courseDesc: '',
    price: '',
    peopleMax: 0,
    peopleMin: 0,
  });
  const [isEdit, setIsEdit] = useState(false);
  // const [editIdx, setEditIdx] = useState(0);
  const [onEditErrMsg, setOnEditErrMsg] = useState('');
  const [onEdit, setOnEdit] = useState({
    id: -1,
    courseName: '',
    courseDesc: '',
    price: 0,
    peopleMax: 0,
    peopleMin: 0,
  });
  // TODO: 1. load 되자마자 서버에 get 요청해서 chef 데이터 다 가져오고, redux chef 업데이트
  const getChefInfoAndCourse = async () => {
    try {
      let result = await axios.get(
        `${url}/mypage/info/chef?id=${chefState.chefId}`,
        {
          headers: { authorization: `bearer ${userState.accessToken}` },
        }
      );
      console.log(result.data.data);
      if (result.data.message === 'ok') {
        if (result.data.accessToken) {
          dispatch(updateAccessToken({ accessToken: result.data.accessToken }));
        }
        dispatch(
          chefMypage({
            chefName: result.data.data.info.chefName,
            cuisine: result.data.data.info.cuisine,
            chefImg: result.data.data.info.chefImg,
            greeting: result.data.data.info.greeting,
            career: result.data.data.info.career,
            values: result.data.data.info.values,
            rating: result.data.data.info.rating,
            chUserId: result.data.data.info.chUserId,
          })
        ); // 셰프 정보 redux 업뎃
        dispatch(chefCourses({ courses: result.data.data.courses }));
        // 코스 정보 redux 업뎃

        setChefEditText({
          chefName: chefState.chefName || '',
          cuisine: chefState.cuisine || '',
          chefImg: chefState.chefImg || '',
          greeting: chefState.greeting || '',
          career: chefState.career || '',
          values: chefState.values || '',
          rating: chefState.rating || '',
          chUserId: chefState.chUserId,
        }); // 초기화
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

  useEffect(() => {
    getChefInfoAndCourse();
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
  }; // 자기 소개 입력값 받아오기

  const handleCourseInputValue = (key) => (e) => {
    setCourseErrorMsg(''); // 에러 메세지 초기화
    setCourseText({
      ...courseText,
      [key]: e.target.value,
    });
  }; // 코스 입력값 받아오기

  const onSubmitIntro = async () => {
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
  }; // 셰프 정보 수정 제출

  const onSubmitCourse = async () => {
    try {
      // 유효성검사
      if (
        courseText.courseName === '' ||
        courseText.price === '' ||
        courseText.peopleMin === '' ||
        courseText.peopleMax === ''
      ) {
        setCourseErrorMsg('모든 항목을 입력해 주세요.');
      } else if (
        typeof Number(courseText.peopleMin) !== 'number' ||
        typeof Number(courseText.peopleMax) !== 'number'
      ) {
        setCourseErrorMsg('인원은 숫자로 입력해 주세요.');
      } else if (
        courseText.peopleMin.includes('.') ||
        courseText.peopleMax.includes('.') ||
        Number(courseText.peopleMin) < 0 ||
        Number(courseText.peopleMax) < 0 ||
        Number(courseText.peopleMin) >= Number(courseText.peopleMax)
      ) {
        setCourseErrorMsg('인원을 정확히 입력해 주세요.');
      } else if (
        !(Number(courseText.peopleMax) - Number(courseText.peopleMin) >= 2)
      ) {
        setCourseErrorMsg('최소, 최대 인원은 2 이상 차이가 나야 합니다.');
      } else {
        // axios 요청
        let postResult = await axios.post(
          `${url}/mypage/info/chef?id=${chefState.chefId}`,
          {
            ...courseText,
            price: Number(courseText.price),
            peopleMin: Number(courseText.peopleMin),
            peopleMax: Number(courseText.peopleMax),
          },
          {
            headers: { authorization: `bearer ${userState.accessToken}` },
          }
        );
        if (postResult.data.message === 'ok') {
          // accessToken 담겨오면 업데이트
          if (postResult.data.accessToken) {
            dispatch(updateAccessToken(postResult.data.accessToken));
          }
          // redux 업데이트
          dispatch(
            addCourse({
              data: {
                ...postResult.data.data,
                peopleMin: Number(postResult.data.data.peopleMin),
                peopleMax: Number(postResult.data.data.peopleMax),
                price: Number(postResult.data.data.price),
              },
            })
          );
          // 모달 띄워서 알려주기
          dispatch(openSuccessModal({ message: '코스가 추가되었습니다.' }));
          // 입력창 원상복구
          setCourseText({
            courseName: '',
            courseDesc: '',
            price: '',
            peopleMax: 0,
            peopleMin: 0,
          });
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
  }; // 셰프 코스 새로 작성해서 제출

  const onEditCourse = async (el) => {
    setOnEdit(el); // 바꿔줄 상태로 내용 업뎃
    setIsEdit(true); // 변경상태로 바꿔주기
  }; // 코스 수정한다고 알려주기

  const onEditCourseSubmit = async () => {
    // 유효성검사
    if (
      onEdit.courseName === '' ||
      onEdit.peopleMin === '' ||
      onEdit.peopleMax === '' ||
      onEdit.price === ''
    ) {
      setOnEditErrMsg('모든 항목을 작성해주세요.');
    } else if (
      typeof Number(onEdit.peopleMin) !== 'number' ||
      typeof Number(onEdit.peopleMax) !== 'number'
    ) {
      setOnEditErrMsg('인원은 숫자로 입력해 주세요.');
    } else if (
      String(onEdit.peopleMin).includes('.') ||
      String(onEdit.peopleMax).includes('.') ||
      Number(onEdit.peopleMin) < 0 ||
      Number(onEdit.peopleMax) < 0 ||
      Number(onEdit.peopleMin) >= Number(onEdit.peopleMax)
    ) {
      setOnEditErrMsg('인원을 정확히 입력해 주세요.');
    } else if (!(Number(onEdit.peopleMax) - Number(onEdit.peopleMin) >= 2)) {
      setOnEditErrMsg('최소, 최대 인원은 2 이상 차이가 나야 합니다.');
    } else {
      try {
        // onEdit.id로 axios.patch 전달
        let patchResult = await axios.patch(
          `${url}/mypage/info/chef?id=${onEdit.id}`,
          {
            ...onEdit,
            price: Number(onEdit.price),
            peopleMin: Number(onEdit.peopleMin),
            peopleMax: Number(onEdit.peopleMax),
          },
          {
            headers: { authorization: `bearer ${userState.accessToken}` },
          }
        );
        if (patchResult.data.message === 'ok') {
          // accessToken 있는지
          if (patchResult.data.accessToken) {
            dispatch(
              updateAccessToken({ accessToken: patchResult.data.accessToken })
            );
          }
          // redux값 업데이트 해주기
          dispatch(
            updateCourse({
              target: {
                ...onEdit,
                price: Number(onEdit.price),
                peopleMin: Number(onEdit.peopleMin),
                peopleMax: Number(onEdit.peopleMax),
              },
            })
          );
          // 수정 끝났다고 사용했던 상태값 원상복구
          setIsEdit(false);
          setOnEdit({
            id: -1,
            courseName: '',
            courseDesc: '',
            price: 0,
            peopleMax: 0,
            peopleMin: 0,
          });
          // 모달 띄워 알려주기
          dispatch(openSuccessModal({ message: '수정이 완료되었습니다.' }));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }; // 코스 수정하고 제출할때

  const handleEditInputValue = (key) => (e) => {
    setOnEdit({
      ...onEdit,
      [key]: e.target.value,
    });
  }; // 수정할 내용 입력값 받아오기

  const onDeleteCourse = async (el) => {
    dispatch(
      openChoiceModal({
        target: el.id,
        message: `${el.courseName} 코스를 삭제하시겠습니까?`,
      })
    );
  }; // 코스 삭제 버튼 눌렀을때 떠야 하는 모달

  return (
    <MypageChefEditContent>
      <div id='chefEditIntro'>
        <h2>셰프 자기소개 수정</h2>
        <div id='chefEditIntroSaveBtn'>
          <button onClick={onSubmitIntro}>저장하기</button>
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
                  value={courseText.courseName}
                  onChange={handleCourseInputValue('courseName')}
                  placeholder='코스 이름'
                />
              </div>
              <div className='chefCourseInfoFormItem'>
                <label htmlFor='chefCoursePrice'>코스 가격</label>
                <input
                  type='text'
                  name='chefCoursePrice'
                  value={courseText.price}
                  onChange={handleCourseInputValue('price')}
                  placeholder='코스 가격'
                />
              </div>
              <div className='chefCourseInfoFormItem'>
                <label htmlFor='chefCourseMin'>최소 인원</label>
                <input
                  type='text'
                  name='chefCourseMin'
                  value={courseText.peopleMin}
                  onChange={handleCourseInputValue('peopleMin')}
                  placeholder='최소 인원'
                />
              </div>
              <div className='chefCourseInfoFormItem'>
                <label htmlFor='chefCourseMax'>최대 인원</label>
                <input
                  type='text'
                  name='chefCourseMax'
                  value={courseText.peopleMax}
                  onChange={handleCourseInputValue('peopleMax')}
                  placeholder='최대 인원'
                />
              </div>
              <textarea
                name='chefCourseDesc'
                value={courseText.courseDesc}
                onChange={handleCourseInputValue('courseDesc')}
                placeholder='코스 설명 ex)감자 수프/angus beef를 사용한 수제 햄버거와 맥앤치즈/유기농 딸기 퓨레를 곁들인 바닐라빈 아이스크림'
              />
            </div>
            {courseErrorMsg ? <p>{courseErrorMsg}</p> : null}
            <button id='chefCourseInfoAdd' onClick={onSubmitCourse}>
              추가하기
            </button>
          </div>

          <div id='chefCourseInfoDataWrap'>
            {chefState.courses.length === 0 ? (
              <div id='noCourseContent'>작성한 코스가 없습니다.</div>
            ) : (
              chefState.courses.map((el, idx) => {
                return (
                  <div key={idx} className='chefCourseInfoData'>
                    <div className='chefCourseInfoBtn'>
                      <div className='chefCourseInfoBtnWrap'>
                        <button
                          onClick={
                            isEdit ? onEditCourseSubmit : () => onEditCourse(el)
                          }
                        >
                          {isEdit && el.id === onEdit.id
                            ? '저장하기'
                            : '수정하기'}
                        </button>
                        <button onClick={() => onDeleteCourse(el)}>
                          삭제하기
                        </button>
                      </div>
                    </div>
                    {isEdit && el.id === onEdit.id ? (
                      <>
                        <div className='chefCourseInfoItem'>
                          <label htmlFor='courseName'>코스 이름</label>
                          <input
                            type='text'
                            name='courseName'
                            defaultValue={el.courseName}
                            onChange={handleEditInputValue('courseName')}
                          />
                        </div>
                        <div className='chefCourseInfoItem'>
                          <label htmlFor='peopleMin'>최소 인원</label>
                          <input
                            type='text'
                            name='peopleMin'
                            onChange={handleEditInputValue('peopleMin')}
                            defaultValue={el.peopleMin}
                          />
                        </div>

                        <div className='chefCourseInfoItem'>
                          <label htmlFor='peopleMax'>최대 인원</label>
                          <input
                            type='text'
                            name='peopleMax'
                            onChange={handleEditInputValue('peopleMax')}
                            defaultValue={el.peopleMax}
                          />
                        </div>
                        <div className='chefCourseInfoItem'>
                          <label htmlFor='price'>코스 가격</label>
                          <input
                            type='text'
                            name='price'
                            onChange={handleEditInputValue('price')}
                            defaultValue={el.price}
                          />
                        </div>

                        <textarea
                          name='courseDesc'
                          defaultValue={el.courseDesc}
                          onChange={handleEditInputValue('courseDesc')}
                          className='chefCourseInfoItemDesc'
                        ></textarea>
                        {onEditErrMsg ? <p>{onEditErrMsg}</p> : null}
                      </>
                    ) : (
                      <>
                        <div className='chefCourseInfoItem'>
                          <h3>코스 이름</h3>
                          <p>{el.courseName}</p>
                        </div>
                        <div className='chefCourseInfoItem'>
                          <h3>최소 인원</h3>
                          <p>{el.peopleMin}</p>
                        </div>

                        <div className='chefCourseInfoItem'>
                          <h3>최대 인원</h3>
                          <p>{el.peopleMax}</p>
                        </div>
                        <div className='chefCourseInfoItem'>
                          <h3>코스 가격</h3>
                          <p>{el.price}</p>
                        </div>

                        <div className='chefCourseInfoItemDesc'>
                          {el.courseDesc}
                        </div>
                      </>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </MypageChefEditContent>
  );
}

export default MypageChefEdit;
