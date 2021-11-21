import { ModalBackground, LogoutModalBox } from '../styled/styledModal';
import { useDispatch, useSelector } from 'react-redux';

import { closeLogoutModal } from '../features/user/modal';
import { logout, userStatus } from '../features/user/user';
import axios from 'axios';

function LogoutModal() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const dispatch = useDispatch();
  const userInfo = useSelector(userStatus);
  // const modalState = useSelector(modalStatus);
  // console.log('LogoutModal에서 modalStatus: ', modalState);

  const clickOk = () => {
    axios
      .get(`${url}/user/logout`, {
        headers: { authorization: `Bearer ${userInfo.accessToken}}` },
      })
      .then(() => {
        dispatch(logout());
        dispatch(closeLogoutModal());
        // setIsLogout(false);
        window.location.replace('/');
      });
  };

  const cancelLogout = () => {
    // setIsLogout(false);
    dispatch(closeLogoutModal());
  };

  return (
    <>
      <ModalBackground>
        <LogoutModalBox>
          <span>로그아웃</span>
          <div id='logoutDesc'>
            <p>
              즐겁게 보셨나요? <br />
              다음에 또 놀러오세요!
            </p>
          </div>
          <div id='confirmBtn'>
            <button onClick={clickOk}>확인</button>
            <button onClick={cancelLogout}>취소</button>
          </div>
        </LogoutModalBox>
      </ModalBackground>
    </>
  );
}

export default LogoutModal;
