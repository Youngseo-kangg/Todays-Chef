import styled from 'styled-components';

export const LoginFormWrap = styled.article`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 420px) {
    background-color: rgba(255, 255, 255, 0.7);
  }
  > #loginForm {
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
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
        min-width: 100px;
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
        margin: 10px 0px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
      }
    }
  }
  > .formDivider {
    width: 80%;
    height: 3px;
    background-color: #dbb89a;
    border-radius: 3px;
    margin: 30px 0px;
  }
  > #socialLogin {
    display: flex;
    flex-direction: column;
    color: #603224;
    > p {
      word-break: keep-all;
      padding: 0px 5px 15px;
    }
    > ul {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      > li {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        display: grid;
        place-items: center;
        background-color: #eee;
        cursor: pointer;
        transition: all 0.6s;
        :nth-child(1):hover {
          background-color: #fee500;
        }
        :nth-child(2):hover {
          /* background: linear-gradient(45deg, #4285f4, #4285f4 100%),
            linear-gradient(135deg, #db4437, #db4437),
            linear-gradient(225deg, #f4b400, #f4b400),
            linear-gradient(225deg, #0f9d58, #0f9d58);
          background-size: 50% 50%;
          background-position: 0% 0%, 0% 100%, 100% 0%, 100% 100%;
          background-repeat: no-repeat; */
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
`;
