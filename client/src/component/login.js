import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { login, userStatus } from '../features/user/user';
import { LoginFormWrap } from '../styled/styledLogin';

function Login() {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });
  const handleInputValue = (key) => (e) => {
    setLoginState({ ...loginState, [key]: e.target.value });
  };
  const dispatch = useDispatch();
  console.log('loginState: ', loginState);
  const userInfo = useSelector(userStatus);
  console.log('redux store 값: ', userInfo);

  return (
    <LoginFormWrap>
      <div id='loginForm'>
        <h3>Login</h3>
        <form>
          <input
            type='text'
            placeholder='이메일'
            onChange={handleInputValue('email')}
          />
          <input
            type='password'
            placeholder='비밀번호'
            onChange={handleInputValue('password')}
          />
        </form>
        <button onClick={() => dispatch(login(loginState))}>CLICK</button>
      </div>
      <div className='formDivider'></div>
      <div id='socialLogin'>
        <p>간편 로그인/회원가입</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faComment} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGoogle} />
          </li>
        </ul>
      </div>
    </LoginFormWrap>
  );
}

export default Login;
