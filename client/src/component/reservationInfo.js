import { ReservationWrap, ReservInfo } from '../styled/styleReservation';

function ReservationInfo({ setMakeReservation }) {
  return (
    <ReservationWrap>
      <button onClick={() => setMakeReservation(1)}>&lt;</button>
      <ReservInfo>
        <input type='text' placeholder='화구 갯수' />
        <input type='text' placeholder='오븐 여부' />
        <input type='text' placeholder='알러지 식품' />
        <textarea type='text' placeholder='셰프에게 전달할 코멘트' />
      </ReservInfo>
      <button onClick={() => setMakeReservation(3)}>&gt;</button>
    </ReservationWrap>
  );
}

export default ReservationInfo;
