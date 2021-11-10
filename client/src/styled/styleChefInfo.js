import styled from 'styled-components';

export const ChefInfoGrid = styled.article`
  display: grid;
  grid-template-rows: 280px 800px;
  row-gap: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    grid-template-rows: 480px 1000px;
  }
`;

export const ChefInfoDesc = styled.div`
  display: grid;
  place-items: center;
  max-width: 1400px;
  background-color: #dbb89a;
  > h2 {
    width: 80%;
    max-width: 765px;
    height: auto;
    display: grid;
    place-items: center;
    font-size: 35px;
    line-height: 50px;
    box-sizing: border-box;
    border-bottom: 2px solid #603224;
    word-break: keep-all;
    @media screen and (max-width: 767px) {
      width: 90%;
    }
    @media screen and (max-width: 420px) {
      font-size: 30px;
      width: 95%;
    }
  }
`;

export const ChefInformation = styled.div`
  display: grid;
  grid-template-rows: 50px 720px;
  row-gap: 30px;
  @media screen and (max-width: 767px) {
    grid-template-rows: 50px 920px;
  }
  @media screen and (max-width: 420px) {
    grid-template-rows: 50px 920px;
  }
  > #chefInfoOrder {
    display: flex;
    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 420px) {
      width: 100%;
    }
    > li {
      flex: 1 1 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :nth-child(1) {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      :nth-child(3) {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    > li.chefInfoActive {
      background-color: #603224;
      color: #fff;
    }
  }
`;

export const ChefWrapBox = styled.div`
  border: 1px solid red;
  display: grid;
  place-items: center;
`;

export const ChefAllInformation = styled.section`
  border: 1px solid red;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: grid;
  place-items: center;
  /* @media screen and (max-width: 767px) {
    grid-template-rows: 480px 1000px;
  }
  @media screen and (max-width: 420px) {
    grid-template-rows: 480px 1000px;
  } */

  > #chefInfoAll {
    width: 95%;
    height: 100%;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
      width: 100%;
      flex-direction: column;
    }

    #chefImgWrap {
      width: calc(100% * 1 / 3 - 20px);
      height: 100%;
      border: 1px solid red;
      display: grid;
      grid-template-rows: 1fr 9fr;
      @media screen and (max-width: 767px) {
        width: 100%;
        grid-template-rows: 2fr 8fr;
      }
      > * {
        border: 1px solid red;
      }
    }

    #chefTextWrap {
      width: calc(100% * 2 / 3 - 20px);
      height: 100%;
      border: 1px solid red;
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      @media screen and (max-width: 767px) {
        width: 100%;
      }
      > * {
        border: 1px solid red;
      }
    }
  }
`;

export const ChefAllCourseInfo = styled.section`
  border: 1px solid red;
`;

export const ChefAllReviewInfo = styled.section`
  border: 1px solid red;
`;
