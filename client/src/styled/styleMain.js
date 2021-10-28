import styled from 'styled-components';
import '../App.css';

export const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 100vh 600px 600px;
  row-gap: 50px;
  margin-bottom: 50px;
`;

export const MainBackgroundWrap = styled.div`
  height: 100vh;
  margin-top: -200px;
  @media only screen and (max-width: 1080px) {
    margin-top: 0;
  }
`;

export const MainBackground = styled.video`
  width: 100%;
`;

export const SloganWrap = styled.div`
  width: 800px;
  height: 400px;
  position: relative;
  top: -65%;
  left: 50%;
  /* background-color: rgb(255, 255, 255, 0.3); */
  transform: translate(-50%);
  border-radius: 20px;
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
