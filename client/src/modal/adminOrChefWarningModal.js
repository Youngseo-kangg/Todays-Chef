import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useDispatch, useSelector } from 'react-redux';
import { closeIsAdminOrChefWarningModal } from '../features/user/modal';

function AdminOrChefWarningModal() {
  const dispatch = useDispatch();
  const clickOk = () => {
    dispatch(closeIsAdminOrChefWarningModal());
    window.location.replace('/findChef');
  };

  return (
    <>
      <ModalBackground>
        <ModalBox>
          <span>예약 불가</span>
          <div id='loginDesc'>
            <p>
              관리자 또는 셰프는 <br />
              예약할 수 없습니다.
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

export default AdminOrChefWarningModal;
