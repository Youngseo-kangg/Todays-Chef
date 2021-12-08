import { useDispatch, useSelector } from 'react-redux';
import { MypageEditContent } from '../styled/styleMypage';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import {
  userStatus,
  updateAccessToken,
  updateUserImg,
  editUserNickname,
  logout,
} from '../features/user/user';
import { reservationStatus } from '../features/reservation/reservation';
import axios from 'axios';
import { useState } from 'react';
import {
  openSuccessModal,
  openServerErrorModal,
  openIsNeedReLoginModal,
  openFailModal,
  openChoiceModal,
} from '../features/user/modal';
import { isAfter } from 'date-fns';
import { useHistory } from 'react-router';

require('dotenv').config();
axios.defaults.withCredentials = true;

function MypageEdit() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userState = useSelector(userStatus);
  const reservationState = useSelector(reservationStatus);
  const [userPic, setUserPic] = useState({}); // 유저가 로컬에서 업로드한 프로필 이미지
  const [preview, setPreview] = useState(''); // 사진 미리보기
  const [nicknameInput, setNicknameInput] = useState({
    nickname: '',
    error: '',
  }); // 닉네임 관련 + 에러
  const [passwordInput, setPasswordInput] = useState({
    oldPassword: '',
    newPassword: '',
    error: '',
  }); // 비밀번호 변경 관련 + 에러
  // TODO: 1. load 되자마자 서버에 get 요청해서 개인 데이터 다 가져오고, redux user 업데이트
  // TODO: 2. 사진 업데이트, 닉네임 변경, 비밀번호 변경, 회원 탈퇴 + 유효성 검사 + 필요한 modal, redux modal 업데이트
  // TODO: 2-1. 셰프의 경우 탈퇴 안되고 admin한테 연락 가게 만들기 + 고객의 경우 가장 가까운 예약 날짜까지 1주일 이상 남아있으면 탈퇴 가능하지만 그 이하로 남아있으면 탈퇴 안된다고 모달 띄우기
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;

  const changeProfileBtn = (event) => {
    let formData = new FormData();
    formData.append('image', event.target.files[0]);
    if (event.target.files.length !== 0) {
      const imageSRC = window.URL.createObjectURL(event.target.files[0]);
      setPreview(imageSRC);
      setUserPic(formData);
    }
  }; // 사진 업로드 + 미리보기 띄움

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
      if (imageRes.data.message === 'user ok') {
        if (imageRes.data.accessToken) {
          dispatch(
            updateAccessToken({ accessToken: imageRes.data.accessToken })
          );
        }
        dispatch(updateUserImg({ userImg: imageRes.data.location })); // 사진 업데이트
        dispatch(openSuccessModal({ message: '사진 변경이 완료되었습니다.' }));
      }
    } catch (err) {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch(openServerErrorModal());
      } else if (err.response.data.message === 'Send new Login Request') {
        dispatch(openIsNeedReLoginModal());
      }
    }
  }; // 이미지 변경 서버에다가 요청 + redux 업뎃

  const handlePasswordInput = (key) => (e) => {
    setPasswordInput({
      ...passwordInput,
      error: '',
      [key]: e.target.value,
    });
  };
  const handleNicknameInput = (e) => {
    setNicknameInput({
      error: '',
      nickname: e.target.value,
    });
  };

  const handleGrid = () => {
    if (passwordInput.error && nicknameInput.error) {
      return 'bothError';
    } else if (passwordInput.error) {
      return 'passwordError';
    } else if (nicknameInput.error) {
      return 'nicknameError';
    } else {
      return;
    }
  }; // 에러메세지 관련 클래스 지정 함수

  const submitNickname = async () => {
    // 유효성검사
    if (nicknameInput.nickname === '') {
      setNicknameInput({
        ...nicknameInput,
        error: '닉네임을 입력해주세요.',
      });
    } else if (!/^[a-zA-zㄱ-ㅎ가-힣0-9]{2,15}$/.test(nicknameInput.nickname)) {
      // TODO: 유효성검사 작성 필요
      setNicknameInput({
        ...nicknameInput,
        error: '닉네임은 한글,영문,숫자로 2자 이상 15자 이내여야 합니다.',
      });
    } else {
      try {
        // axios요청
        let postResult = await axios.post(
          `${url}/mypage/${userState.userId}`,
          {
            nickname: nicknameInput.nickname,
            oldPwd: '',
            newPwd: '',
          },
          {
            headers: { authorization: `bearer ${userState.accessToken}` },
          }
        );
        if (postResult.data.message === 'ok') {
          if (postResult.data.accessToken) {
            dispatch(
              updateAccessToken({ accessToken: postResult.data.accessToken })
            );
          }
          // redux 업데이트
          dispatch(
            editUserNickname({
              nickname: nicknameInput.nickname,
            })
          );
          // 모달로 알려주기
          dispatch(
            openSuccessModal({ message: '닉네임 수정이 완료되었습니다.' })
          );
        }
      } catch (err) {
        console.log(err);
        if (err.message === 'Network Error') {
          dispatch(openServerErrorModal());
        } else if (err.response.data.message === 'Send new Login Request') {
          dispatch(openIsNeedReLoginModal());
        }
      }
    }
  };

  const submitPassword = async () => {
    // 유효성검사
    if (passwordInput.oldPassword === '' || passwordInput.newPassword === '') {
      setPasswordInput({
        ...passwordInput,
        error: '비밀번호를 모두 입력해주세요.',
      });
    }
    // TODO : 유효성검사 작업 필요
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(
        passwordInput.newPassword
      )
    ) {
      setPasswordInput({
        ...passwordInput,
        error:
          '비밀번호는 대문자, 특수문자, 숫자를 포함하여 8자 이상이여야 합니다.',
      });
    } else {
      try {
        // axios요청
        let result = await axios.post(
          `${url}/mypage/${userState.userId}`,
          {
            nickname: '',
            oldPwd: passwordInput.oldPassword,
            newPwd: passwordInput.newPassword,
          },
          { headers: { authorization: `bearer ${userState.accessToken}` } }
        );
        console.log(result);
        dispatch(
          openSuccessModal({
            message: `비밀번호 수정이 완료되었습니다. 재로그인이 필요합니다.`,
          })
        );
      } catch (err) {
        console.log(err);
        if (err.message === 'Network Error') {
          dispatch(openServerErrorModal());
        } else if (err.response.data.message === 'Send new Login Request') {
          dispatch(openIsNeedReLoginModal());
        } else if (err.response.data.message === 'wrong password') {
          // oldPassword가 안맞을때
          dispatch(openFailModal({ message: '이전 비밀번호가 틀립니다.' }));
        }
      }
    }
  };

  const deleteUser = async () => {
    if (userState.isChef) {
      // 셰프라면 직접 서비스센터에 메일 보내라 하기
      dispatch(
        openFailModal({
          message: '셰프는 지원센터에 유선으로 문의 부탁드립니다.',
        })
      );
    } else if (
      reservationState.data.map((el) =>
        isAfter(new Date(el.rsDate), new Date())
      )
    ) {
      // 미래 예약 내역이 없을때에만 탈퇴하기 ok하기
      dispatch(
        openFailModal({
          message: '예약 내역이 있는 경우 탈퇴가 불가능 합니다.',
        })
      );
    } else {
      dispatch(
        openChoiceModal({
          target: userState.userId,
          choiceTitle: '회원 탈퇴',
          message: `탈퇴 하시겠습니까?`,
        })
      );
    }
  };

  return (
    <MypageEditContent>
      <div id='mypageEditContentWrap'>
        <div id='mypageEditTitle'>
          <h2>개인 정보 수정</h2>
        </div>
        <div id='mypageInfoPic'>
          <div id='mypageInfoPicWrap'>
            <img
              src={
                preview
                  ? preview
                  : userState.userImg
                  ? userState.userImg
                  : basic_profile
              }
              alt='유저 사진'
            />
          </div>
          <div className='mypageInfoPicButton'>
            <label
              className='mypageInfoPicBtn'
              htmlFor='image'
              id='mypageInfoPicBtn'
            >
              사진 업로드
            </label>
            <input
              type='file'
              id='image'
              name='image'
              accept='image/*'
              onChange={changeProfileBtn}
            ></input>
            <button className='mypageInfoPicBtn' onClick={sendImgToServer}>
              저장하기
            </button>
          </div>
        </div>

        <div id='myInfoDetail'>
          <div id='myInfoDetailContent' className={handleGrid()}>
            <div className='myInfoDetailWrap'>
              <label htmlFor='myInfoDetailNickname'>닉네임</label>
              <input
                type='text'
                name='myInfoDetailNickname'
                defaultValue={userState.nickname ? userState.nickname : ''}
                onChange={handleNicknameInput}
              />
              <button onClick={submitNickname}>수정하기</button>
            </div>
            {nicknameInput.error ? <p>{nicknameInput.error}</p> : null}
            <div
              className={
                userState.isOauth
                  ? 'socialLoginWarning myInfoDetailWrap'
                  : 'myInfoDetailWrap'
              }
            >
              <label htmlFor='myInfoDetailPassword'>비밀번호</label>
              {userState.isOauth ? (
                <p>소셜 로그인 비밀번호 변경은 불가능합니다.</p>
              ) : (
                <input
                  type='password'
                  name='myInfoDetailPassword'
                  onChange={handlePasswordInput('oldPassword')}
                />
              )}
            </div>
            <div
              className={
                userState.isOauth
                  ? 'socialLoginWarning myInfoDetailWrap'
                  : 'myInfoDetailWrap'
              }
            >
              <label htmlFor='myInfoDetailNewPassword'>새로운 비밀번호</label>
              {userState.isOauth ? (
                <p>소셜 로그인 비밀번호 변경은 불가능합니다.</p>
              ) : (
                <input
                  type='password'
                  name='myInfoDetailNewPassword'
                  onChange={handlePasswordInput('newPassword')}
                />
              )}
              {userState.isOauth ? null : (
                <button onClick={submitPassword}>수정하기</button>
              )}
            </div>
            {passwordInput.error ? <p>{passwordInput.error}</p> : null}
            <div id='myInfoDetailBtnWrap'>
              <p>탈퇴 시 자동으로 예약이 취소됩니다.</p>
              <button onClick={deleteUser}>탈퇴하기</button>
            </div>
          </div>
        </div>
      </div>
    </MypageEditContent>
  );
}

export default MypageEdit;
