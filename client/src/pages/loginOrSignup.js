import styled from 'styled-components';
import Login from '../component/login';

const LoginOrSignupGrid = styled.div`
  height: 800px;
  padding: 80px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 50px;
  margin-bottom: 50px;
`;

function LoginOrSignup() {
  return (
    <LoginOrSignupGrid>
      <p>this is LoginOrSignup</p>
      <Login />
    </LoginOrSignupGrid>
  );
}

export default LoginOrSignup;
