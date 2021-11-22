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

export const AdminReview = styled.article`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-rows: 40px 1fr 16px;
  row-gap: 20px;
  > #adminReviewFilterWrap {
    display: grid;
    place-items: center end;
    #adminReviewFilter {
      display: flex;
      justify-content: space-between;
      /* width: 210px; */
      height: 100%;
      @media (max-width: 420px) {
        margin: 0 auto;
      }
      #adminCuisineFilter,
      #adminDateFilter {
        width: 100px;
        border: none;
        outline: none;
        background-color: transparent;
        color: #fff;
        border-bottom: 2px solid #fff;
      }
    }
  }
  > #adminReviewContentWrap {
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
      grid-template-rows: repeat(3, 1fr);
      row-gap: 12px;
      grid-auto-rows: 1fr;
      li {
        display: grid;
        row-gap: 5px;
        grid-template-rows: 40px 1fr;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        > .adminReviewInfo {
          display: flex;
          align-items: center;
          justify-content: space-around;
          button {
            background-color: rgba(255, 255, 255, 0.3);
            color: #fff;
            padding: 8px;
            font-size: 14px;
            border-radius: 5px;
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
      li.noAdminReviewContent {
        width: 100%;
        grid-template-rows: none;
        height: 150px;
        display: grid;
        place-items: center;
      }
    }
  }
`;
