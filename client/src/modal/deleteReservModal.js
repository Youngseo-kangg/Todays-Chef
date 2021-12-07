import { ModalBackground, LogoutModalBox } from '../styled/styledModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  openServerErrorModal,
  closeIsDeleteReservModal,
  modalStatus,
} from '../features/user/modal';
import { deleteReservation } from '../features/reservation/reservation';
import { userStatus, updateAccessToken } from '../features/user/user';
import axios from 'axios';

function DeleteReservModal() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const dispatch = useDispatch();
  const userState = useSelector(userStatus);
  const modalState = useSelector(modalStatus);

  const clickOk = async () => {
    try {
      let result = await axios.post(
        `${url}/mypage/reservation/user?id=${userState.userId}`,
        {
          id: modalState.isDeleteReservModalOpen,
          // TODO: 서버쪽에서 이거 받고 결제 취소 해주기
          merchant_uid: modalState.merchant_uid,
        },
        {
          headers: { authorization: `bearer ${userState.accessToken}` },
        }
      ); // 서버에 요청
      console.log(result);
      if (result.data.accessToken) {
        dispatch(updateAccessToken({ accessToken: result.data.accessToken }));
      }
      dispatch(deleteReservation({ id: modalState.isDeleteReservModalOpen })); // redux에 보내주기
      dispatch(closeIsDeleteReservModal()); // 모달 끄기
    } catch (err) {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch(closeIsDeleteReservModal()); // 예약 취소 모달 끄기
        dispatch(openServerErrorModal()); // 서버 에러 모달 켜주기
      }
    }
  };

  const clickCancel = () => {
    // setIsLogout(false);
    dispatch(closeIsDeleteReservModal()); // 예약 취소 모달 끄기
  };

  return (
    <>
      <ModalBackground>
        <LogoutModalBox>
          <span>예약 취소</span>
          <div id='logoutDesc'>
            <p>정말로 예약을 취소하시는 건가요?</p>
          </div>
          <div id='confirmBtn'>
            <button onClick={clickOk}>확인</button>
            <button onClick={clickCancel}>취소</button>
          </div>
        </LogoutModalBox>
      </ModalBackground>
    </>
  );
}

export default DeleteReservModal;
