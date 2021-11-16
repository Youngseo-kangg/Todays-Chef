import styled from 'styled-components';
import DatePicker from 'react-datepicker';

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
  > * {
    border: 1px solid red;
    box-sizing: border-box;
  }
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
    width: calc(${(props) => props.width || 0}*20%);
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
  background-color: #dbb89a;
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
`;

export const ReservNotice = styled.div`
  display: grid;
  place-items: center;
  > #reservationNotice {
    width: 500px;
    height: auto;
    word-break: keep-all;
    padding: 10px;
    box-sizing: border-box;
    @media screen and (max-width: 767px) {
      width: 100%;
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
export const ReservDate = styled.div`
  background-color: pink;
`;
export const CustomDatePicker = styled(DatePicker)``;
export const ReservInfo = styled.div`
  background-color: pink;
`;
export const ReservPayment = styled.div`
  background-color: pink;
`;
export const ReservDone = styled.div`
  background-color: pink;
`;
