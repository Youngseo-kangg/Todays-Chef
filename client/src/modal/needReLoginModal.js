import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useDispatch } from 'react-redux';
import { logout } from '../features/user/user';
import { closeIsNeedReLoginModal } from '../features/user/modal';

function NeedReLoginModal() {
  const dispatch = useDispatch();
  const clickOk = () => {
    dispatch(closeIsNeedReLoginModal()); // 모달 끄기
    dispatch(logout()); // 로그아웃 처리
    window.location.replace('/');
  };

  return (
    <>
      <ModalBackground>
        <ModalBox>
          <span>재로그인 필요</span>
          <div id='loginDesc'>
            <p>로그인 후 이용이 가능합니다.</p>
          </div>
          <div id='confirmBtn'>
            <button onClick={clickOk}>확인</button>
          </div>
        </ModalBox>
      </ModalBackground>
    </>
  );
}

export default NeedReLoginModal;
