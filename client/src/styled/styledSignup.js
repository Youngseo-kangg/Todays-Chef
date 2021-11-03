import styled from 'styled-components';

export const SignupFormWrap = styled.article`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 420px) {
    background-color: rgba(255, 255, 255, 0.3);
  }
  > #signupForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    > h3 {
      width: 100%;
      font-size: 20px;
      padding-bottom: 10px;
      color: #603224;
    }
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      width: 60%;
      min-width: 130px;
      > input {
        background-color: #eee;
        border: none;
        outline: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
        box-sizing: border-box;
      }
      > .loginError {
        color: red;
        font-size: 12px;
        word-break: keep-all;
      }
      > button {
        border-radius: 5px;
        background-color: #dbb89a;
        border: none;
        outline: none;
        color: #ffffff;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        padding: 12px 30px;
        margin: 10px 0;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }
    }
  }
  > .axiosErrorMessage {
    width: 100%;
    height: 12px;
    font-size: 12px;
    color: red;
  }
  > .formDivider {
    width: 80%;
    height: 3px;
    background-color: #dbb89a;
    border-radius: 3px;
    margin: 18px 0px 30px;
  }
  > #socialSignup {
    word-break: keep-all;
    color: #603224;
  }
`;
