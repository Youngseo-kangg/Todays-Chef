import { useState } from 'react';
import { SignupFormWrap } from '../styled/styledSignup';

function Signup() {
  const [signupState, setSignupState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleSignupInputValue = (key) => (e) => {
    setSignupState({ ...signupState, [key]: e.target.value });
  };
  // const dispatch = useDispatch();
  // console.log('loginState: ', loginState);
  // const userInfo = useSelector(userStatus);
  // console.log('redux store 값: ', userInfo);

  return (
    <SignupFormWrap>
      <div id='signupForm'>
        <h3>Signup</h3>
        <form>
          <input
            type='text'
            placeholder='닉네임'
            onChange={handleSignupInputValue('username')}
          />
          <input
            type='password'
            placeholder='비밀번호'
            onChange={handleSignupInputValue('password')}
          />
          <input
            type='text'
            placeholder='이메일'
            onChange={handleSignupInputValue('email')}
          />
          <button>CLICK</button>
        </form>
      </div>
    </SignupFormWrap>
  );
}

export default Signup;
