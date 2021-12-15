import styled from 'styled-components';

export const ChefInfoGrid = styled.article`
  display: grid;
  grid-template-rows: 280px 1fr;
  row-gap: 50px;
  padding-bottom: 50px;
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 280px) {
      width: 100%;
    }
    > li {
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
  }
`;

export const ChefImgWrap = styled.div`
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
`;

export const ChefTextWrap = styled.div`
  width: calc(100% * 1 / 2 - 20px);
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 15px;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 0 auto;
  }
  @media screen and (max-width: 280px) {
    width: 100%;
  }
  > #chefsGreeting,
  #chefsCareer,
  #chefsMindset {
    display: grid;
    grid-template-rows: 30px 1fr;
    row-gap: 10px;
    text-align: left;
    h3 {
      font-size: 20px;
      padding: 5px 0px 5px 5px;
      background-color: #dbb89a;
    }
    p:before {
      content: ': ';
    }
    li:before {
      content: '- ';
    }
    li {
      margin-bottom: 5px;
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-columns: 1fr;
    column-gap: 10px;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    row-gap: 10px;
    place-items: center;
    @media screen and (max-width: 767px) {
      width: 100%;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  }
`;

export const CourseItem = styled.li`
  width: 90%;
  display: grid;
  grid-template-rows: 40px 1fr 100px 50px 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 767px) {
    grid-template-rows: 40px 1fr 100px 50px 50px;
  }
  @media screen and (max-width: 420px) {
    width: 95%;
    grid-template-rows: 40px 1fr 100px 50px 50px;
  }
  @media screen and (max-width: 280px) {
    width: 100%;
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
    padding: 15px;
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
  > .courseResBtn {
    display: grid;
    place-items: center;
    > a {
      display: block;
      width: 100px;
      height: 35px;
      line-height: 35px;
      border: 1px solid transparent;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      transition: all 0.3s;
      :hover {
        color: #fff;
        background-color: #603224;
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
`;

export const ReviewWrap = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: 1fr;
  column-gap: 10px;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  row-gap: 10px;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and (max-width: 280px) {
    width: 100%;
  }
`;

export const ReviewPagenation = styled.div`
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
`;

export const UserReview = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 80px 100px 80px;
  row-gap: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 280px;
  }
  @media screen and (max-width: 420px) {
    height: 300px;
    grid-template-rows: 80px 120px 80px;
  }
  .userProfile {
    display: grid;
    grid-template-columns: 80px 4fr 1fr 5fr;
    .userProfileWrap {
      img {
        width: 60px;
        height: 60px;
        border-radius: 80px;
        text-align: center;
      }
    }
    > * {
      display: grid;
      place-items: center;
    }
  }
  .reviewTextWrap {
    display: grid;
    place-items: center;
    text-align: left;
    > p {
      width: 95%;
      height: 90%;
      @media screen and (max-width: 767px) {
        width: 95%;
        height: 95%;
      }
      @media screen and (max-width: 420px) {
        width: 95%;
        height: 90%;
      }
      @media screen and (max-width: 320px) {
        width: 100%;
        height: 100%;
      }
    }
  }
  .reviewPicture {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dbb89a;
    > .reviewPictureFrame {
      width: 210px;
      height: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 10px;
    }
    .reviewPicture {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        width: 60px;
        height: 60px;

        display: grid;
        place-items: center;
      }
    }
  }
`;

export const ChefInfoNone = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  place-items: center;
`;
