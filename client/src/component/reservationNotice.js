import { ReservationWrap, ReservNotice } from '../styled/styleReservation';

function ReservationNotice({ titleInfo, setMakeReservation }) {
  return (
    <ReservationWrap>
      <div className='reservationWrapper'>
        <button>&lt;</button>
        <ReservNotice>
          <div id='reservationNotice'>
            <h3>
              {titleInfo.chefName || ''} 셰프 님의{' '}
              {titleInfo.course.courseName || ''}코스에 대한 예약입니다.
            </h3>
            <p>코스는 1시간 ~ 2시간 내외로 진행 됩니다.</p>
            <p>예약 시간 1시간 전에 셰프님이 도착하여 준비 할 예정입니다.</p>
            <p>예약은 7일 전까지 위약금 없이 취소 가능합니다.</p>
            <p>예약은 7일 전까지 위약금 없이 취소 가능합니다.</p>
            <p>예약은 7일 전까지 위약금 없이 취소 가능합니다.</p>
            <p>
              불편하신 사항이나 문제가 있으신 경우엔 고객 센터로 문의 바랍니다.
            </p>
          </div>
        </ReservNotice>
        <button onClick={() => setMakeReservation(1)}>&gt;</button>
      </div>
    </ReservationWrap>
  );
}

export default ReservationNotice;
