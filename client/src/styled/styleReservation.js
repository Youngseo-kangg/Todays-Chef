import styled from 'styled-components';
import basic_background from '../todaysChefIMG/basic_background.jpg';
export const ReservationGrid = styled.article`
  display: grid;
  grid-template-rows: 280px 30px calc(100vh - 80px);
  row-gap: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    row-gap: 30px;
  }
  @media screen and (max-width: 420px) {
    row-gap: 15px;
  }
  /* > * {
    border: 1px solid red;
    box-sizing: border-box;
  } */
`;

export const ReservationTitle = styled.section`
  padding-top: 80px;
  background-color: #dbb89a;
  display: grid;
  place-items: center;
  > h2 {
    font-size: 30px;
  }
`;

export const ReservationGraph = styled.section`
  display: grid;
  place-items: center;
  #reservationProgress {
    background-color: #eee;
    width: 80%;
    height: 100%;
    border-radius: 100px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 767px) {
      width: 90%;
    }
    @media screen and (max-width: 420px) {
      width: 100%;
    }
  }
  #reservationBar {
    width: calc(${(props) => props.width + 1 || 0}*20%);
    transition: all 0.3s;
    height: 100%;
    border-radius: 100px;
    background-color: #603224;
  }
`;

export const ReservationDesc = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  > form {
    width: 100%;
    height: 100%;
  }
`;

export const ReservationWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  background: url(${basic_background}) center;
  &.none {
    display: none;
  }
  button {
    display: block;
    background-color: transparent;
    font-size: 45px;
    cursor: pointer;
    transition: all 0.2s;
  }
  button:hover {
    color: #fff;
  }
  > .reservScheduleAndInfo {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }
`;

export const ReservNotice = styled.div`
  display: grid;
  place-items: center;
  > #reservationNotice {
    width: 600px;
    height: 30%;
    min-height: 260px;
    word-break: keep-all;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    @media screen and (max-width: 767px) {
      width: 100%;
      height: auto;
    }
    h3 {
      font-size: 25px;
      line-height: 30px;
      padding-bottom: 5px;
      border-bottom: 2px solid #fff;
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 10px;
      line-height: 20px;
      text-align: left;
    }
    p:before {
      content: '- ';
    }
  }
`;

export const ReservDateAndInfo = styled.div`
  width: 70%;
  height: auto;
  max-width: 700px;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-template-rows: 25px 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  row-gap: 15px;
  word-break: keep-all;
  background-color: rgba(255, 255, 255, 0.6);
  &#reservInfo {
    min-height: 300px;
    grid-template-rows: 25px 50px 50px 50px 1fr;
    grid-auto-rows: 50px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }
  h2 {
    font-size: 25px;
  }
  .reservInputWrap {
    width: 100%;
    height: 50px;
    display: grid;
    place-items: center;
    &.large {
      height: 80px;
    }
    .reservAlert {
      height: 20px;
      line-height: 20px;
      color: red;
    }
    @media screen and (max-width: 420px) {
      height: 70px;
    }
  }

  .reservInput {
    /* border: 1px solid red; */
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 130px 1fr;
    @media screen and (max-width: 420px) {
      height: 70px;
      grid-template-columns: none;
      grid-template-rows: 1fr 1fr;
    }
    > label {
      display: grid;
      place-items: center;
      line-height: 1.5;
    }
    > input,
    select {
      height: 30px;
      outline: none;
      border: none;
    }
    > textarea {
      height: 80px;
      outline: none;
      border: none;
    }
    #reservMainAddress {
      cursor: pointer;
    }
  }
`;

export const ReservPayment = styled.div`
  background-color: pink;
`;
export const ReservDone = styled.div`
  background-color: pink;
`;
