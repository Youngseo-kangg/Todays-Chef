import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {
  openLoginErrorModal,
  openServerErrorModal,
  openLoginModal,
} from '../features/user/modal';
import { getReservation } from '../features/reservation/reservation';
import { login } from '../features/user/user';
import { LoginFormWrap } from '../styled/styledLogin';
import { useForm } from 'react-hook-form';
import { chefLogin } from '../features/chef/chef';

require('dotenv').config();
axios.defaults.withCredentials = true;

// function Login({ setIsLoginModalOpen }) {
function Login() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      loginEmail: '',
      loginPassword: '',
    },
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      let loginResult = await axios.post(`${url}/user/login`, {
        email: data.loginEmail,
        password: data.loginPassword,
      });
      if (loginResult.data.message === 'ok') {
        if (loginResult.data.userInfo.chefId) {
          // 셰프라면
          dispatch(chefLogin({ chefId: loginResult.data.userInfo.chefId }));
        }
        // 예약내역이 있다면
        if (loginResult.data.reservInfo) {
          dispatch(
            getReservation({ reservationData: loginResult.data.reservInfo })
          );
        }
        dispatch(
          login({
            ...loginResult.data.userInfo,
            accessToken: loginResult.data.accessToken,
          })
        );
        dispatch(openLoginModal());
      }
    } catch (err) {
      if (err.message === 'Network Error') {
        dispatch(openServerErrorModal());
      } else if (err.response.data.message === 'Invalid User') {
        dispatch(openLoginErrorModal());
      } else if (err.response.data.message === 'You Already Signed up') {
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
