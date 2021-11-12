import { ReservDate } from '../styled/styleReservation';

function ReservationDate({ setMakeReservation }) {
  return (
    <ReservDate>
      <button onClick={() => setMakeReservation(0)}>&lt;</button>
      <div>this is reservationDate(2단계)</div>
      <button onClick={() => setMakeReservation(2)}>&gt;</button>
    </ReservDate>
  );
}

export default ReservationDate;
