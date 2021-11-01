import Login from '../component/login';
import Signup from '../component/signup';
import { useState } from 'react';
import {
  LoginOrSignupGrid,
  LoginOrSignupOverlayWrap,
  LoginOrSignupContainer,
} from '../styled/styleLoginOrSignup';

function LoginOrSignup() {
  const [loginOrSignupComp, setloginOrSignupComp] = useState(false);
  const changeloginOrSignupComp = () => {
    setloginOrSignupComp(!loginOrSignupComp);
  }; // menuList에서 몇번째 내용이 보여져야 할지 지정해주는 함수

  return (
    <LoginOrSignupGrid>
      <LoginOrSignupContainer className={!loginOrSignupComp ? null : 'active'}>
        <div id='signupContainer' className='formContainer'>
          <Signup />
        </div>
        <div id='loginContainer' className='formContainer'>
          <Login />
        </div>

        <LoginOrSignupOverlayWrap
          className={!loginOrSignupComp ? null : 'active'}
        >
          <div id='loginOrSignupOverlay'>
            <div className='overlayPanel' id='overlayLeft'>
              <h2>회원가입</h2>
              <p>더 많은 서비스를 즐겨보세요.</p>
              <button onClick={changeloginOrSignupComp}>회원가입 하기</button>
            </div>
            <div className='overlayPanel' id='overlayRight'>
              <h2>로그인</h2>
              <p>Welcome back!</p>
              <button onClick={changeloginOrSignupComp}>로그인 하기</button>
            </div>
          </div>
        </LoginOrSignupOverlayWrap>
      </LoginOrSignupContainer>
    </LoginOrSignupGrid>
  );
}

export default LoginOrSignup;
