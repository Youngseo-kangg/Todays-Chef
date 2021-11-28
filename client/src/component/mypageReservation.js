import { useState } from 'react';
import { MypageReservContent, MyReservCalander } from '../styled/styleMypage';
import { ko } from 'date-fns/esm/locale';
import {
  addDays,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  startOfDay,
  addMonths,
  subMonths,
  format,
  getMonth,
} from 'date-fns';
import { useSelector } from 'react-redux';
import { reservationStatus } from '../features/reservation/reservation';

function MypageReservation() {
  const reservationState = useSelector(reservationStatus);
  // TODO: 달력만들기
  // 달력 만들기는 https://www.youtube.com/watch?v=mfG4BVCRkEQ 를 참고했음
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  // const startDate = startOfWeek(startOfMonth(selectedDate)); // 이번달 시작 날짜
  // const endDate = endOfWeek(endOfMonth(selectedDate)); // 이번달 마지막 날짜
  // 한주씩 구하는 함수 takeWeek
  const takeWeek = (start = new Date()) => {
    let date = startOfWeek(startOfDay(start)); // a. 주어진 날짜에서 날짜가 시작하는 지점을 찾고 b.그 지점을 사용해서 그 주의 시작날 찾음

    return function () {
      const week = [...Array(7)].map((_, index) => addDays(date, index)); // addDays -> date 인자에서 시작해서 index만큼 더해라
      date = addDays(week[6], 1); // week 가장 마지막 날짜 + 1 하면 그 다음주 날짜가 됨(takeWeek 호출할 때 마다 다음주, 다다음주를 보여줘야 하니 date 재설정해주는 것)
      return week;
    };
  };
  // const weekGenerator = takeWeek(); // 함수 찍힘
  // weekGenerator(); // 11/28~12/04
  // console.log('weekGenerator(): ', weekGenerator()); // 12/05~12/11 (++1주) ... 해당하는 달이 몇주인지 알아내면 그만큼 반복해서 takeWeek 쓰면 됨

  // 한달씩 구하는 함수 takeMonth
  const takeMonth = (start = new Date()) => {
    let month = [];
    let date = start;

    function lastDayOfRange(range) {
      return range[range.length - 1][6];
    }

    return function () {
      const weekGenerated = takeWeek(startOfMonth(date));
      const endDate = startOfDay(endOfWeek(endOfMonth(date)));
      month.push(weekGenerated()); // date의 해당 달의 첫 주가 나옴

      while (lastDayOfRange(month) < endDate) {
        month.push(weekGenerated());
      }
      const range = month;
      month = [];
      date = addDays(lastDayOfRange(range), 1);
      return range;
    };
  };
  // console.log('takeMonth: ', takeMonth); // 함수 나옴
  // let tm = takeMonth();
  // console.log('tm(): ', tm()); // [[첫째주의 첫째날, ...],...,[...마지막 주의 마지막날]]
  // console.log('tm(): ', tm()); // 58줄의 다음달,...

  const month = takeMonth(); // 달 구하는 함수 자체
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  const data = takeMonth(currentDate)();
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <MypageReservContent>
      <div id='myReservationTitleWrap'>
        <div id='myReservationTitle'>
          <div className='myReservationArrow' onClick={prevMonth}>
            &lt;
          </div>
          <div id='myReservationMonth'>
            <h2>{format(currentDate, 'MM월 yyyy')}</h2>
          </div>
          <div className='myReservationArrow' onClick={nextMonth}>
            &gt;
          </div>
        </div>
      </div>
      <div id='myReservationCalanderWrap'>
        <MyReservCalander>
          <div id='myReservationCalander'>
            <div id='weekDay'>
              {weekDays.map((day) => (
                <div className='dayName'>{day}</div>
              ))}
            </div>
            {data.map((week, index) => (
              <div className='calanderWeek' key={index}>
                {week.map((day) => (
                  <div
                    className={
                      getMonth(day) !== getMonth(currentDate)
                        ? 'calanderDay'
                        : 'calanderDay thisMonth'
                    }
                    onClick={() => setSelectedDate(day)}
                    key={day}
                  >
                    <div>{format(day, 'dd')}</div>
                    {reservationState.includes(day) ? (
                      <span className='reservedDate'></span>
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </MyReservCalander>
      </div>
      <div id='myReservationInfo'>
        <div id='myReservationDate'>{format(selectedDate, 'yyyy-MM-dd')}</div>
        <div id='myReservationData'>
          {reservationState.includes(selectedDate)
            ? '예약데이터'
            : '예약 내역이 없습니다.'}
        </div>
        <div id='deleteReserve'>
          <button>취소하기</button>
        </div>
      </div>
    </MypageReservContent>
  );
}

export default MypageReservation;
