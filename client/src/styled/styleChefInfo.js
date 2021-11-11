import styled from 'styled-components';

export const ChefInfoGrid = styled.article`
  display: grid;
  grid-template-rows: 280px 1fr;
  row-gap: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    grid-template-rows: 480px 1fr;
  }
  @media screen and (max-width: 420px) {
    grid-template-rows: 480px 1fr;
  }
`;

export const ChefInfoDesc = styled.div`
  display: grid;
  place-items: center;
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
  grid-template-rows: 50px 1fr;
  row-gap: 30px;
  @media screen and (max-width: 767px) {
    grid-template-rows: 50px 1fr;
  }
  @media screen and (max-width: 420px) {
    grid-template-rows: 50px 1fr;
  }
  > #chefInfoOrder {
    display: flex;
    width: 90%;
    max-width: 1400px;
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
  /* border: 1px solid red; */
  display: grid;
  place-items: center;
`;

export const ChefAllInformation = styled.section`
  /* border: 1px solid red; */
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: grid;
  place-items: center;

  > #chefInfoAll {
    width: 90%;
    height: 500px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
      width: 100%;
      height: 900px;
      flex-direction: column;
    }

    #chefImgWrap {
      width: calc(100% * 1 / 2 - 20px);
      height: 100%;
      display: grid;
      grid-template-rows: 2fr 8fr;
      @media screen and (max-width: 767px) {
        width: 100%;
      }
      > * {
        display: grid;
        place-items: center;
      }
      #chefName {
        background-color: #dbb89a;
        font-size: 30px;
      }
      #chefImg {
        img {
          width: 320px;
          height: 320px;
          @media screen and (max-width: 430px) {
            width: 280px;
            height: 280px;
          }
        }
      }
    }

    #chefTextWrap {
      width: calc(100% * 1 / 2 - 20px);
      height: 100%;
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      row-gap: 15px;
      @media screen and (max-width: 767px) {
        width: 90%;
        margin: 0 auto;
      }
      @media screen and (max-width: 430px) {
        width: 100%;
      }
      > #chefsGreeting,
      #chefsCareer,
      #chefsMindset {
        display: grid;
        grid-template-rows: 25px 1fr;
        row-gap: 10px;
        text-align: left;
        h3 {
          font-size: 25px;
          background-color: #dbb89a;
        }
      }
    }
  }
`;

export const ChefAllCourseInfo = styled.section`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: grid;
  place-items: center;
  #courseWrap {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 767px) {
      width: 100%;
      flex-direction: column;
    }
  }
  .courseItem {
    width: calc(100% / 3 - 10px);
    display: grid;
    grid-template-rows: 40px 200px 100px 90px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 767px) {
      width: 100%;
      height: calc(100% / 3 - 20px);
      grid-template-rows: 40px 150px 100px 90px;
    }
    @media screen and (max-width: 420px) {
      width: 100%;
      height: calc(100% / 3 - 20px);
      grid-template-rows: 40px 250px 100px 90px;
    }
    > .courseName {
      display: grid;
      place-items: center;

      h2 {
        font-size: 20px;
        padding-bottom: 3px;
        border-bottom: 2px solid #603224;
      }
    }
    > ul {
      text-align: left;
      padding: 5px;
      li {
        margin-bottom: 5px;
      }
      li:before {
        content: '- ';
      }
    }
    > .coursePrice {
      display: grid;
      place-items: center;
      table {
        width: 90%;
        height: 50px;
      }
      tr {
        height: 25px;
        line-height: 25px;
      }
      th {
        background-color: #dbb89a;
      }
    }
    > .courseInfoMore {
      text-align: left;
      padding: 5px;
      .pricePerOne {
        margin-bottom: 5px;
      }
      .pricePerOne:before,
      .maxMinPerson:before {
        content: '- ';
      }
    }
  }
`;

export const ChefAllReviewInfo = styled.section`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: grid;
  place-items: center;
  #chefReviewWrap {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    grid-template-rows: 1fr 30px;
    row-gap: 15px;
  }
  #reviewWrap {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 767px) {
      width: 90%;
      flex-direction: column;
    }
    @media screen and (max-width: 420px) {
      width: 100%;
    }
  }
  .reviewPagenation {
    max-width: 1400px;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    > ul {
      width: 150px;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      @media screen and (max-width: 420px) {
        width: 100%;
      }
      > li {
        cursor: pointer;
      }
    }
  }
  .userReview {
    width: calc(100% / 2 - 10px);
    display: grid;
    grid-template-rows: 80px 90px 80px;
    row-gap: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    :nth-child(3),
    :nth-child(4) {
      margin-bottom: 0px;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      height: 280px;
      grid-template-rows: 80px 100px 80px;
      :nth-child(3) {
        margin-bottom: 10px;
      }
    }
    @media screen and (max-width: 420px) {
      height: 310px;
      grid-template-rows: 80px 130px 80px;
    }
  }
  .userProfile {
    display: grid;
    grid-template-columns: 80px 2fr 1fr 4fr;
    img {
      width: 78px;
      height: 78px;
      border-radius: 80px;
      text-align: center;
    }
    > * {
      display: grid;
      place-items: center;
    }
  }
  .reviewTextWrap {
    display: grid;
    place-items: center;
    > p {
      width: 95%;
      height: 90%;
    }
  }
  .reviewPicture {
    display: flex;
    justify-content: space-evenly;
    img {
      width: 78px;
      height: 78px;
      border-radius: 80px;
      text-align: center;
    }
  }
`;
