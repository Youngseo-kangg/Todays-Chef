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
  > h1 {
    width: 100%;
    height: 150px;
    line-height: 100px;
    font-size: 40px;
    color: #fff;
  }
  > h2 {
    height: 250px;
    font-size: 25px;
    color: #fff;
    line-height: 50px;
  }
`;
