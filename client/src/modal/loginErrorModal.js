import { ModalBackground, ModalBox } from '../styled/styledModal';
import { useState } from 'react';

function LoginErrorModal({ setIsLoginErrorModalOpen, isServerError }) {
  const clickOk = () => {
    setIsLoginErrorModalOpen(false);
    window.location.replace('/loginOrSignup');
  };

  return (
    <>
      <ModalBackground>
        <ModalBox>
          <span>로그인 실패</span>
          <div id='loginDesc'>
            {isServerError ? (
              <p>
                죄송합니다. <br />
                다시한번 로그인을 시도해주세요.
              </p>
            ) : (
              <p>
                이미 가입된 회원입니다. <br />
                일반 로그인으로 시도해보세요.
              </p>
            )}
          </div>
          <div id='confirmBtn'>
            <button onClick={clickOk}>확인</button>
          </div>
        </ModalBox>
      </ModalBackground>
    </>
  );
}

export default LoginErrorModal;
