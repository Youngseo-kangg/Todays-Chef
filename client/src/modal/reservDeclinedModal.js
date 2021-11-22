import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useDispatch } from 'react-redux';
import { closeReservDeclinedModalOpen } from '../features/user/modal';
import { useState } from 'react';

// function LoginModal({ setIsLoginModalOpen }) {
function ReservDeclinedModal() {
  const dispatch = useDispatch();
  const clickOk = () => {
    dispatch(closeReservDeclinedModalOpen());
    window.location.replace('/findChef');
  };

  return (
    <>
      <ModalBackground>
        <ModalBox>
          <span>로그인 필요</span>
          <div id='loginDesc'>
            <p>로그인 후 예약이 가능합니다.</p>
          </div>
          <div id='confirmBtn'>
            <button onClick={clickOk}>확인</button>
          </div>
        </ModalBox>
      </ModalBackground>
    </>
  );
}

export default ReservDeclinedModal;
