import styled from 'styled-components';

export const FindChefGrid = styled.div`
  padding-top: 80px;
  display: grid;
  grid-template-rows: 200px 750px;
  row-gap: 50px;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    /* grid-template-rows: 250px 750px; */
  }
  @media (max-width: 430px) {
    grid-template-rows: 250px 750px;
  }
`;

export const SelectCuisine = styled.div`
  border: 1px solid red;
  display: grid;
  place-items: center;
  #cuisineChoiceWrap {
    width: 90%;
    height: 80px;
    border: 1px solid #fff;
    display: flex;
    @media (max-width: 767px) {
      height: 160px;
      flex-direction: column;
    }
    @media (max-width: 430px) {
      height: 240px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      border: 1px solid blue;
      width: 100%;
      height: 100%;
      @media (max-width: 767px) {
        :nth-child(1) {
          margin-bottom: 10px;
        }
      }
      @media (max-width: 430px) {
        :nth-child(1) {
          margin-bottom: 0px;
        }
      }
      li {
        border: 1px solid blue;
        width: calc(100% / 2 - 20px);
        @media (max-width: 430px) {
          width: 100%;
        }
      }
    }
  }
`;

export const ChefList = styled.div`
  border: 1px solid red;
`;
