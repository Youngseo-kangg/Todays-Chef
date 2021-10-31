import styled from 'styled-components';
import '../App.css';

export const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 100vh 600px 600px;
  row-gap: 50px;
  margin-bottom: 50px;
`;

export const MainBackgroundWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

export const MainBackground = styled.video`
  width: 100%;
  margin-top: -200px;
  @media (max-width: 2000px) {
    width: 2000px;
    margin-top: -300px;
  }
  @media (max-width: 1400px) {
    width: 1400px;
    margin-top: 0;
  }
  @media (max-width: 767px) {
    width: 1680px;
    margin-top: 0;
    margin-left: -500px;
    height: 100vh;
  }
`;

export const SloganWrap = styled.div`
  width: 800px;
  height: 400px;
  border-radius: 20px;
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translate(-50%);
  @media (max-width: 420px) {
    top: 200px;
  }
  @media (max-width: 320px) {
    top: 150px;
  }
  @media (max-width: 280px) {
    top: 230px;
  }
  > h1 {
    width: 100%;
    height: 150px;
    line-height: 100px;
    font-size: 40px;
    color: #fff;
    @media (max-width: 767px) {
      font-size: 30px;
    }
    @media (max-width: 420px) {
      font-size: 28px;
      height: auto;
    }
    @media (max-width: 320px) {
      font-size: 25px;
    }
    @media (max-width: 280px) {
      font-size: 20px;
      line-height: 70px;
    }
  }
  > h2 {
    height: 250px;
    font-size: 25px;
    color: #fff;
    line-height: 50px;
    @media (max-width: 767px) {
      font-size: 20px;
    }
    @media (max-width: 420px) {
      font-size: 18px;
    }
    @media (max-width: 320px) {
      font-size: 15px;
    }
    @media (max-width: 280px) {
      font-size: 11px;
      line-height: 30px;
    }
  }
`;
