import styled from 'styled-components';

export const MypageGrid = styled.article`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  background-color: #dbb89a;
  > #mypageGridWrap {
    width: 90%;
    max-width: 1400px;
    height: auto;
    min-height: 100vh;
    padding: 80px 0 50px;
    display: grid;
    grid-template-columns: 80px 1fr;
    min-width: 280px;
    font-size: 16px;
    @media (max-width: 767px) {
      grid-template-columns: none;
      grid-template-rows: 50px 1fr;
      font-size: 14px;
    }
    @media (max-width: 420px) {
      width: 100%;
    }
    > ul {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      row-gap: 5px;
      @media (max-width: 767px) {
        grid-template-rows: none;
        column-gap: 5px;
        grid-template-columns: repeat(3, 1fr);
      }
      > li {
        display: grid;
        place-items: center;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: #fff;
        word-break: keep-all;
        cursor: pointer;
        &:hover {
          cursor: pointer;
        }
        @media (max-width: 767px) {
          border-bottom-left-radius: 0px;
          border-top-right-radius: 10px;
        }
        &.mypageSelected {
          background-color: rgba(96, 50, 36, 0.5);
          color: #fff;
        }
      }
    }
    > #myPageContent {
      display: grid;
      place-items: center;
    }
  }
`;

export const MyPageContent = styled.article`
  width: 100%;
  height: 100%;
  min-height: 500px;
  padding: 15px;
  display: grid;
  place-items: center;
  background-color: rgba(96, 50, 36, 0.5);
  color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: 767px) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 5px;
  }
`;

export const MypageReservContent = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 60px;
  row-gap: 20px;
  width: 100%;
  height: 100%;
  @media (max-width: 420px) {
    grid-template-rows: 50px 1fr 110px;
  }
  > #myReservationTitleWrap {
    display: grid;
    place-items: center;
    #myReservationTitle {
      display: grid;
      grid-template-columns: 45px 1fr 45px;
      column-gap: 10px;
      width: 100%;
      height: 100%;
      > * {
        display: grid;
        place-items: center;
      }
      > #myReservationMonth > h2 {
        display: grid;
        place-items: center;
        width: 100px;
        height: 100%;
        border-bottom: 2px solid #fff;
      }
      > .myReservationArrow {
        cursor: pointer;
      }
    }
  }
  > #myReservationCalanderWrap {
    display: grid;
    place-items: center;
  }
  > #myReservationInfo {
    display: grid;
    place-items: center;
    grid-template-columns: 100px 1fr 100px;
    column-gap: 10px;
    @media (max-width: 420px) {
      grid-template-columns: none;
      grid-template-rows: 30px 30px 50px;
    }
    #deleteReserve {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      > button {
        background-color: rgba(255, 255, 255, 0.3);
        color: #fff;
        padding: 8px;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const MyReservCalander = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  > #myReservationCalander {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 25px 1fr;
    grid-auto-rows: 1fr;
    #weekDay {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      > .dayName {
        display: grid;
        place-items: center;
      }
    }
    .calanderWeek {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      .calanderDay {
        background-color: transparent;
        cursor: pointer;
        transition: all 0.3s;
        &.thisMonth {
          background-color: rgba(255, 255, 255, 0.1);
        }
        &#today {
          background-color: #603224;
        }
        &:hover {
          background-color: #dbb89a;
        }
      }
      .reservedDate {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        margin: 0 auto;
        background-color: #603224;
      }
    }
  }
`;

export const MypageReviewContent = styled.div`
  display: grid;
  grid-template-rows: 350px 1fr;
  row-gap: 20px;
  place-items: center;
  width: 100%;
  height: 100%;
  #myRecentComment {
    display: grid;
    grid-template-rows: 60px 1fr;
    row-gap: 10px;
    width: 100%;
    > #myRecentCommentTitle {
      display: grid;
      place-items: center;
      > h2 {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
        border-bottom: 2px solid #fff;
        @media (max-width: 420px) {
          width: 100%;
        }
      }
    }
    > #myRecentReview {
      display: grid;
      grid-template-rows: 60px 1fr;
      row-gap: 10px;
      > #myRecentReviewExtra {
        display: grid;
        grid-template-columns: 1fr 2fr;
        place-items: center;
        column-gap: 10px;
        #myRecentCommentStar {
          border: 1px solid red;
        }
        #myRecentCommentPic {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 100px;
          column-gap: 10px;
          place-items: center;
          .myRecentReviewBtn {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            > button {
              background-color: rgba(255, 255, 255, 0.3);
              color: #fff;
              padding: 8px;
              font-size: 14px;
              border-radius: 5px;
              cursor: pointer;
            }
          }
        }
      }
      > #myRecentReviewContent {
        display: grid;
        grid-template-rows: 140px 60px;
        row-gap: 10px;
        place-items: center;
        width: 100%;
        height: 100%;
        textarea {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          border: none;
          background-color: rgba(255, 255, 255, 0.7);
          outline: none;
          color: #fff;
        }
        .myRecentReviewBtn {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          > button {
            background-color: rgba(255, 255, 255, 0.3);
            color: #fff;
            padding: 8px;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
  > #myCommentList {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    > #myCommentListWrap {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: 1fr 30px;
      row-gap: 10px;
      #myComments {
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        row-gap: 10px;
        > li {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: #dbb89a;
          border-radius: 5px;
        }
      }
    }
  }
