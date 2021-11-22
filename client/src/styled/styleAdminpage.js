import styled from 'styled-components';

export const AdminpageGrid = styled.article`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  background-color: #dbb89a;
  > #adminpageGridWrap {
    width: 100%;
    max-width: 1400px;
    height: 800px;
    padding: 80px 0 50px;
    display: grid;
    grid-template-columns: 100px 1fr;
    column-gap: 25px;
    min-width: 280px;
    font-size: 16px;
    @media (max-width: 430px) {
      grid-template-columns: none;
      grid-template-rows: 50px 800px;
      row-gap: 20px;
      font-size: 14px;
    }
    > ul {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      @media (max-width: 430px) {
        grid-template-rows: none;
        grid-template-columns: repeat(3, 1fr);
      }
      > li {
        display: grid;
        place-items: center;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        word-break: keep-all;
        @media (max-width: 430px) {
          border-bottom-left-radius: 0px;
          border-top-right-radius: 10px;
        }
        &.adminSelected {
          background-color: #603224;
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
