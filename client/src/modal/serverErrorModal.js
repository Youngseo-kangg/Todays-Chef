import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  setServerErrorFalse,
  closeServerErrorModal,
  modalStatus,
} from '../features/user/modal';

// function LoginErrorModal({ setIsLoginErrorModalOpen, isServerError }) {
function ServerErrorModal() {
  const modalState = useSelector(modalStatus);
  const dispatch = useDispatch();
  const clickOk = () => {
    dispatch(closeServerErrorModal());
    window.location.replace('/');
  };

  return (
    <>
      <ModalBackground>
        <ModalBox>
          <span>서버 실패</span>
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

export default ServerErrorModal;