`;

export const MypageEditContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  #mypageEditContentWrap {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 300px 1fr;
    row-gap: 20px;
    @media (max-width: 767px) {
      height: 100%;
      grid-template-columns: none;
      grid-template-rows: 300px 1fr;
    }
    #mypageInfoPic {
      display: grid;
      grid-template-rows: 250px 50px;
      place-items: center;
      img {
        width: 230px;
        height: 230px;
        border-radius: 5px;
      }
      #image_uploads {
        opacity: 0;
        position: absolute;
      }
      #mypageInfpPicBtn {
        display: block;
        background-color: rgba(255, 255, 255, 0.3);
        color: #fff;
        width: 100px;
        padding: 8px;
        font-size: 14px;
        border-radius: 5px;
        margin: 0 auto;
        cursor: pointer;
      }
    }

    #myInfoDetail {
      display: grid;
      place-items: center;
      form {
        width: 100%;
        height: auto;
        display: grid;
        place-items: center;
        grid-template-rows: repeat(4, 40px);
        row-gap: 10px;
        .myInfoDetailWrap {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          grid-template-columns: 150px 1fr;
          word-break: keep-all;
          @media (max-width: 420px) {
            grid-template-columns: 70px 1fr;
          }
          > input {
            width: 90%;
            height: 100%;
            background-color: transparent;
            border-bottom: 2px solid #fff;
          }
        }
        #myInfoDetailBtnWrap {
          width: 220px;
          display: flex;
          justify-content: space-evenly;
          > button {
            background-color: rgba(255, 255, 255, 0.3);
            color: #fff;
            width: 100px;
            padding: 8px;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export const MypageChefEditContent = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: 350px 1fr;
  row-gap: 50px;
  width: 100%;
  height: 100%;
  @media (max-width: 420px) {
  }
  > #chefEditIntro {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 40px 1fr;
    grid-template-columns: 300px 1fr;
    row-gap: 10px;
    column-gap: 10px;
    h2 {
      grid-column: 1/3;
      grid-row: 1/1;
      font-size: 25px;
      display: grid;
      place-items: center left;
    }
    #chefEditIntroPic {
      display: grid;
      place-items: center;
      img {
        width: 250px;
        height: 250px;
        border-radius: 5px;
      }
      button {
        background-color: rgba(255, 255, 255, 0.3);
        color: #fff;
        width: 100px;
        padding: 8px;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    #chefEditIntroText {
      display: grid;
      place-items: center;
      grid-template-rows: repeat(3, 1fr);
      row-gap: 20px;
      .chefEditInfoWrap {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        grid-template-columns: 50px 1fr;
        column-gap: 10px;
        textarea {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          border: none;
          outline: none;
          background-color: rgba(255, 255, 255, 0.3);
          color: #fff;
        }
      }
    }
  }
  > #chefEditInfo {
    width: 100%;
    height: auto;
    display: grid;
    place-items: center;
    #chefCourseInfo {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: 40px 250px 1fr 50px;
      row-gap: 10px;
      h2 {
        font-size: 25px;
        display: grid;
        place-items: center left;
      }
      #chefCourseInfoFormWrap {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        grid-template-rows: 1fr 30px;
        row-gap: 10px;
        background-color: #603224;
        padding: 10px;
        border-radius: 5px;
        #chefCourseInfoForm {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          grid-template-rows: 40px 40px 1fr;
          grid-template-columns: 1fr 1fr;
          row-gap: 10px;
          column-gap: 10px;
          .chefCourseInfoFormItem {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            grid-template-columns: 100px 1fr;
            column-gap: 10px;
            > input {
              width: 100%;
              height: 100%;
              color: #fff;
              border-radius: 5px;
              border: none;
              outline: none;
            }
          }
          textarea {
            width: 100%;
            height: 100%;
            grid-column: 1 / 3;
            grid-row: 3 / 4;
            background-color: rgba(255, 255, 255, 0.3);
            color: #fff;
            border-radius: 5px;
            border: none;
            outline: none;
          }
        }
        button {
          background-color: rgba(255, 255, 255, 0.3);
          color: #fff;
          width: 100px;
          padding: 8px;
          font-size: 14px;
          border-radius: 5px;
          cursor: pointer;
        }
      }

      #chefCourseInfoDataWrap {
        height: auto;
        display: grid;
        grid-template-rows: 1fr;
        grid-auto-rows: 1fr;
        row-gap: 20px;
        .chefCourseInfoData {
          height: 230px;
          display: grid;
          grid-template-rows: 40px 40px 40px 1fr;
          row-gap: 5px;
          column-gap: 10px;
          grid-template-columns: 1fr 1fr;
          background-color: #dbb89a;
          color: #000;
          border-radius: 5px;
          .chefCourseInfoItem {
            display: grid;
            place-items: center;
            grid-template-columns: 70px 1fr;
            column-gap: 10px;
            p {
              width: 100%;
              height: 100%;
              border-radius: 5px;
              border: none;
              outline: none;
              display: grid;
              place-items: center;
            }
          }
          .chefCourseInfoItemDesc {
            grid-column: 1 / 3;
            grid-row: 4 / 5;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 5px;
            border: none;
            outline: none;
          }
          .chefCourseInfoBtn {
            grid-column: 1 / 3;
            grid-row: 1 / 1;
            display: grid;
            place-items: center right;
            > button {
              background-color: rgba(255, 255, 255, 0.3);

              width: 100px;
              padding: 8px;
              font-size: 14px;
              border-radius: 5px;
              cursor: pointer;
            }
          }
        }
      }
      #chefCourseSaveBtn {
        > button {
          background-color: rgba(255, 255, 255, 0.3);
          color: #fff;
          width: 100px;
          padding: 8px;
          font-size: 14px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
`;
