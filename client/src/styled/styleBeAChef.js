import styled from 'styled-components';
import beAChefBackground from '../todaysChefIMG/beAChefBackground.jpg';
import beAChefDesc1 from '../todaysChefIMG/beAChefDesc1.jpg';
import beAChefDesc2 from '../todaysChefIMG/beAChefDesc2.jpg';
import beAChefDesc3 from '../todaysChefIMG/beAChefDesc3.jpg';

export const BeAChefGrid = styled.article`
  width: 100%;
  padding-bottom: 50px;
  display: grid;
  grid-template-rows: 630px 480px 300px;
  grid-row-gap: 50px;
  min-width: 280px;
  > section {
    /* border: 1px solid red; */
  }
  @media (max-width: 767px) {
    > section {
      /* border: 1px solid blue; */
    }
    grid-template-rows: 630px 1342px 320px;
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
      padding: 7.5px 0px;
    }
    p {
      font-size: 18px;
      padding: 5px 0px;
    }
  }
`;

export const BeAChefDesc = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: 34px 426px;
  grid-row-gap: 20px;
  #beChefDescTitleWrap {
    width: 50%;
    border-bottom: 2px solid #603224;
    h3 {
      font-size: 23px;
      display: grid;
      place-items: center start;
      word-break: keep-all;
    }
  }
  #beChefDescWrap {
    display: grid;
    place-items: center;
    #beChefDesc {
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .beChefDescText {
        width: 30%;
        min-width: 225px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        :nth-child(1) {
          background: url(${beAChefDesc1}) no-repeat center;
        }
        :nth-child(2) {
          background: url(${beAChefDesc2}) no-repeat center;
        }
        :nth-child(3) {
          background: url(${beAChefDesc3}) no-repeat center;
        }
        > div {
          background: rgba(255, 255, 255, 0.7);
          width: 100%;
          height: 100px;
          padding: 10px;
          display: grid;
          place-items: center;
          word-break: keep-all;
        }
      }
    }
  }
  @media (max-width: 767px) {
    grid-template-rows: 44px 1278px;
    #beChefDescTitleWrap {
      width: 100%;
      display: grid;
      place-items: center start;
      h3 {
        font-size: 20px;
        word-break: keep-all;
      }
    }
    #beChefDescWrap {
      #beChefDesc {
        min-width: 280px;
        flex-direction: column;
        .beChefDescText {
          width: 100%;
          height: 426px;
        }
      }
    }
  }
  @media (max-width: 340px) {
    grid-template-rows: 44px 1278px;
    #beChefDescTitleWrap {
      display: grid;
      place-items: start;
    }
  }
`;

export const BeAChefResumeWrap = styled.section`
  display: grid;
  grid-template-rows: 34px 54px 236px;
  #resumeTitleWrap {
    width: 50%;
    border-bottom: 2px solid #603224;
    h3 {
      font-size: 23px;
      display: grid;
      place-items: center start;
      word-break: keep-all;
    }
  }
  p {
    display: flex;
    text-align: left;
    justify-content: flex-start;
    align-items: center;
    word-break: keep-all;
  }
  #resumeFormWrap {
    display: grid;
    place-items: center;
    background-color: #603224;
    > form {
      display: block;
      width: 80%;
      min-width: 280px;
      height: 60px;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 5px;
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      grid-template-rows: 30px;
      padding: 15px;
      @media (max-width: 420px) {
        height: 100px;
        grid-template-columns: none;
        grid-template-rows: 1fr 1fr 1fr;
        select,
        input,
        button {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 767px) {
    #resumeTitleWrap {
      width: 100%;
      display: grid;
      place-items: center start;
      h3 {
        font-size: 20px;
        word-break: keep-all;
      }
    }
  }
`;
