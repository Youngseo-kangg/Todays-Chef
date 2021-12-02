import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useDispatch, useSelector } from 'react-redux';
import { closeSuccessModal, modalStatus } from '../features/user/modal';

function OneSentenceSuccessModal() {
  const modalState = useSelector(modalStatus);
  const dispatch = useDispatch();
  const returnToFindChef = () => {
    dispatch(closeSuccessModal());
    window.location.replace('/findChef');
  };
  const returnToMypage = () => {
    dispatch(closeSuccessModal());
  };

  const relocation = () => {
    if (window.location.href.includes('/mypage')) {
      return returnToMypage();
    } else if (window.location.href.includes('/findChef')) {
      return returnToFindChef();
    }
  };

  return (
    <>
      <ModalBackground>
        <ModalBox>
          <span>완료</span>
          <div id='loginDesc'>
            <p>{modalState.successMessage}</p>
          </div>
          <div id='confirmBtn'>
            <button onClick={relocation}>확인</button>
          </div>
        </ModalBox>
      </ModalBackground>
    </>
  );
}

export default OneSentenceSuccessModal;
