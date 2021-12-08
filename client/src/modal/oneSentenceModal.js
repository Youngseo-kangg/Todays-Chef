import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useDispatch, useSelector } from 'react-redux';
import { closeFailModal, modalStatus } from '../features/user/modal';

function OneSentenceModal() {
  const modalState = useSelector(modalStatus);
  const dispatch = useDispatch();
  const returnToFindChef = () => {
    dispatch(closeFailModal());
    window.location.replace('/findChef');
  };
  const returnToMypage = () => {
    dispatch(closeFailModal());
  };

  const relocation = () => {
    if (window.location.href.includes('/mypage')) {
      return returnToMypage();
    } else if (window.location.href.includes('/findChef')) {
      return returnToFindChef();
    } else if (window.location.href.includes('/reservation')) {
      return returnToFindChef();
    }
  };

  return (
    <>
      <ModalBackground>
        <ModalBox>
          <span>실패</span>
          <div id='loginDesc'>
            <p>{modalState.failMessage}</p>
          </div>
          <div id='confirmBtn'>
            <button onClick={relocation}>확인</button>
          </div>
        </ModalBox>
      </ModalBackground>
    </>
  );
}

export default OneSentenceModal;
