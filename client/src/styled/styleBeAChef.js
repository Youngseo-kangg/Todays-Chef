import styled from 'styled-components';
import beAChefBackground from '../todaysChefIMG/beAChefBackground.jpg';

export const BeAChefGrid = styled.article`
  width: 100%;
  padding: 80px 0px 50px;
  display: grid;
  grid-template-rows: 550px 550px 300px;
  grid-row-gap: 50px;
  > section {
    border: 1px solid red;
  }
  @media (max-width: 767px) {
    > section {
      border: 1px solid blue;
    }
  }
`;

export const BeAChefIntro = styled.section`
  background: url(${beAChefBackground}) center bottom;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 420px) {
    padding: 10px;
  }
  #beChefSlogan {
    width: 50%;
    height: 300px;
    background: rgba(255, 255, 255, 0.5);
    display: grid;
    place-items: center;
    @media (max-width: 420px) {
      width: 100%;
    }
  }
  #beChefSloganText {
    word-break: keep-all;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 23px;
      padding-bottom: 15px;
    }
    p:nth-child(1) {
      font-size: 18px;
      padding-bottom: 10px;
    }
  }
`;
export const BeAChefDesc = styled.section``;
export const BeAChefResumeWrap = styled.section``;
