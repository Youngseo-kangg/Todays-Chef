import styled from 'styled-components';
import '../App.css';
import mainBeChefImg from '../todaysChefIMG/mainBeChefBlack.jpg';

export const MainGrid = styled.div`
  display: grid;
<<<<<<< HEAD
  grid-template-rows: 90vh 150px 450px 550px;
  row-gap: 100px;
  @media (max-width: 767px) {
    grid-template-rows: 100vh 230px 865px 550px;
  }
  @media (max-width: 430px) {
    grid-template-rows: 100vh 490px 1725px 550px;
=======
  grid-template-rows: 100vh 125px 550px 550px;
  row-gap: 50px;
  padding-bottom: 50px;
  background-color: rgba(219, 184, 154, 0.3);
  @media (max-width: 767px) {
    grid-template-rows: 100vh 450px 1050px 550px;
  }
  @media (max-width: 430px) {
    grid-template-rows: 100vh 450px 2020px 550px;
>>>>>>> 1cf9d6d0f8a84f22a43792af135f8619ce1016ba
  }
`;

export const MainBackgroundWrap = styled.div`
  width: 100%;
  height: 100%;
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
<<<<<<< HEAD
  place-items: center;
  > #mainSection2Wrap {
    display: grid;
    grid-template-rows: 35px 80px;
    row-gap: 15px;
    width: 90%;
    max-width: 1400px;
    @media (max-width: 767px) {
      width: 95%;
      grid-template-rows: 30px 170px;
=======
  width: 95%;
  grid-template-rows: 26px 1fr;
  row-gap: 15px;
  max-width: 1400px;
  @media (max-width: 291px) {
    grid-template-rows: 46px 1fr;
  }
  margin: 0 auto;
  > h3 {
    text-align: left;
    font-size: 23px;
    word-break: keep-all;
    @media (max-width: 420px) {
      font-size: 20px;
    }
  }
  > #cuisineBtnWrap {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 15px;
    @media (max-width: 767px) {
      grid-template-columns: none;
      column-gap: none;
      grid-template-rows: repeat(4, 1fr);
      row-gap: 15px;
>>>>>>> 1cf9d6d0f8a84f22a43792af135f8619ce1016ba
    }
    @media (max-width: 430px) {
      width: 100%;
<<<<<<< HEAD
      grid-template-rows: 60px 400px;
    }

    > h3 {
      text-align: left;
      font-size: 30px;
      word-break: keep-all;
    }

    > #cuisineBtnWrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      > li {
        width: calc(100% / 4 - 20px);
        height: 80px;
        display: grid;
        place-items: center;
        border-radius: 10px;
        border-radius: 10px;
        transition: 0.3s;
        cursor: pointer;
        transition: 0.3s;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        @media (max-width: 767px) {
          width: calc(100% / 2 - 20px);
        }
        @media (max-width: 430px) {
          width: 100%;
        }
        :hover {
          background-color: #603224;
          color: #fff;
        }
        > .cuisine {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          > img {
            width: 50px;
            height: 50px;
          }
          > .cuisineText {
            width: calc(100% - 70px);
            @media (max-width: 767px) {
              width: calc(100% - 140px);
            }
            word-break: keep-all;
            > h4 {
              font-size: 18px;
              text-align: left;
              @media (max-width: 430px) {
                font-size: 15px;
              }
            }
            > p {
              padding-top: 5px;
              text-align: left;
              font-size: 13px;
              @media (max-width: 430px) {
                font-size: 10px;
              }
            }
          }

          > .cuisineBtn:nth-child(1) {
            margin-left: 0;
=======
      height: 80px;
      border-radius: 10px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.3s;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      @media (max-width: 767px) {
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
>>>>>>> 1cf9d6d0f8a84f22a43792af135f8619ce1016ba
          }
        }
      }
    }
  }
`;

