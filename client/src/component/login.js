import { useState } from 'react';
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
            type='password'
            placeholder='비밀번호'
            onChange={handleInputValue('password')}
          />
          <input
            type='text'
            placeholder='이메일'
            onChange={handleInputValue('email')}
          />
          <button onClick={() => dispatch(login(loginState))}>CLICK</button>
        </form>
      </div>
    </LoginFormWrap>
  );
}

export default Login;
