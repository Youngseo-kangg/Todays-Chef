import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginErrorModal, openLoginModal } from '../features/user/modal';
import { login } from '../features/user/user';
import { LoginFormWrap } from '../styled/styledLogin';
import { useForm } from 'react-hook-form';

require('dotenv').config();
axios.defaults.withCredentials = true;

// function Login({ setIsLoginModalOpen }) {
function Login() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      loginEmail: '',
      loginPassword: '',
    },
  });

  const [isErrorLogin, setIsErrorLogin] = useState(false);
  // console.log('Login의 watch: ', watch()); // target들 확인
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    // console.log('onSubmit: ', data);
    try {
      let loginResult = await axios.post(`${url}/user/login`, {
        email: data.loginEmail,
        password: data.loginPassword,
      });
      console.log('login 완료', loginResult.data.message);

      if (loginResult.data.message === 'ok') {
        console.log('login 완료', loginResult);
        dispatch(
          login({
            ...loginResult.data.userInfo,
            accessToken: loginResult.data.accessToken,
          })
        );
        // setIsLoginModalOpen(true);
        dispatch(openLoginModal());
      }
    } catch (err) {
      console.log(err.response.data.message);
      if (err.response.data.message === 'Invalid User') {
        // alert('로그인에 실패하였습니다.');
        // setIsErrorLogin(true);
        dispatch(openLoginErrorModal());
      }
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  const redirect_uri =
    process.env.REACT_APP_REDIRECT_URI || `http://localhost:3000`;

  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=code`;

  const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=code&scope=profile email&access_type=offline`;

  const handleKakaoLogin = () => {
    localStorage.setItem('socialType', 'kakao');
    window.location.assign(KAKAO_LOGIN_URL);
  };

  const handleGoogleLogin = () => {
    localStorage.setItem('socialType', 'google');
    window.location.assign(GOOGLE_LOGIN_URL);
  };

  // console.log('loginState: ', loginState);
  // const userInfo = useSelector(userStatus);
  // console.log('redux store 값: ', userInfo);

  return (
    <LoginFormWrap>
      <div id='loginForm'>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <input
            type='text'
            placeholder='이메일'
            name='loginEmail'
            id='loginEmail'
            {...register('loginEmail', {
              required: '이메일 입력이 필요합니다.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: '유효하지 않은 이메일 형식입니다.',
              },
            })}
          />
          {errors.loginEmail && (
            <span className='loginError'>{errors.loginEmail.message}</span>
          )}
          <input
            type='password'
            placeholder='비밀번호'
            name='loginPassword'
            id='loginPassword'
            {...register('loginPassword', {
              required: '비밀번호 입력이 필요합니다.',
            })}
          />
          {errors.loginPassword && (
            <span className='loginError'>{errors.loginPassword.message}</span>
          )}
          <button type='submit'>로그인</button>
        </form>
      </div>
      <div className='axiosErrorMessage'>
        {/* axios 하고 나서 뜨는 에러 메세지 나타내기 */}
        {isErrorLogin ? (
          <span className='loginError'>로그인에 실패하였습니다.</span>
        ) : null}
      </div>
      <div className='formDivider'></div>
      <div id='socialLogin'>
        <p>간편 로그인/회원가입</p>
        <ul>
          <li onClick={handleKakaoLogin}>
            <FontAwesomeIcon icon={faComment} />
          </li>
          <li onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={faGoogle} />
          </li>
        </ul>
      </div>
    </LoginFormWrap>
  );
}

export default Login;