export const MainSection3Wrap = styled.div`
  display: grid;
<<<<<<< HEAD
  place-items: center;
  max-width: 1400px;
  #mainSection3Wrap {
    width: 90%;
    display: grid;
    grid-template-rows: 30px 405px;
    row-gap: 15px;
    @media (max-width: 767px) {
      width: 95%;
      grid-template-rows: 30px 820px;
    }
    @media (max-width: 430px) {
      width: 100%;
      grid-template-rows: 60px 1650px;
    }

    > h3 {
      text-align: left;
      font-size: 30px;
      word-break: keep-all;
=======
  grid-template-rows: 26px 1fr;
  row-gap: 15px;
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 482px) {
    grid-template-rows: 46px 1fr;
  }
  > h3 {
    font-size: 23px;
    word-break: keep-all;
    display: grid;
    text-align: left;
    @media (max-width: 420px) {
      font-size: 20px;
>>>>>>> 1cf9d6d0f8a84f22a43792af135f8619ce1016ba
    }
  }
`;

export const BestOfChefsWrap = styled.div`
<<<<<<< HEAD
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  > .bestChefBox {
    width: calc(100% / 4 - 20px);
    background-color: #fff;
    border-radius: 10px;
    display: grid;
    grid-template-rows: 25px 270px 90px;
    row-gap: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: 0.3s;
    cursor: pointer;
    :hover {
      transform: translateY(-10px);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    }
    @media (max-width: 767px) {
      width: calc(100% / 2 - 20px);
      :nth-child(1),
      :nth-child(2) {
        margin-bottom: 10px;
      }
    }
    @media (max-width: 430px) {
      width: 100%;
      :nth-child(3),
      :nth-child(4) {
        margin-bottom: 10px;
      }
    }
    > .bestChefCuisine {
      width: 60%;
      margin: 0 auto;
      border-bottom: 2px solid #dbb89a;
      color: #603224;
      font-size: 18px;
      line-height: 25px;
    }
    > .bestChefPicture {
      width: 92%;
      margin: 0 auto;
      background-color: pink;
      background-image: url(${mainBeChefImg});
      background-size: cover;
      background-position: center;
    }
    > .bestChefDesc {
      width: 92%;
      margin: 0 auto;
      display: grid;
      grid-template-rows: 25px 50px;
      row-gap: 10px;
      > span {
        display: block;
        width: 60%;

        border-bottom: 2px solid #dbb89a;
        margin: 0 auto;
      }
      > .ratingStar {
        display: grid;
        grid-template-rows: 20px 25px;
        row-gap: 5px;
=======
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
      margin-bottom: 15px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      transition: 0.3s;
      background-color: #fff;
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
      > a {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 50px 300px 1fr 1fr 1fr;
        row-gap: 15px;
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
          margin-top: -20px;
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
>>>>>>> 1cf9d6d0f8a84f22a43792af135f8619ce1016ba
      }
    }
  }
`;

export const ChefStar = styled.div`
  width: 60%;
  height: 100%;
  margin: 0 auto;
<<<<<<< HEAD
=======
  display: grid;
  font-size: 18px;
  place-items: center;
  > div {
    > img {
      padding: 2px;
      width: 20px;
      height: 20px;
    }
  }
>>>>>>> 1cf9d6d0f8a84f22a43792af135f8619ce1016ba
`;

export const MainSection4Wrap = styled.div`
  display: grid;
<<<<<<< HEAD
  place-items: center;
  /* padding: 0 200px;
  @media (max-width: 1400px) {
    padding: 0 100px;
  }
  @media (max-width: 1079px) {
    padding: 0;
    width: 850px;
    margin: 0 auto;
  }
  @media (max-width: 850px) {
    width: 70%;
  } */
=======
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
>>>>>>> 1cf9d6d0f8a84f22a43792af135f8619ce1016ba
`;

export const BeChefWrap = styled.div`
  width: 90%;
  height: 100%;
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
      text-align: left;
      padding-left: 50px;
<<<<<<< HEAD
      @media (max-width: 430px) {
        padding-left: 10px;
=======
      @media (max-width: 767px) {
        width: 100%;
        padding-left: 30px;
>>>>>>> 1cf9d6d0f8a84f22a43792af135f8619ce1016ba
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
