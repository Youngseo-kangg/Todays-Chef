import { ReservInfo } from '../styled/styleReservation';

function ReservationInfo({ setMakeReservation }) {
  return (
    <ReservInfo>
      <button onClick={() => setMakeReservation(1)}>&lt;</button>
      <div>this is reservationInfo(3단계)</div>
      <button onClick={() => setMakeReservation(3)}>&gt;</button>
    </ReservInfo>
  );
}

export default ReservationInfo;
