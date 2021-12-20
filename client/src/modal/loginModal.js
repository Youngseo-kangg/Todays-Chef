import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useDispatch } from 'react-redux';
import { closeLoginModal } from '../features/user/modal';

function LoginModal() {
  const dispatch = useDispatch();
  const clickOk = () => {
    dispatch(closeLoginModal());
    window.location.replace('/');
  };

  return (
    <>
      <ModalBackground>
        <ModalBox>
          <span>로그인 완료</span>
          <div id='loginDesc'>
            <p>
              오늘도 멋진 셰프님과 <br />
              환상적인 요리를 만나보세요!
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

export default LoginModal;
