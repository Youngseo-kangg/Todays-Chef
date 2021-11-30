import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MypageReservContent, MyReservCalander } from '../styled/styleMypage';
import axios from 'axios';
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
  isAfter,
  isBefore,
  getDate,
} from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteReservation,
  reservationStatus,
} from '../features/reservation/reservation';
import { updateAccessToken, userStatus } from '../features/user/user';
import { openIsDeleteReservModal } from '../features/user/modal';
import { getReservation } from '../features/reservation/reservation';
import getMonth from 'date-fns/getMonth';

require('dotenv').config();
axios.defaults.withCredentials = true;

function MypageReservation() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const dispatch = useDispatch();
  const history = useHistory();
  const reservationState = useSelector(reservationStatus);
  const userState = useSelector(userStatus);

  // TODO: 1. load 되자마자 서버에 get 요청해서 reservation 데이터 다 가져오고, redux reservation 업데이트
  useEffect(() => {
    axios
      .get(`${url}/mypage/reservation/user?id=${userState.userId}`, {
        headers: { authorization: `bearer ${userState.accessToken}` },
      })
      .then((result) => {
        console.log(result);
        if (result.data.accessToken) {
          dispatch(updateAccessToken({ accessToken: result.data.accessToken }));
        }
        dispatch(getReservation({ reservationData: result.data.data }));
      });
  }, []);

  // TODO: 2. 가져온 reservation 데이터 시간 locale:ko로 맞춰서 보여주기 + 정보 보이기 (동그라미로 표시)
  // TODO: 3. 예약 취소 가능하도록 서버에 delete 요청 보내는 함수 구현하기

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
  const today = new Date(); // 지금
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const data = takeMonth(currentDate)();

  const nextMonth = () => {
    if (addMonths(currentDate, 1) < addMonths(today, 3)) {
      setCurrentDate(addMonths(currentDate, 1));
    }
  };
  const prevMonth = () => {
    if (
      isBefore(today, subMonths(currentDate, 1)) ||
      getMonth(today) === getMonth(subMonths(currentDate, 1))
    ) {
      console.log(isBefore(today, subMonths(currentDate, 1)));
      console.log(getMonth(today) === getMonth(subMonths(currentDate, 1)));
      setCurrentDate(subMonths(currentDate, 1));
    }
  };

  return (
    <MypageReservContent>
      <div id='myReservationTitleWrap'>
        <div id='myReservationTitle'>
          <div className='myReservationArrow' onClick={prevMonth}>
            &lt;
          </div>
          <div id='myReservationMonth'>
            <h2>{format(currentDate, 'yyyy MM월')}</h2>
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
              {weekDays.map((day, idx) => (
                <div className='dayName' key={idx}>
                  {day}
                </div>
              ))}
            </div>
            {data.map((week, index) => (
              <div className='calanderWeek' key={index}>
                {week.map((day) => (
                  <div
                    className={
                      isAfter(today, day)
                        ? 'calanderDay'
                        : 'calanderDay thisMonth'
                    }
                    id={
                      format(day, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')
                        ? 'today'
                        : null
                    }
                    onClick={
                      isAfter(day, today) ||
                      format(day, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')
                        ? () => {
                            setSelectedDate(day); // 날짜 변경
                          }
                        : null
                    }
                    key={day}
                  >
                    <div>
                      {getDate(day) === 1
                        ? format(day, 'MM/dd')
                        : format(day, 'dd')}
                    </div>
                    {reservationState.data
                      .map((el) => format(new Date(el.rsDate), 'yyyy-MM-dd'))
                      .includes(format(day, 'yyyy-MM-dd')) ? (
                      <div className='reservedDate'></div>
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
        {reservationState.data
          .map((el) => format(new Date(el.rsDate), 'yyyy-MM-dd'))
          .includes(format(selectedDate, 'yyyy-MM-dd')) ? (
          reservationState.data.map((el) => {
            return (
              <>
                <div id='myReservationData'>
                  {userState.isChef ? (
                    <>
                      <p>예약자, 예약 시간, 예약 인원</p>
                      <p>예약자 연락처</p>
                      <p>예약 주소 </p>
                    </>
                  ) : (
                    <>
                      <p>
                        {el.chefName}의 코스, {el.rsTime}, {el.people}명
                      </p>
                      <p>연락처 : {el.mobile}</p>
                      <p>예약 주소 : {el.location}</p>
                    </>
                  )}
                </div>
                <div id='deleteReserve'>
                  <button
                    onClick={() => dispatch(openIsDeleteReservModal(el.id))}
                  >
                    취소하기
                  </button>
                </div>
              </>
            );
          })
        ) : (
          <>
            <div id='myReservationData'>예약 내역이 없습니다.</div>
            <div id='deleteReserve'>
              <button onClick={() => history.push('/findChef')}>
                예약하러 가기
              </button>
            </div>
          </>
        )}
      </div>
    </MypageReservContent>
  );
}

export default MypageReservation;
