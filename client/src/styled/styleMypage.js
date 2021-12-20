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
    padding: 70px 0 50px;
    display: grid;
    grid-template-columns: 80px 1fr;
    min-width: 280px;
    font-size: 16px;
    @media (max-width: 767px) {
      padding: 70px 0 50px;
      grid-template-columns: none;
      grid-template-rows: 50px 1fr;
      font-size: 14px;
    }
    @media (max-width: 420px) {
      padding: 60px 0 50px;
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
  box-sizing: border-box;
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
  }
  @media (max-width: 420px) {
    padding: 10px 0px;
    box-sizing: border-box;
  }
`;

export const MypageReservContent = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: 50px 530px 1fr;
  row-gap: 20px;
  width: 100%;
  height: 100%;
  @media (max-width: 420px) {
    grid-template-rows: 50px 340px 1fr;
  }
  > #myReservationTitleWrap {
    display: grid;
    place-items: center;
    width: 100%;
    max-width: 1080px;
    height: 100%;
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
        width: 150px;
        height: 100%;
        border-bottom: 2px solid #fff;
        font-size: 25px;
      }
      > .myReservationArrow {
        cursor: pointer;
      }
    }
  }
  > #myReservationCalanderWrap {
    width: 100%;
    max-width: 1080px;
    height: 100%;
    display: grid;
    place-items: center;
  }
  > #myReservationInfo {
    width: 100%;
    max-width: 1080px;
    height: 100%;
    min-height: 40px;
    display: grid;
    place-items: center;
    grid-template-columns: 100px 1fr 100px;
    column-gap: 10px;
    @media (max-width: 420px) {
      grid-template-columns: none;
      grid-template-rows: 30px 1fr 70px;
      row-gap: 10px;
    }
    #deleteReserve {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: 1fr;
      grid-auto-rows: 1fr;
      row-gap: 10px;
      place-items: center;
      @media (max-width: 420px) {
        grid-template-rows: none;
        row-gap: 0px;
        grid-template-columns: 1fr;
        grid-auto-columns: 1fr;
        column-gap: 10px;
      }
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
        margin: 5px auto 0px;
        background-color: #603224;
      }
    }
  }
`;

export const MypageReviewContent = styled.div`
  display: grid;
  grid-template-rows: 50px 380px 1fr;
  row-gap: 20px;
  place-items: center;
  width: 100%;
  height: 100%;
  &.noReview {
    grid-template-rows: 50px 1fr;
  }
  @media (max-width: 1080px) {
    grid-template-rows: 50px 450px 1fr;
  }
  #mypageReviewTitle {
    width: 100%;
    height: 100%;
    max-width: 1080px;
    font-size: 25px;
    > h2 {
      width: 250px;
      height: 100%;
      display: grid;
      place-items: center left;
      border-bottom: 2px solid #fff;
    }
  }
  #myRecentComment {
    display: grid;
    place-items: center;
    row-gap: 10px;
    width: 100%;
    > #myRecentReview {
      width: 100%;
      max-width: 1080px;
      height: 100%;
      display: grid;
      grid-template-rows: 70px 1fr;
      background-color: #603224;
      border-radius: 5px;
      &.showPic {
        > #myRecentReviewExtra {
          grid-template-columns: 2fr 100px 150px;
          @media (max-width: 1080px) {
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 100px;
          }
          #myRecentCommentPic {
            grid-template-columns: 1fr;
            column-gap: 0px;
            > #myRecentCommentPicList {
              width: 150px;
              grid-template-columns: repeat(2, 1fr);
              place-items: center;
            }
          }
        }
        > #myRecentReviewContent {
          grid-template-rows: 300px;
          padding-bottom: 10px;
        }
      }
      @media (max-width: 1080px) {
        grid-template-rows: 150px 1fr;
      }
      > #myRecentReviewExtra {
        display: grid;
        grid-template-columns: 2fr 100px 1fr;
        padding: 10px;
        box-sizing: border-box;
        place-items: center;
        column-gap: 10px;
        @media (max-width: 1080px) {
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr 100px;
        }
        #myRecentCommentTitle {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          h3 {
            word-break: keep-all;
          }
        }

        #myRecentCommentPic {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 100px;
          column-gap: 10px;
          place-items: center;
          @media (max-width: 1080px) {
            grid-row: 2/2;
            grid-column: 1/3;
          }

          #myRecentCommentPicList {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center left;
            grid-template-columns: 1fr;
            grid-auto-columns: 1fr;
            p {
              width: 100%;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              text-align: left;
            }
            p:before {
              content: '- ';
            }
            img {
              width: 50px;
              height: 50px;
              cursor: pointer;
            }
          }
          .myRecentReviewBtn {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            > label {
              background-color: rgba(255, 255, 255, 0.3);
              color: #fff;
              padding: 8px;
              font-size: 14px;
              border-radius: 5px;
              cursor: pointer;
            }
            input {
              position: absolute;
              width: 0;
              height: 0;
              padding: 0;
              border: 0;
            }
          }
        }
      }
      > #myRecentReviewContent {
        display: grid;
        grid-template-rows: 240px 40px;
        grid-auto-rows: 25px;
        row-gap: 10px;
        place-items: center;
        width: 100%;
        height: 100%;
        textarea {
          width: calc(100% - 30px);
          height: 100%;
          padding: 15px;
          box-sizing: border-box;
          border-radius: 5px;
          border: none;
          background-color: rgba(255, 255, 255, 0.7);
          outline: none;
          font-size: 16px;
          font-family: 'Chosunilbo_myungjo', 'ChosunKm';
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
      > #myRecentReviewContent.showReview > div {
        width: calc(100% - 30px);
        height: 100%;
        padding: 15px;
        grid-template-rows: 280px;
        background-color: rgba(255, 255, 255, 0.1);
        text-align: left;
        border-radius: 5px;
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
      max-width: 1080px;
      height: 100%;
      display: grid;
      place-items: center;
      #myComments {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(4, 40px);
        grid-auto-rows: 40px;
        row-gap: 10px;
        > li {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          place-items: center;
          cursor: pointer;
          background-color: #dbb89a;
          border-radius: 5px;
        }
        > li:hover {
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`;

