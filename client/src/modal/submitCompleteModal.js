import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useDispatch } from 'react-redux';
import { closeIsSubmitCompleteModal } from '../features/user/modal';

// function LoginModal({ setIsLoginModalOpen }) {
function SubmitCompleteModal() {
  const dispatch = useDispatch();
  const clickOk = () => {
    dispatch(closeIsSubmitCompleteModal());
  };

  return (
    <>
      <ModalBackground>
        <ModalBox>
          <span>제출 완료</span>
          <div id='loginDesc'>
            <p>
              제출이 완료되었습니다. <br />
              72시간 이내에 결과를 안내해 드리겠습니다.
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

export default SubmitCompleteModal;
