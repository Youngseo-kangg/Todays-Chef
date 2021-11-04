import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, userStatus } from '../features/user/user';
import axios from 'axios';

function LogoutModal({ setIsLogout }) {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const dispatch = useDispatch();

  const userInfo = useSelector(userStatus);

  console.log('modal : ', userInfo);
  const clickOk = () => {
    axios
      .get(`${url}/user/logout`, {
        headers: { authorization: `Bearer ${userInfo.accessToken}}` },
      })
      .then(() => {
        dispatch(logout());
        setIsLogout(false);
        window.location.replace('/');
      });
  };

  return (
    <>
      <ModalBackground>
        <ModalBox>
          <span>로그아웃</span>
          <div id='loginDesc'>
            <p>
              즐겁게 보셨나요? <br />
              다음에 또 놀러오세요!
            </p>
          </div>
          <div id='confirmBtn'>
            <button onClick={clickOk}>확인</button>
          </div>
        </ModalBox>
      </ModalBackground>
    </>
  );
}

export default LogoutModal;
