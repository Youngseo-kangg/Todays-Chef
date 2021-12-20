import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useDispatch } from 'react-redux';
import { closeServerErrorModal } from '../features/user/modal';

function ServerErrorModal() {
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
