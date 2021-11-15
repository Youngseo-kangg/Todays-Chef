import styled from 'styled-components';

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
  border: 1px solid red;
  padding-top: 80px;
  background-color: #dbb89a;
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
    width: 90%;
    height: 100%;
  }
`;

export const ReservNotice = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
`;

export const ReservDate = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
`;
export const ReservInfo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
`;
export const ReservPayment = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
`;
export const ReservDone = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
`;
