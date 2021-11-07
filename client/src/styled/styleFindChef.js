import styled from 'styled-components';

export const FindChefGrid = styled.article`
  padding-top: 80px;
  display: grid;
  grid-template-rows: 200px 510px;
  row-gap: 50px;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    grid-template-rows: 250px 940px;
  }
  @media (max-width: 430px) {
    grid-template-rows: 250px 1770px;
  }
`;

export const SelectCuisine = styled.div`
  border: 1px solid red;
  display: grid;
  place-items: center;
  #cuisineChoiceWrap {
    width: 90%;
    max-width: 1400px;
    height: 80px;
    border: 1px solid #fff;
    box-sizing: border-box;
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
      width: 100%;
      height: 100%;
      @media (max-width: 430px) {
        :nth-child(1) {
          margin-bottom: 0px;
        }
      }

      li {
        border: 1px solid blue;
        box-sizing: border-box;
        width: calc(100% / 4 - 20px);
        @media (max-width: 767px) {
          width: calc(100% / 2 - 10px);
          :nth-child(1),
          :nth-child(2) {
            margin-bottom: 10px;
          }
        }
        @media (max-width: 430px) {
          width: 100%;
          :nth-child(1),
          :nth-child(2) {
            margin-bottom: 0px;
          }
        }
      }
    }
  }
`;

export const ChefList = styled.section`
  border: 1px solid red;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  #chefListWrap {
    border: 1px solid red;
    box-sizing: border-box;
    width: 90%;
    max-width: 1400px;
    display: grid;
    grid-template-rows: 30px 420px 30px;
    grid-row-gap: 15px;
    @media (max-width: 767px) {
      grid-template-rows: 30px 850px 30px;
    }
    @media (max-width: 430px) {
      width: 100%;
      grid-template-rows: 30px 1680px 30px;
    }
  }
`;

export const ChefListTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  > h2 {
    font-size: 30px;
    text-align: left;
  }
  > select {
    width: 100px;
    border: none;
    border-radius: 5px;
  }
`;

export const ChefItemList = styled.div`
  display: flex;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    @media (max-width: 430px) {
      :nth-child(1) {
        margin-bottom: 0px;
      }
    }
    li {
      border: 1px solid blue;
      box-sizing: border-box;
      width: calc(100% / 4 - 20px);
      display: grid;
      grid-template-rows: 8fr 1fr 1fr;
      @media (max-width: 767px) {
        width: calc(100% / 2 - 10px);
        :nth-child(1),
        :nth-child(2) {
          margin-bottom: 10px;
        }
      }
      @media (max-width: 430px) {
        width: 100%;
        :nth-child(1),
        :nth-child(2) {
          margin-bottom: 0px;
        }
      }
      > .chefPic {
        border: 1px solid red;
        display: grid;
        place-items: center;
        img {
          width: 80%;
          height: 80%;
          border-radius: 100%;
        }
      }
    }
  }
`;

export const PagenationList = styled.div`
  border: 1px solid red;
  width: 100%;
  max-width: 1400px;
  height: 100%;
`;
