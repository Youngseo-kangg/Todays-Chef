import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { login, userStatus } from '../features/user/user';
import { LoginFormWrap } from '../styled/styledLogin';
import { useForm } from 'react-hook-form';

function Login() {
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
  console.log('Login의 watch: ', watch()); // target들 확인
  const onSubmit = (data) => {
    console.log('onSubmit: ', data);
  };
  const onError = (error) => {
    console.log(error);
  };

  // const handleInputValue = (key) => (e) => {
  //   setLoginState({ ...loginState, [key]: e.target.value });
  // }; -> react-hook-form의 watch를 썼더니 필요 없어짐

  // const dispatch = useDispatch();
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
              required: true,
              minLength: {
                value: 5,
                message: 'Username must be longer than 5 characters',
              },
            })}
          />
          {errors.loginEmail && <span>5글자 이하입니다.</span>}
          <input
            type='password'
            placeholder='비밀번호'
            name='loginPassword'
            id='loginPassword'
            {...register('loginPassword', {
              required: true,
            })}
            // onChange={handleInputValue('password')}
          />
          {errors.loginPassword && (
            <span className='loginError'>비밀번호를 입력하지 않았습니다.</span>
          )}
          <button type='submit'>로그인</button>
        </form>
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
