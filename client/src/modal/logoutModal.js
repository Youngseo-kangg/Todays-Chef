import { ModalBackground, LogoutModalBox } from '../styled/styledModal';
import { useDispatch, useSelector } from 'react-redux';

import {
  closeLogoutModal,
  setServerErrorTrue,
  openServerErrorModal,
  openIsNeedReLoginModal,
} from '../features/user/modal';
import { logout, userStatus } from '../features/user/user';
import axios from 'axios';
import { chefLogout } from '../features/chef/chef';

function LogoutModal() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const dispatch = useDispatch();
  const userInfo = useSelector(userStatus);
  // const modalState = useSelector(modalStatus);
  // console.log('LogoutModal에서 modalStatus: ', modalState);

  const clickOk = async () => {
    try {
      let result = await axios.get(`${url}/user/logout`, {
        headers: { authorization: `Bearer ${userInfo.accessToken}}` },
      });
      if (result.data.message === 'ok') {
        if (userInfo.isChef) {
          // 셰프라면 셰프정보도 없애주기
          dispatch(chefLogout());
        }
        dispatch(logout());
        dispatch(closeLogoutModal());
        window.location.replace('/');
      }
    } catch (err) {
      console.log(err.message);
      if (err.message === 'Network Error') {
        dispatch(closeLogoutModal()); // 로그아웃 모달 닫기\
        dispatch(openServerErrorModal()); // 서버 에러 모달 열기
      } else if (err.response.data.message === 'Send new login request') {
        dispatch(closeLogoutModal()); // 로그아웃 모달 닫기
        dispatch(openIsNeedReLoginModal()); // 재로그인 필요하다는 모달 띄우기
      }
    }
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
