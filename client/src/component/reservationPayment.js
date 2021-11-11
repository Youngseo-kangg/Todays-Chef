import { ReservPayment } from '../styled/styleReservation';

function ReservationPayment({ setMakeReservation }) {
  return (
    <ReservPayment>
      <button onClick={() => setMakeReservation(2)}>&lt;</button>
      <div>this is reservationPayment(4단계)</div>
      <button onClick={() => setMakeReservation(4)}>&gt;</button>
    </ReservPayment>
  );
}

export default ReservationPayment;