export const Stars = styled.div`
  display: flex;
  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #dbb89a;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .brownStar {
    color: #dbb89a;
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
    place-items: center;
    max-width: 900px;
    grid-template-rows: 50px 1fr;
    grid-template-columns: 250px 1fr;
    row-gap: 10px;
    background-color: #dbb89a;
    color: #603224;
    border-radius: 5px;
    padding: 15px;
    @media (max-width: 767px) {
      height: 100%;
      grid-template-columns: none;
      grid-template-rows: 50px 320px 1fr;
    }
    @media (max-width: 420px) {
      padding: 15px 0px;
    }
    #mypageEditTitle {
      grid-row: 1/1;
      grid-column: 1/3;
      display: grid;
      place-items: center left;
      width: 100%;
      height: 100%;
      h2 {
        width: 280px;
        display: grid;
        place-items: center left;
        font-size: 25px;
        height: 100%;
        border-bottom: 2px solid #603224;
        text-align: left;
        @media (max-width: 420px) {
          width: 100%;
          place-items: center;
          font-size: 20px;
        }
      }
      @media (max-width: 420px) {
        width: 240px;
        place-items: center;
        font-size: 20px;
      }
    }

    #mypageInfoPic {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: 250px 30px;
      place-items: center;
      word-break: keep-all;
      @media (max-width: 767px) {
        grid-row: 2/2;
        grid-column: 1/3;
      }
      img {
        width: 230px;
        height: 230px;
        border-radius: 5px;
      }
      input {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        border: 0;
      }
      .mypageInfoPicButton {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        .mypageInfoPicBtn {
          display: block;
          background-color: rgba(255, 255, 255, 0.3);
          width: 100px;
          padding: 8px;
          font-size: 14px;
          border-radius: 5px;
          margin: 0 auto;
          cursor: pointer;
        }
      }
    }

    #myInfoDetail {
      display: grid;
      place-items: center;
      width: 100%;
      height: 100%;
      @media (max-width: 767px) {
        grid-row: 3/3;
        grid-column: 1/3;
      }
      #myInfoDetailContent {
        width: 100%;
        height: auto;
        display: grid;
        place-items: center;
        grid-template-rows: repeat(4, 40px);
        row-gap: 10px;
        &.bothError {
          grid-template-rows: 40px 20px 40px 20px 40px;
        }
        &.passwordError {
          grid-template-rows: 40px 40px 40px 20px 40px;
        }
        &.nicknameError {
          grid-template-rows: 40px 20px 40px 40px 40px;
        }
        .myInfoDetailWrap {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          grid-template-columns: 130px 1fr 100px;
          column-gap: 10px;
          word-break: keep-all;
          &.socialLoginWarning {
            grid-template-columns: 130px 1fr;
          }
          @media (max-width: 1080px) {
            grid-template-columns: 90px 1fr 80px;
            &.socialLoginWarning {
              grid-template-columns: 90px 1fr;
            }
          }
          @media (max-width: 420px) {
            grid-template-columns: 70px 1fr 70px;
            &.socialLoginWarning {
              grid-template-columns: 70px 1fr;
            }
          }
          > input {
            width: 90%;
            height: 100%;
            border: none;
            outline: none;
            background-color: transparent;
            border-bottom: 2px solid #603224;
            @media (max-width: 420px) {
              width: 100%;
            }
          }
          > button {
            background-color: rgba(255, 255, 255, 0.3);
            color: #603224;
            padding: 8px;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
          }
        }
        #myInfoDetailBtnWrap {
          width: 350px;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 70px;
          column-gap: 10px;
          @media (max-width: 420px) {
            width: 100%;
          }
          > p {
            display: grid;
            place-items: center;
            word-break: keep-all;
          }
          > button {
            background-color: #ff6d6d;
            color: #000;
            padding: 8px;
            font-size: 13px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            color: #fff;
          }
        }
      }
    }
  }
`;

