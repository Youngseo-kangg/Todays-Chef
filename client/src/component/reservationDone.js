import { ReservationWrap, ReservDone } from '../styled/styleReservation';

function ReservationDone({ setMakeReservation }) {
  return (
    <ReservationWrap>
      <button onClick={() => setMakeReservation(3)}>&lt;</button>
      <ReservDone>this is reservationDone(5단계)</ReservDone>
      <button>&gt;</button>
    </ReservationWrap>
  );
}

export default ReservationDone;
