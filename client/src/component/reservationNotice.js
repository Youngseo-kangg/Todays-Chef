import { ReservNotice } from '../styled/styleReservation';

function ReservationNotice({ setMakeReservation }) {
  return (
    <ReservNotice>
      <button>&lt;</button>
      <div>this is reservationNotice(1단계)</div>
      <button onClick={() => setMakeReservation(1)}>&gt;</button>
    </ReservNotice>
  );
}

export default ReservationNotice;
