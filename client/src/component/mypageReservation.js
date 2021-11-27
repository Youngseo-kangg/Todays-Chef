import { MypageReservContent, MyReservCalander } from '../styled/styleMypage';

function MypageReservation() {
  return (
    <MypageReservContent>
      <div id='myReservationTitleWrap'>
        <div id='myReservationTitle'>
          <div id='myReservationArrow'>&lt;</div>
          <div id='myReservationMonth'>
            <h2>2021.01월</h2>
          </div>
          <div id='myReservationArrow'>&gt;</div>
        </div>
      </div>
      <div id='myReservationCalanderWrap'>
        <MyReservCalander>
          <div id='myReservationCalander'>진짜 달력</div>
        </MyReservCalander>
      </div>
      <div id='myReservationInfo'>
        <div id='myReservationDate'>2021-01-01</div>
        <div id='myReservationData'>XXX셰프의 ~~~~코스 (2인), 01:00</div>
        <div id='deleteReserve'>
          <button>취소하기</button>
        </div>
      </div>
    </MypageReservContent>
  );
}

export default MypageReservation;
