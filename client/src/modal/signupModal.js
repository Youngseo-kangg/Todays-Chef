import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useDispatch } from 'react-redux';
import { closeSignUpModal } from '../features/user/modal';
import { useState } from 'react';

// function SignupModal({ setIsSignUpModalOpen }) {
function SignupModal() {
  const dispatch = useDispatch();
  const clickOk = () => {
    // setIsSignUpModalOpen(false);
    dispatch(closeSignUpModal());
    window.location.replace('/loginOrSignup');
  };

  return (
    <>
      <ModalBackground>
        <ModalBox>
          <span>회원가입 완료</span>
          <div id='loginDesc'>
            <p>
              가입을 진심으로 축하드립니다!
              <br />
              미식가님을 기다리고 있었어요!
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

export default SignupModal;
