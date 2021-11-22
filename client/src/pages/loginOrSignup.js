import Login from '../component/login';
import LoginModal from '../modal/loginModal';
import SignupModal from '../modal/signupModal';
import LoginErrorModal from '../modal/loginErrorModal';
import Signup from '../component/signup';

import { modalStatus } from '../features/user/modal';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import { throttle } from 'lodash';
import {
  LoginOrSignupGrid,
  LoginOrSignupOverlayWrap,
  LoginOrSignupContainer,
  LoginOrSignupSmallContainer,
} from '../styled/styleLoginOrSignup';

function LoginOrSignup() {
  const modalState = useSelector(modalStatus);
  console.log('App.js에서 modalStatus: ', modalState);

  const [loginOrSignupComp, setloginOrSignupComp] = useState(false); // 큰 창에서 animation 구현
  const [smallComp, setSmallComp] = useState(false); // 작은 창인지 확인
  const [smallCompPart, setSmallCompPart] = useState(false); // 작은 창에서 뭘 보여줄지 결정
  const changeloginOrSignupComp = () => {
    setloginOrSignupComp(!loginOrSignupComp);
  }; // menuList에서 몇번째 내용이 보여져야 할지 지정해주는 함수
  // const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false); // 회원가입 모달창 상태

  // useEffect(() => {
  //   if (window.innerWidth < 421) {
  //     setSmallComp(true);
  //   } else {
  //     setSmallComp(false);
  //   }
  // }, []);

  const initialHandleSmallComp = () => {
    if (window.innerWidth < 421) {
      setSmallComp(true);
    } else {
      setSmallComp(false);
    }
  };

  const handleSmallComp = useMemo(
    () =>
      throttle(() => {
        if (window.innerWidth < 421) {
          setSmallComp(true);
        } else {
          setSmallComp(false);
        }
      }, 300),
    []
  );

  useEffect(() => {
    window.addEventListener('onload', initialHandleSmallComp);
    window.addEventListener('resize', handleSmallComp);
    return () => {
      window.removeEventListener('onload', initialHandleSmallComp);
      window.removeEventListener('resize', handleSmallComp);
    };
  }, [handleSmallComp]);

  return (
    <>
      {modalState.isLoginModalOpen ? (
        // <LoginModal setIsLoginModalOpen={setIsLoginModalOpen} />
        <LoginModal />
      ) : null}
      {modalState.isLoginErrorModalOpen ? (
        // <LoginErrorModal
        //   setIsLoginErrorModalOpen={setIsLoginErrorModalOpen}
        //   setIsServerError={setIsServerError}
        //   isServerError={isServerError}
        // />
        <LoginErrorModal />
      ) : null}
      {modalState.isSignUpModalOpen ? (
        // <SignupModal setIsSignUpModalOpen={setIsSignUpModalOpen} />
        <SignupModal />
      ) : null}
      <LoginOrSignupGrid>
        {smallComp ? (
          <LoginOrSignupSmallContainer>
            <ul>
              <li
                className={!smallCompPart ? 'tabFocused' : null}
                onClick={() => setSmallCompPart(false)}
              >
                <p>Login</p>
              </li>
              <li
                className={!smallCompPart ? null : 'tabFocused'}
                onClick={() => setSmallCompPart(true)}
              >
                <p>Signup</p>
              </li>
            </ul>
            {!smallCompPart ? (
              <div id='loginSmallContainer' className='formSmallContainer'>
                {/* <Login setIsLoginModalOpen={setIsLoginModalOpen} /> */}
                <Login />
              </div>
            ) : (
              <div id='signupSmallContainer' className='formSmallContainer'>
                <Signup />
              </div>
            )}
          </LoginOrSignupSmallContainer>
        ) : (
          <LoginOrSignupContainer
            className={!loginOrSignupComp ? null : 'active'}
          >
            <div id='signupContainer' className='formContainer'>
              {/* <Signup setIsSignUpModalOpen={setIsSignUpModalOpen} /> */}
              <Signup />
            </div>
            <div id='loginContainer' className='formContainer'>
              {/* <Login setIsLoginModalOpen={setIsLoginModalOpen} /> */}
              <Login />
            </div>

            <LoginOrSignupOverlayWrap
              className={!loginOrSignupComp ? null : 'active'}
            >
              <div id='loginOrSignupOverlay'>
                <div className='overlayPanel' id='overlayLeft'>
                  <h2>회원가입</h2>
                  <p>더 많은 서비스를 즐겨보세요.</p>
                  <button onClick={changeloginOrSignupComp}>
                    회원가입 하기
                  </button>
                </div>
                <div className='overlayPanel' id='overlayRight'>
                  <h2>로그인</h2>
                  <p>Welcome back!</p>
                  <button onClick={changeloginOrSignupComp}>로그인 하기</button>
                </div>
              </div>
            </LoginOrSignupOverlayWrap>
          </LoginOrSignupContainer>
        )}
      </LoginOrSignupGrid>
    </>
  );
}

export default LoginOrSignup;
