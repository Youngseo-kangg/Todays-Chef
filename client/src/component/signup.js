import axios from 'axios';
import { useState, useRef } from 'react';
import { SignupFormWrap } from '../styled/styledSignup';
import { useForm } from 'react-hook-form';
import { openSignUpModal } from '../features/user/modal';
import { useDispatch } from 'react-redux';

require('dotenv').config();
axios.defaults.withCredentials = true;

// function Signup({ setIsSignUpModalOpen }) {
function Signup() {
  const [isErrorSignup, setIsErrorSignup] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      signupNickname: '',
      signupEmail: '',
      signupPassword: '',
      signupRePassword: '',
    },
  });
  const signupPassword = useRef({});
  signupPassword.current = watch('signupPassword', '');
  const onSubmit = async (data) => {
    // console.log('onSubmit: ', data);
    try {
      const result = await axios.post(`${url}/user/signup`, {
        email: data.signupEmail,
        password: data.signupPassword,
        nickname: data.signupNickname,
      });
      // setIsSignUpModalOpen(true);
      dispatch(openSignUpModal());
    } catch (err) {
      if (err.response.data.message === 'invalid User') {
        setIsErrorSignup(true);
        setErrorMsg('이미 존재하는 사용자 입니다.');
      } else if (err.response.data.message === 'same email') {
        setIsErrorSignup(true);
        setErrorMsg('이미 존재하는 이메일 입니다.');
      }
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <SignupFormWrap>
      <div id='signupForm'>
        <h3>Signup</h3>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <input
            type='text'
            placeholder='이메일'
            name='signupEmail'
            id='signupEmail'
            {...register('signupEmail', {
              required: '이메일 입력이 필요합니다.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: '유효하지 않은 이메일 형식입니다.',
              },
            })}
          />
          {errors.signupEmail && (
            <span className='loginError'>{errors.signupEmail.message}</span>
          )}
          <input
            type='text'
            placeholder='닉네임'
            name='signupNickname'
            id='signupNickname'
            {...register('signupNickname', {
              required: '닉네임 입력이 필요합니다.',
              pattern: {
                value: /^[a-zA-zㄱ-ㅎ가-힣0-9]{2,15}$/,
                message:
                  '한글, 영어, 숫자만 가능하며, 2자 이상 15자 이내여야 합니다.',
              },
            })}
          />
          {errors.signupNickname && (
            <span className='loginError'>{errors.signupNickname.message}</span>
          )}
          <input
            type='password'
            placeholder='비밀번호'
            name='signupPassword'
            id='signupPassword'
            {...register('signupPassword', {
              required: '비밀번호 입력이 필요합니다.',
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
                message:
                  '대문자, 특수문자, 숫자를 포함하여 8자 이상이여야 합니다.',
              },
            })}
          />
          {errors.signupPassword && (
            <span className='loginError'>{errors.signupPassword.message}</span>
          )}
          <input
            type='password'
            placeholder='비밀번호 재입력'
            name='signupRePassword'
            id='signupRePassword'
            {...register('signupRePassword', {
              required: '비밀번호 재입력이 필요합니다.',
              validate: (value) =>
                value === signupPassword.current ||
                '비밀번호가 일치하지 않습니다.',
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  '대문자, 특수문자, 숫자를 포함하여 8자 이상이여야 합니다.',
              },
            })}
          />
          {errors.signupRePassword && (
            <span className='loginError'>
              {errors.signupRePassword.message}
            </span>
          )}
          <button>회원가입</button>
        </form>
      </div>
      <div className='axiosErrorMessage'>
        {/* axios 하고 나서 뜨는 에러 메세지 나타내기 */}

        <span className='loginError'>{errorMsg}</span>
      </div>
      <div className='formDivider'></div>
      <p id='socialSignup'>
        간편 로그인 / 회원가입은 로그인 탭에서 가능합니다.
      </p>
    </SignupFormWrap>
  );
}

export default Signup;
