import axios from 'axios';
import { SignupFormWrap } from '../styled/styledSignup';
import { useForm } from 'react-hook-form';

require('dotenv').config();
axios.defaults.withCredentials = true;

function Signup() {
  // const [signupState, setSignupState] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });
  // const handleSignupInputValue = (key) => (e) => {
  //   setSignupState({ ...signupState, [key]: e.target.value });
  // };
  // const dispatch = useDispatch();
  // console.log('loginState: ', loginState);
  // const userInfo = useSelector(userStatus);
  // console.log('redux store 값: ', userInfo);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = (data) => {
    console.log('onSubmit: ', data);
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
                value: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,6}/i,
                message: '한글만 가능하며, 2자 이상 6자 이내여야 합니다.',
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
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/,
                message:
                  '대문자, 특수문자, 숫자를 포함하여 8자 이상이여야 합니다.',
              },
            })}
          />
          {errors.signupPassword && (
            <span className='loginError'>{errors.signupPassword.message}</span>
          )}
          <button>회원가입</button>
        </form>
      </div>
      <div className='axiosErrorMessage'>
        {/* axios 하고 나서 뜨는 에러 메세지 나타내기 */}
      </div>
      <div className='formDivider'></div>
      <p id='socialSignup'>
        간편 로그인 / 회원가입은 로그인 탭에서 가능합니다.
      </p>
    </SignupFormWrap>
  );
}

export default Signup;