export const MypageChefEditContent = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: 400px 1fr;
  row-gap: 50px;
  width: 100%;
  height: 100%;
  @media (max-width: 1080px) {
    grid-template-rows: 430px 1fr;
  }
  @media (max-width: 767px) {
    grid-template-rows: 730px 1fr;
  }
  @media (max-width: 420px) {
    grid-template-rows: 930px 1fr;
  }
  > #chefEditIntro {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: 300px 1fr;
    max-width: 1080px;
    row-gap: 20px;
    column-gap: 10px;
    @media (max-width: 1080px) {
      grid-template-columns: 250px 1fr;
    }
    @media (max-width: 767px) {
      grid-template-rows: 50px 280px 1fr;
      grid-template-columns: 2fr 1fr;
    }
    h2 {
      font-size: 25px;
      display: grid;
      place-items: center left;
      border-bottom: 2px solid #fff;
      @media (max-width: 420px) {
        font-size: 20px;
      }
      @media (max-width: 300px) {
        place-items: center;
      }
    }
    #chefEditIntroSaveBtn {
      display: grid;
      place-items: center right;
      button {
        background-color: rgba(255, 255, 255, 0.3);
        color: #fff;
        width: 100px;
        height: 100%;
        display: grid;
        place-items: center;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    #chefEditIntroPic {
      display: grid;
      place-items: center;
      grid-template-rows: 1fr 30px;
      row-gap: 20px;
      @media (max-width: 767px) {
        grid-row: 2/2;
        grid-column: 1/3;
      }
      img {
        width: 250px;
        height: 250px;
        border-radius: 5px;
        @media (max-width: 1080px) {
          width: 230px;
          height: 230px;
        }
      }
      label {
        background-color: rgba(255, 255, 255, 0.3);
        color: #fff;
        width: 100px;
        padding: 8px;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
      }
      #chefPicUpload {
        opacity: 0;
        position: absolute;
      }
    }
    #chefEditIntroText {
      display: grid;
      place-items: center;
      grid-template-rows: 15px 50px repeat(3, 1fr);
      grid-auto-rows: 20px;
      grid-template-columns: 1fr 1fr;
      row-gap: 10px;
      @media (max-width: 767px) {
        grid-row: 3/3;
        grid-column: 1/3;
      }
      #chefEditDirection {
        width: 100%;
        height: 100%;
        grid-row: 1/1;
        grid-column: 1/3;
        text-align: left;
        ::before {
          content: '* ';
        }
      }
      .chefEditInfoWrap {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        grid-template-columns: 80px 1fr;
        column-gap: 10px;
        font-size: 16px;
        input,
        textarea {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          border: none;
          outline: none;
          background-color: rgba(255, 255, 255, 0.3);
          color: #fff;
          font-size: 16px;
          font-family: 'Chosunilbo_myungjo', 'ChosunKm';
          font-size: 13px;
          line-height: 20px;
          padding-left: 10px;
        }
        input::placeholder,
        textarea::placeholder {
          color: #fff;
        }
        select {
          width: 100%;
          height: 80%;
          border: none;
          outline: none;
          background-color: transparent;
          border-bottom: 2px solid #fff;
          color: #fff;
          option {
            background-color: #603224;
          }
        }
        &:nth-child(2) {
          grid-row: 2/2;
          grid-column: 1/3;
          grid-template-columns: 80px 1fr 100px;
          > input {
            height: 80%;
          }
        }
        &:nth-child(3) {
          grid-row: 3/3;
          grid-column: 1/3;
        }
        &:nth-child(4) {
          grid-row: 4/4;
          grid-column: 1/3;
        }
        &:nth-child(5) {
          grid-row: 5/5;
          grid-column: 1/3;
        }
      }
      #chefEditWarning {
        width: 100%;
        height: 100%;
        grid-row: 6/6;
        grid-column: 1/3;
        text-align: center;
      }
    }
  }
  > #chefEditInfo {
    width: 100%;
    max-width: 1080px;
    height: auto;
    display: grid;
    place-items: center;
    #chefCourseInfo {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: 50px 300px 1fr;
      row-gap: 10px;
      @media (max-width: 420px) {
        grid-template-rows: 50px 450px 1fr;
      }
      h2 {
        width: 280px;
        font-size: 25px;
        display: grid;
        place-items: center left;
        border-bottom: 2px solid #fff;
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
          @media (max-width: 420px) {
            grid-template-rows: 40px 40px 40px 40px 1fr;
            grid-template-columns: 1fr 1fr;
          }
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
              border-radius: 5px;
              border: none;
              outline: none;
              padding: 8px;
              box-sizing: border-box;
            }

            @media (max-width: 420px) {
              grid-template-columns: 70px 1fr;
              &:nth-child(1) {
                grid-row: 1/1;
                grid-column: 1/3;
              }
              &:nth-child(2) {
                grid-row: 2/2;
                grid-column: 1/3;
              }
              &:nth-child(3) {
                grid-row: 3/3;
                grid-column: 1/3;
              }
              &:nth-child(4) {
                grid-row: 4/4;
                grid-column: 1/3;
              }
            }
          }
          textarea {
            width: 100%;
            height: 100%;
            grid-column: 1 / 3;
            grid-row: 3 / 4;
            border-radius: 5px;
            border: none;
            outline: none;
            @media (max-width: 420px) {
              grid-row: 5/5;
              grid-column: 1/3;
            }
          }
          textarea::placeholder {
            padding-left: 10px;
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
        #noCourseContent {
          width: 100%;
          height: 140px;
          display: grid;
          place-items: center;
        }
        .chefCourseInfoData {
          height: 250px;
          display: grid;
          grid-template-rows: 40px 40px 40px 1fr;
          grid-auto-rows: 20px;
          row-gap: 5px;
          column-gap: 10px;
          grid-template-columns: 1fr 1fr;
          background-color: #dbb89a;
          color: #603224;
          border-radius: 5px;
          @media (max-width: 420px) {
            grid-template-rows: 40px 40px 40px 40px 40px 1fr;
            height: 450px;
          }
          .chefCourseInfoItem {
            display: grid;
            place-items: center;
            grid-template-columns: 90px 1fr;
            column-gap: 10px;
            @media (max-width: 420px) {
              &:nth-child(1) {
                grid-column: 1 / 3;
                grid-row: 3 / 3;
              }
              &:nth-child(2) {
                grid-column: 1 / 3;
                grid-row: 2 / 2;
              }
              &:nth-child(3) {
                grid-column: 1 / 3;
                grid-row: 3 / 3;
              }
              &:nth-child(4) {
                grid-column: 1 / 3;
                grid-row: 4 / 4;
              }
              &:nth-child(5) {
                grid-column: 1 / 3;
                grid-row: 5 / 5;
              }
            }

            p,
            input {
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
            display: grid;
            place-items: center;
            padding: 15px;
            @media (max-width: 420px) {
              grid-row: 6 / 6;
            }
          }
          .chefCourseInfoBtn {
            grid-column: 1 / 3;
            grid-row: 1 / 1;
            display: grid;
            place-items: center right;
            .chefCourseInfoBtnWrap {
              width: 220px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              column-gap: 10px;
              button {
                background-color: rgba(255, 255, 255, 0.3);
                color: #603224;
                width: 100px;
                padding: 8px;
                font-size: 14px;
                border-radius: 5px;
                cursor: pointer;
              }
            }
          }
          #editErrorMsg {
            grid-column: 1 / 3;
            grid-row: 5 / 5;
            @media (max-width: 420px) {
              grid-row: 7 / 7;
            }
          }
        }
      }
      /* #chefCourseSaveBtn {
        > button {
          background-color: rgba(255, 255, 255, 0.3);
          color: #fff;
          width: 100px;
          padding: 8px;
          font-size: 14px;
          border-radius: 5px;
          cursor: pointer;
        }
      } */
    }
  }
`;
