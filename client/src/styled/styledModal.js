import styled from 'styled-components';

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 60%;
  }
  > span {
    width: 200px;
    margin: 0 auto;
    font-size: 25px;
    height: 80px;
    line-height: 80px;
    border-bottom: 2px solid #dbb89a;
    color: #603224;
    @media screen and (max-width: 767px) {
      width: 45%;
      font-size: 18px;
    }
    @media screen and (max-width: 420px) {
      font-size: 15px;
    }
  }
  > #loginDesc {
    height: 130px;
    line-height: 30px;
    color: #603224;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 420px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
  > #confirmBtn {
    line-height: 24px;
    outline: none;
    > button {
      background-color: #dbb89a;
      border-radius: 5px;
      border: none;
      color: #fff;
      cursor: pointer;
      padding: 12px 40px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      @media screen and (max-width: 420px) {
        padding: 8px 20px;
        font-size: 12px;
      }
    }
  }
`;
