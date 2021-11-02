import styled from 'styled-components';

export const LoginFormWrap = styled.article`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > #loginForm {
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0 50px;
      height: 100%;
      text-align: center;
      > input {
        background-color: #eee;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
      }
      > button {
        border-radius: 5px;
        background-color: #603224;
        border: none;
        outline: none;
        color: #ffffff;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
      }
    }
  }
`;
