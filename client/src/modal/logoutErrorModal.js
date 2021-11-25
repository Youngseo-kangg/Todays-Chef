import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  setServerErrorFalse,
  closeLogoutErrorModal,
  modalStatus,
} from '../features/user/modal';

// function LoginErrorModal({ setIsLoginErrorModalOpen, isServerError }) {
function LoginErrorModal() {
  const modalState = useSelector(modalStatus);
  const dispatch = useDispatch();
  const clickOk = () => {
    if (modalState.isServerError) {
      dispatch(setServerErrorFalse());
    }
    dispatch(closeLogoutErrorModal());
    window.location.replace('/');
  };

  return (
    <>
      <ModalBackground>
        <ModalBox>
          <span>로그아웃 실패</span>
          <div id='loginDesc'>
            <p>
              죄송합니다. <br />
              잠시 후에 다시 시도해주세요.
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

export default LoginErrorModal;
