import styled from 'styled-components';
import '../App.css';
import mainBeChefImg from '../todaysChefIMG/mainBeChefBlack.jpg';

export const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 100vh 150px 550px 550px;
  row-gap: 50px;
  @media (max-width: 767px) {
    grid-template-rows: 100vh 450px 1050px 550px;
  }
  @media (max-width: 430px) {
    grid-template-rows: 100vh 450px 1950px 550px;
  }
`;

export const MainBackgroundWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const MainBackground = styled.video`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  position: relative;
  @media (max-width: 420px) {
    height: 100vh;
  }
`;

export const SloganWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 421px) {
    height: 90vh;
    top: 0%;
    left: 0%;
    transform: translate(0%, 0%);
  }
  > h1 {
    width: 100%;
    /* height: 150px; */
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
    font-size: 25px;
    color: #fff;
    line-height: 50px;
    @media (max-width: 767px) {
      font-size: 20px;
    }
    @media (max-width: 420px) {
      font-size: 17px;
    }
    @media (max-width: 320px) {
      font-size: 14px;
    }
    @media (max-width: 280px) {
      font-size: 11px;
      line-height: 30px;
    }
  }
`;

export const MainSection2Wrap = styled.div`
  display: grid;
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
  > h3 {
    text-align: left;
    font-size: 23px;
  }
  > #cuisineBtnWrap {
    width: 100%;
    display: flex;
    @media (max-width: 767px) {
      flex-direction: column;
    }
    > .cuisineBtn {
      width: 100%;
      height: 80px;
      margin-left: 15px;
      border-radius: 10px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.3s;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      @media (max-width: 767px) {
        margin-left: 0;
        margin-top: 15px;
      }
      :hover {
        background-color: #603224;
        color: #fff;
      }
      > img {
        width: 50px;
        height: 50px;
        @media (max-width: 1080px) {
          width: 40px;
          height: 40px;
        }
      }
      > .cuisineText {
        margin-left: 10px;
        > h4 {
          font-size: 20px;
          text-align: left;
          @media (max-width: 1080px) {
            font-size: 15px;
          }
        }
        > p {
          padding-top: 5px;
          font-size: 13px;
          @media (max-width: 1080px) {
            font-size: 9px;
          }
        }
      }
    }
    > .cuisineBtn:nth-child(1) {
      margin-left: 0;
    }
  }
`;

export const MainSection3Wrap = styled.div`
  display: grid;
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
  > h3 {
    text-align: left;
    font-size: 23px;
  }
`;

export const BestOfChefsWrap = styled.div`
  display: flex;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    li {
      /* border: 1px solid blue; */
      box-sizing: border-box;
      width: calc(100% / 4 - 10px);
      display: grid;
      grid-template-rows: 50px 300px 1fr 1fr 1fr;
      row-gap: 15px;
      margin-bottom: 15px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      transition: 0.3s;
      @media (max-width: 767px) {
        width: calc(100% / 2 - 10px);
      }
      @media (max-width: 430px) {
        width: 100%;
        row-gap: 10px;
      }
      :hover {
        transform: translateY(-10px);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
      }
      > .bestCuisine {
        width: 60%;
        font-size: 18px;
        line-height: 50px;
        border-bottom: 2px solid #dbb89a;
        margin: 0 auto;
      }
      > h4 {
        width: 60%;
        border-bottom: 2px solid #dbb89a;
        display: grid;
        place-items: center;
        box-sizing: border-box;
        margin: 0 auto;
      }
      > span {
        display: grid;
        place-items: center;
      }
      > .chefPic {
        /* border: 1px solid red; */
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
        img {
          width: 230px;
          height: 230px;
          border-radius: 100%;
          @media (max-width: 1080px) {
            width: 160px;
            height: 160px;
          }
          @media (max-width: 767px) {
            width: 180px;
            height: 180px;
          }
          @media (max-width: 430px) {
            width: 240px;
            height: 240px;
          }
        }
      }
    }
  }
`;

export const ChefStar = styled.div`
  background-color: pink;
  width: 60%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  font-size: 18px;
  place-items: center;
  margin-top: -10px;
`;

export const MainSection4Wrap = styled.div`
  display: grid;
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const BeChefWrap = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display: flex;

  > #beChefBackground {
    width: 100%;
    background-image: url(${mainBeChefImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    display: flex;
    align-items: center;
    > #beChefDescWrap {
      color: #fff;
      width: 400px;
      text-align: left;
      padding-left: 50px;
      @media (max-width: 767px) {
        width: 100%;
        padding-left: 30px;
      }
      > h3 {
        font-size: 30px;
        height: 50px;
        @media (max-width: 767px) {
          font-size: 25px;
        }
      }
      > p {
        font-size: 18px;
        height: 100px;
        line-height: 30px;
        @media (max-width: 767px) {
          font-size: 15px;
        }
        @media (max-width: 420px) {
          font-size: 13px;
        }
      }
      > a {
        width: 150px;
        height: 50px;
        font-size: 14px;
        text-align: center;
        line-height: 50px;
        border-radius: 5px;
        background-color: #fff;
        display: block;
        cursor: pointer;
        @media (max-width: 850px) {
          font-size: 10px;
        }
        > button {
          font-family: sans-serif;
          background-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
`;
