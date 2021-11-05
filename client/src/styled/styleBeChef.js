import styled from 'styled-components';
import beAChefBackground from '../todaysChefIMG/beAChefBackground.jpg';
import beChefDesc1 from '../todaysChefIMG/beChefDesc1.jpg';
import beChefDesc2 from '../todaysChefIMG/beChefDesc2.jpg';
import beChefDesc3 from '../todaysChefIMG/beChefDesc3.jpg';
import beChefDesc5 from '../todaysChefIMG/beChefDesc5.jpg';

export const BeAChefGrid = styled.article`
  width: 100%;
  padding-bottom: 50px;
  display: grid;
  grid-template-rows: 90vh 761px 300px;
  grid-row-gap: 200px;
  min-width: 280px;
  @media (max-width: 767px) {
    grid-template-rows: 90vh 726px 300px;
    grid-row-gap: 150px;
  }
  @media (max-width: 430px) {
    grid-template-rows: 90vh 750px 300px;
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
  grid-template-rows: 35px 486px 200px;
  grid-row-gap: 20px;
  padding: 0 50px;
  #beChefDescTitleWrap {
    width: 100%;
    h3 {
      font-size: 35px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      word-break: keep-all;
      @media (max-width: 767px) {
        font-size: 30px;
      }
    }
  }
  #beChefDescWrap {
    display: grid;
    place-items: center;
  }
  #beChefDesc {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 767px) {
      width: 100%;
      flex-direction: column;
    }
  }
  .beChefDescImg {
    width: 30%;
    height: 100%;
    min-width: 225px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    :nth-child(1) {
      background: url(${beChefDesc1}) no-repeat center right -360px;
    }
    :nth-child(2) {
      background: url(${beChefDesc2}) no-repeat center;
    }
    :nth-child(3) {
      background: url(${beChefDesc5}) no-repeat center right -200px;
    }
    > span {
      background: rgba(0, 0, 0, 0.6);
      width: 100%;
      height: 100%;
      border-radius: 5px;
      &.imgActive {
        background-color: transparent;
      }
    }
    @media (max-width: 767px) {
      width: 100%;
      min-width: 280px;
      border-radius: 0px;
      > span {
        border-radius: 0;
      }
    }
  }

  #beChefDescTextWrap {
    display: grid;
    place-items: center;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }
  #beChefDescText {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    word-break: keep-all;
    > p {
      background-color: rgba(255, 255, 255, 0.3);
      font-size: 16px;
      display: grid;
      place-items: center;
      width: 80%;
      height: 100%;
      border-radius: 5px;
    }
    > .beChefDescArrow {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      color: #fff;
      font-size: 20px;
      display: grid;
      place-items: center;
      cursor: pointer;
    }
  }
  @media (max-width: 767px) {
    grid-template-rows: 35px 500px 150px;
    text-align: left;
    padding: 0 0;
  }
  @media (max-width: 430px) {
    grid-template-rows: 60px 500px 150px;
  }
`;

export const BeAChefResumeWrap = styled.section`
  display: grid;
  padding: 0 50px;
  grid-template-rows: 35px 53px 212px;
  #resumeTitleWrap {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    word-break: keep-all;
    font-size: 35px;

    @media (max-width: 767px) {
      font-size: 30px;
    }
    @media (max-width: 420px) {
      font-size: 25px;
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
    width: 100%;
    height: 100%;
    place-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }

  #resumeForm {
    /* border: 1px solid red; */
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px;
    width: 80%;
    height: 50%;
    > #submitBtn {
      width: 30%;
      min-width: 100px;
      margin: 0 auto;
      background-color: #dbb89a;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      border: none;
      outline: none;
    }
    > form {
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 5px;
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-column-gap: 10px;
      grid-template-rows: 100%;
      > input {
        height: 100%;
      }
      > select {
        border: none;
        border-radius: 5px;
      }
      #resumeFileWrap {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-column-gap: 10px;
        input {
          border: none;
          border-radius: 5px;
        }
        label {
          cursor: pointer;
          display: grid;
          place-items: center;
          background-color: #603224;
          color: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          min-width: 45px;
        }
      }
    }
    @media (max-width: 420px) {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    padding: 0 0;
  }
`;
