import { ReservationWrap, ReservNotice } from '../styled/styleReservation';

function ReservationDone({ setMakeReservation }) {
  return (
    <ReservationWrap id='reservDone'>
      <ReservNotice>
        <div id='reservDoneNotice'>
          <h3>예약이 완료되었습니다.</h3>
          <p>변경은 마이페이지에서 가능합니다.</p>
        </div>
      </ReservNotice>
    </ReservationWrap>
  );
}

export default ReservationDone;
