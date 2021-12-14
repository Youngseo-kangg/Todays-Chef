import { ReservationWrap, ReservNotice } from '../styled/styleReservation';

function ReservationDone() {
  return (
    <ReservationWrap className='reservDone'>
      <ReservNotice>
        <div className='reservDoneNotice'>
          <h3>예약이 완료되었습니다.</h3>
          <p>취소는 마이페이지에서 가능합니다.</p>
        </div>
      </ReservNotice>
    </ReservationWrap>
  );
}

export default ReservationDone;
