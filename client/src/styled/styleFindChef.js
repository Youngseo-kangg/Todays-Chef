import styled from 'styled-components';

export const FindChefGrid = styled.article`
  display: grid;
  grid-template-rows: 300px 1fr;
  row-gap: 50px;
  padding-bottom: 50px;
  min-width: 280px;
  background-color: rgba(219, 184, 154, 0.4);
  @media (max-width: 767px) {
    grid-template-rows: 380px 1fr;
  }
  @media (max-width: 430px) {
    grid-template-rows: 460px 1fr;
  }
`;

export const SelectCuisine = styled.div`
  background-color: #dbb89a;
  display: grid;
  place-items: center;
  #cuisineChoiceWrap {
    width: 90%;
    max-width: 1400px;
    height: 80px;
    /* border: 1px solid #fff; */
    box-sizing: border-box;
    display: flex;
    @media (max-width: 767px) {
      height: 170px;
      flex-direction: column;
    }
    @media (max-width: 430px) {
      width: 95%;
      height: 270px;
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
        /* border: 1px solid blue; */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        background-color: rgba(255, 255, 255, 0.5);
        box-sizing: border-box;
        border-radius: 10px;
        width: calc(100% / 4 - 20px);
        transition: 0.3s;
        cursor: pointer;
        @media (max-width: 767px) {
          width: calc(100% / 2 - 10px);
          :nth-child(1),
          :nth-child(2) {
            margin-bottom: 10px;
          }
        }
        @media (max-width: 430px) {
          width: 100%;
          height: 60px;
          :nth-child(3) {
            margin-bottom: 10px;
          }
        }
        :hover {
          background-color: #603224;
          color: #fff;
        }
        > .cuisineChoice {
          display: flex;
          justify-content: space-evenly;
          img {
            width: 80px;
            height: 80px;
            padding: 10px;
            @media (max-width: 430px) {
              width: 60px;
              height: 60px;
              padding: 5px;
            }
          }
          h2 {
            width: calc(100% - 80px);
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: 430px) {
              width: calc(100% - 160px);
            }
          }
        }
      }
    }
  }
`;

export const ChefList = styled.section`
  box-sizing: border-box;
  display: grid;
  place-items: center;

  #chefListWrap {
    box-sizing: border-box;
    width: 95%;
    max-width: 1400px;
    display: grid;
    grid-template-rows: 35px 1fr 20px;
    grid-row-gap: 25px;
    @media (max-width: 767px) {
      grid-template-rows: 35px 1fr 20px;
    }
    @media (max-width: 430px) {
      width: 100%;
      grid-template-rows: 30px 1fr 20px;
    }
  }
`;

export const ChefListTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  > h2 {
    font-size: 35px;
    text-align: left;
    @media (max-width: 430px) {
      font-size: 30px;
    }
  }
  > select {
    width: 100px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 5px;
  }
`;

export const ChefItemList = styled.div`
  display: flex;
  ul {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    row-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    column-gap: 10px;
    @media (max-width: 767px) {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 420px) {
      grid-template-columns: 1fr;
    }
    li {
      box-sizing: border-box;
      width: 100%;
      cursor: pointer;
      display: grid;
      grid-template-rows: 300px 30px 20px 20px;
      row-gap: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      transition: 0.3s;
      background-color: #fff;
      :hover {
        transform: translateY(-10px);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
      }
      > h3 {
        width: 60%;
        border-bottom: 2px solid #dbb89a;
        display: grid;
        place-items: center;
        box-sizing: border-box;
        margin: 0 auto;
      }
      > span {
        display: grid;
        place-items: center;
      }
      > .chefPic {
        /* border: 1px solid red; */
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
        img {
          width: 230px;
          height: 230px;
          border-radius: 100%;
          @media (max-width: 1080px) {
            width: 160px;
            height: 160px;
          }
          @media (max-width: 767px) {
            width: 180px;
            height: 180px;
          }
          @media (max-width: 420px) {
            width: 200px;
            height: 200px;
          }
        }
      }
    }
  }
`;
export const ChefStar = styled.div`
  width: 100px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  font-size: 18px;
  place-items: center;
  > div {
    > img {
      padding: 2px;
      width: 20px;
      height: 20px;
    }
  }
`;

export const PagenationList = styled.div`
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
    > li {
      cursor: pointer;
      display: grid;
      place-items: center;
    }
  }
`;
