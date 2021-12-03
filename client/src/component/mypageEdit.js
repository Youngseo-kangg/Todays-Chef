import { useDispatch, useSelector } from 'react-redux';
import { MypageEditContent } from '../styled/styleMypage';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import {
  userStatus,
  updateAccessToken,
  updateUserImg,
} from '../features/user/user';
import { chefStatus } from '../features/chef/chef';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  openSuccessModal,
  openServerErrorModal,
  openIsNeedReLoginModal,
} from '../features/user/modal';

require('dotenv').config();
axios.defaults.withCredentials = true;

function MypageEdit() {
  const dispatch = useDispatch();
  const userState = useSelector(userStatus);
  const chefState = useSelector(chefStatus);
  const [userPic, setUserPic] = useState({}); // 유저가 로컬에서 업로드한 프로필 이미지
  const [preview, setPreview] = useState(''); // 사진 미리보기
  const [nicknameInput, setNicknameInput] = useState({
    nickname: '',
    error: 'fdf',
  }); // 닉네임 관련 + 에러
  const [passwordInput, setPasswordInput] = useState({
    oldPassword: '',
    newPassword: '',
    error: 'ㄹㅇ',
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
  };

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
          <label htmlFor='image' id='mypageInfoPicBtn'>
            사진 업로드
          </label>
          <input
            type='file'
            id='image'
            name='image'
            accept='image/*'
            onChange={changeProfileBtn}
          ></input>
          <button onClick={sendImgToServer}>저장하기</button>
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
              <button>수정하기</button>
            </div>
            {nicknameInput.error ? <p>{nicknameInput.error}</p> : null}
            <div className='myInfoDetailWrap'>
              <label htmlFor='myInfoDetailPassword'>비밀번호</label>
              <input
                type='password'
                name='myInfoDetailPassword'
                onChange={handlePasswordInput('oldPassword')}
              />
            </div>
            <div className='myInfoDetailWrap'>
              <label htmlFor='myInfoDetailNewPassword'>새로운 비밀번호</label>
              <input
                type='password'
                name='myInfoDetailNewPassword'
                onChange={handlePasswordInput('newPassword')}
              />
              <button>수정하기</button>
            </div>
            {passwordInput.error ? <p>{passwordInput.error}</p> : null}
            <div id='myInfoDetailBtnWrap'>
              <p>탈퇴 시 자동으로 예약이 취소됩니다.</p>
              <button>탈퇴하기</button>
            </div>
          </div>
        </div>
      </div>
    </MypageEditContent>
  );
}

export default MypageEdit;
