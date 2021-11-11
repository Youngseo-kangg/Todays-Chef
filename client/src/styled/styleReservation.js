import styled from 'styled-components';

export const ReservationGrid = styled.article`
  display: grid;
  grid-template-rows: 180px 30px calc(100vh - 80px);
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
`;

export const ReservationGraph = styled.section``;

export const ReservationDesc = styled.section``;

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
