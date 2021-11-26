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
  > * {
    width: 100%;
    height: 100%;
    border: 1px solid red;
  }
`;

export const MypageReviewContent = styled.div`
  display: grid;
  grid-template-rows: 350px 1fr;
  row-gap: 20px;
  place-items: center;
  width: 100%;
  height: 100%;
  /* @media (max-width: 420px) {
    grid-template-rows: 400px 1fr;
  } */
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
  border: 1px solid red;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  #mypageEditContentWrap {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    @media (max-width: 767px) {
      grid-template-columns: none;
      grid-template-rows: 300px 1fr;
    }
    #mypageInfoPic {
      img {
        width: 250px;
        height: 250px;
        border-radius: 10px;
      }
      #image_uploads {
        opacity: 0;
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

    form {
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
        > input {
          width: 90%;
          height: 100%;
          background-color: transparent;
          border-bottom: 2px solid #fff;
        }
      }
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
`;
