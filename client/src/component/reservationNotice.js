import { ReservationWrap, ReservNotice } from '../styled/styleReservation';

function ReservationNotice({ setMakeReservation }) {
  return (
    <ReservationWrap>
      <button>&lt;</button>
      <ReservNotice>
        <h2> ~~셰프님의 ~~코스에 대한 예약입니다.</h2>
        <p>예약은 7일 전까지 위약금 없이 취소 가능합니다.</p>
        <p>예약은 7일 전까지 위약금 없이 취소 가능합니다.</p>
        <p>예약은 7일 전까지 위약금 없이 취소 가능합니다.</p>
        <p>예약은 7일 전까지 위약금 없이 취소 가능합니다.</p>
        <p>예약은 7일 전까지 위약금 없이 취소 가능합니다.</p>
        <p>불편하신 사항이나 문제가 있으신 경우엔 고객 센터로 문의 바랍니다.</p>
      </ReservNotice>
      <button onClick={() => setMakeReservation(1)}>&gt;</button>
    </ReservationWrap>
  );
}

export default ReservationNotice;
