import { ReservDone } from '../styled/styleReservation';

function ReservationDone({ setMakeReservation }) {
  return (
    <ReservDone>
      <button onClick={() => setMakeReservation(3)}>&lt;</button>
      <div>this is reservationDone(5단계)</div>
      <button>&gt;</button>
    </ReservDone>
  );
}

export default ReservationDone;
