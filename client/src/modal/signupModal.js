import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useState } from 'react';

function SignupModal({ setIsSignUpModalOpen }) {
  const clickOk = () => {
    setIsSignUpModalOpen(false);
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
