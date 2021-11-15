import { ReservationWrap, ReservPayment } from '../styled/styleReservation';

function ReservationPayment({ setMakeReservation }) {
  return (
    <ReservationWrap>
      <button onClick={() => setMakeReservation(2)}>&lt;</button>
      <ReservPayment>this is reservationPayment(4단계)</ReservPayment>
      <button onClick={() => setMakeReservation(4)}>&gt;</button>
    </ReservationWrap>
  );
}

export default ReservationPayment;
