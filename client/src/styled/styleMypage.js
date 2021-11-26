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

export const MyPageContent = styled.div`
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

export const MypageContent = styled.article`
  width: 90%;
  height: 100%;
  display: grid;
  /* grid-template-rows: 40px 1fr 16px; */
  grid-template-rows: 1fr;
  row-gap: 20px;
  border: 1px solid red;
`;
