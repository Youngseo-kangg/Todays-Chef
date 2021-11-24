import styled from 'styled-components';

export const AdminpageGrid = styled.article`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  background-color: #dbb89a;
  > #adminpageGridWrap {
    width: 90%;
    max-width: 1400px;
    height: auto;
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
        &.adminSelected {
          background-color: rgba(96, 50, 36, 0.5);
          color: #fff;
        }
      }
    }
    > #adminPageContent {
      display: grid;
      place-items: center;
    }
  }
`;
export const AdminPageContent = styled.div`
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
  }
`;
export const AdminBechef = styled.article`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  min-height: 800px;
`;

export const AdminChef = styled.article`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  min-height: 800px;
`;

export const AdminContent = styled.article`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-rows: 40px 1fr 16px;
  row-gap: 20px;
  > #adminReviewFilterWrap,
  #adminChefFilterWrap {
    display: grid;
    place-items: center end;
    #adminReviewFilter,
    #adminChefFilter {
      display: flex;
      justify-content: space-between;
      /* width: 210px; */
      height: 100%;
      @media (max-width: 420px) {
        margin: 0 auto;
      }
      #adminChefCuisineFilter,
      #adminReviewCuisineFilter {
        width: 100px;
        border: none;
        outline: none;
        background-color: transparent;
        color: #fff;
        border-bottom: 2px solid #fff;
        > option {
          background-color: rgba(96, 50, 36, 0.5);
        }
      }
    }
  }
  > #adminReviewContentWrap,
  #adminChefContentWrap,
  #adminBechefContentWrap {
    display: grid;
    grid-template-rows: 25px 1fr;
    row-gap: 20px;
    @media (max-width: 767px) {
      grid-template-rows: 18px 1fr;
    }
    > h2 {
      font-size: 25px;
      line-height: 25px;
      text-align: left;
      @media (max-width: 767px) {
        font-size: 18px;
        line-height: 18px;
        margin: none;
      }
      @media (max-width: 420px) {
        margin: 0 auto;
      }
    }
    > ul {
      display: grid;
      grid-template-rows: 1fr;
      row-gap: 12px;
      grid-auto-rows: 1fr;
      li.adminReviewContent {
        display: grid;
        row-gap: 5px;
        grid-template-rows: 40px 1fr;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        > .adminReviewInfo {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          place-items: center;
          button {
            background-color: rgba(255, 255, 255, 0.3);
            color: #fff;
            padding: 8px;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
          }
        }
        > p {
          display: grid;
          place-items: center start;
          padding: 15px;
          min-height: 150px;
          @media (max-width: 420px) {
            padding: 5px;
          }
        }
      }
      li.adminChefContent {
        grid-template-rows: none;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        > .adminChefInfo {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 130px 5fr 1fr 1fr;
          @media (max-width: 767px) {
            grid-template-columns: 100px 2fr 1fr 1fr;
          }
          @media (max-width: 420px) {
            grid-template-columns: 50px 2fr 1fr 1fr;
          }
          > * {
            display: grid;
            place-items: center;
          }
          button {
            width: 50px;
            height: 30px;
            background-color: rgba(255, 255, 255, 0.3);
            color: #fff;
            padding: 8px;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
          }
          .adminChefPicWrap > img {
            width: 120px;
            height: 120px;
            border-radius: 10px;
            @media (max-width: 767px) {
              width: 100px;
              height: 100px;
            }
            @media (max-width: 420px) {
              width: 50px;
              height: 50px;
            }
          }
        }
      }
      li.adminBechefContent {
        height: 60px;
        grid-template-rows: none;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        @media (max-width: 420px) {
          height: 80px;
        }
        > * {
          display: grid;
          place-items: center;
        }
        > .adminBechefInfo {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          @media (max-width: 420px) {
            grid-template-columns: none;
            grid-template-rows: repeat(2, 1fr);
          }
          p {
            height: 30px;
            display: grid;
            place-items: center;
          }
          .adminBechefBtnWrap {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            button {
              width: 50px;
              height: 30px;
              background-color: rgba(255, 255, 255, 0.3);
              color: #fff;
              padding: 8px;
              font-size: 14px;
              border-radius: 5px;
              cursor: pointer;
            }
            button:nth-of-type(1) {
              width: 60px;
              padding: 0px;
            }
          }
        }
      }
      li.noAdminReviewContent,
      li.noAdminChefContent,
      li.noAdminBechefContent {
        width: 100%;
        grid-template-rows: none;
        height: 150px;
        display: grid;
        place-items: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
