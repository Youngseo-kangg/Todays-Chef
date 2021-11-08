import styled from 'styled-components';
import basic_background from '../todaysChefIMG/basic_background.jpg';
import small_basic_background from '../todaysChefIMG/small_basic_background.jpg';

export const LoginOrSignupGrid = styled.div`
  height: 800px;
  background-color: #dbb89a;
  padding: 160px 0px 50px;
  display: flex;
  position: relative;
  @media screen and (max-width: 420px) {
    padding: 80px 0px 50px;
    height: 700px;
  }
`;

export const LoginOrSignupSmallContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${small_basic_background}) center;
  > ul {
    width: 100%;
    height: 60px;
    display: flex;
    color: #603224;
    > li {
      width: 50%;
      display: grid;
      place-items: center;
      &.tabFocused {
        background-color: rgba(255, 255, 255, 0.3);
        p {
          padding-bottom: 5px;
          border-bottom: 2px solid #dbb89a;
        }
      }
      > p {
        padding: 5px;
      }
    }
  }
  #loginSmallContainer {
    height: calc(100% - 60px);
  }
  #signupSmallContainer {
    height: calc(100% - 60px);
  }
`;

export const LoginOrSignupContainer = styled.div`
  background-color: red;
  display: flex;
  width: 100%;
  max-width: 1400px;
  position: relative;
  margin: 0 auto;
  > .formContainer {
    position: absolute;
    height: 100%;
    transition: all 0.6s ease-in-out;
    width: 50%;
  }
  #signupContainer {
    opacity: 0;
    z-index: 0;
    left: 0;
  }
  &.active #signupContainer {
    opacity: 1;
    z-index: 5;
    transform: translateX(100%);
    left: -50%;
  }
  #loginContainer {
    opacity: 1;
    z-index: 5;
    left: 50%;
  }
  &.active #loginContainer {
    opacity: 0;
    z-index: 0;
    transform: translateX(-100%);
    left: 0;
  }
`;

export const LoginOrSignupOverlayWrap = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: purple;
  > #loginOrSignupOverlay {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${basic_background});
    background-position: center;
    position: relative;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }
  .overlayPanel {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    word-break: keep-all;
  }
  #overlayLeft {
    opacity: 1;
    z-index: 5;
    right: 50%;
    background-color: rgba(255, 255, 255, 0.4);
    color: #603224;
    /* transition: all 0.6s;
    :hover {
      background-color: rgba(255, 255, 255, 0.3);
    } */
    > h2 {
      font-size: 20px;
      padding-bottom: 15px;
    }
    > p {
      padding-bottom: 10px;
    }
    > button {
      border-radius: 5px;
      outline: none;
      border: none;
      background-color: #fff;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      margin: 10px 0;
      padding: 12px 30px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: all 0.3s;
      color: #603224;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  }
  &.active #overlayLeft {
    opacity: 0;
    z-index: 0;
    background-color: transparent;
    transform: translateX(20%);
  }
  #overlayRight {
    opacity: 0;
    z-index: 0;
    background-color: transparent;
    right: 20%;
  }
  &.active #overlayRight {
    opacity: 1;
    z-index: 5;
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateX(40%);
    color: #603224;
    > h2 {
      font-size: 20px;
      padding-bottom: 15px;
    }
    > p {
      padding-bottom: 10px;
    }
    > button {
      border-radius: 5px;
      border: none;
      background-color: #fff;
      outline: none;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      margin: 10px 0;
      padding: 12px 30px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: all 0.3s;
      color: #603224;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  }
`;
