import styled, { keyframes } from 'styled-components';
import basic_background from '../todaysChefIMG/basic_background.jpg';

const show = keyframes`
	0%, 49.99% {
		opacity: 0;
	}
	
	50%, 100% {
		opacity: 1;
	}
`;

export const LoginOrSignupGrid = styled.div`
  height: 800px;
  padding: 160px 0px 50px;
  display: flex;
  position: relative;
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
    background-color: rgba(255, 255, 255, 0.3);
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
      border: 2px solid #000;
      outline: none;
      background-color: transparent;
      color: #000;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      padding: 12px 45px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 0.6s ease-in;
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
    > h2 {
      font-size: 20px;
      padding-bottom: 15px;
    }
    > p {
      padding-bottom: 10px;
    }
    > button {
      border-radius: 5px;
      border: 2px solid #000;
      outline: none;
      background-color: transparent;
      color: #000;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      margin: 10px 0;
      padding: 12px 30px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 0.6s ease-in;
    }
  }
`;
