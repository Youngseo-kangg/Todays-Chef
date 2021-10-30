import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, userStatus } from '../features/user/user';

function Login() {
  const [loginState, setLoginState] = useState({
    username: '',
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
    <div>
      <form>
        <input type='text' onChange={handleInputValue('username')} />
        <input type='password' onChange={handleInputValue('password')} />
        <input type='text' onChange={handleInputValue('email')} />
      </form>
      <button onClick={() => dispatch(login(loginState))}>CLICK</button>
    </div>
  );
}

export default Login;
