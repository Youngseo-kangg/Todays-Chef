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
  parseISO,
} from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteReservation,
  reservationStatus,
} from '../features/reservation/reservation';
import { updateAccessToken, userStatus } from '../features/user/user';
import { openIsDeleteReservModal } from '../features/user/modal';
import { getReservation } from '../features/reservation/reservation';
import { modalStatus } from '../features/user/modal';
import getMonth from 'date-fns/getMonth';

require('dotenv').config();
axios.defaults.withCredentials = true;

function MypageReservation() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const dispatch = useDispatch();
  const history = useHistory();
  const reservationState = useSelector(reservationStatus);
  const userState = useSelector(userStatus);
  const modalState = useSelector(modalStatus);

  // 1. load 되자마자 서버에 get 요청해서 reservation 데이터 다 가져오고, redux reservation 업데이트
  const [selectedDateState, setSelectedDateState] = useState({
    allergy: '',
    burner: 0,
    chefName: '',
    cuisine: '',
    id: 0,
    isOven: false,
    location: '',
    messageToChef: null,
    mobile: '010-0000-0000',
    people: 0,
    rsChefId: 0,
    rsCourseId: 0,
    rsDate: new Date(),
    rsTime: '00:00',
    rsUserId: 0,
  });
  console.log(selectedDateState);

  useEffect(() => {
    if (modalState.isDeleteReservModalOpen === 0) {
      axios
        .get(`${url}/mypage/reservation/user?id=${userState.userId}`, {
          headers: { authorization: `bearer ${userState.accessToken}` },
        })
        .then((result) => {
          console.log(result);
          if (result.data.accessToken) {
            dispatch(
              updateAccessToken({ accessToken: result.data.accessToken })
            );
          }
          setSelectedDateState({
            allergy: '',
            burner: 0,
            chefName: '',
            cuisine: '',
            id: 0,
            isOven: false,
            location: '',
            messageToChef: null,
            mobile: '010-0000-0000',
            people: 0,
            rsChefId: 0,
            rsCourseId: 0,
            rsDate: new Date(),
            rsTime: '00:00',
            rsUserId: 0,
          });
          dispatch(getReservation({ reservationData: result.data.data }));
        });
    }
  }, [modalState.isDeleteReservModalOpen]);

  // 2. 가져온 reservation 데이터 시간 locale:ko로 맞춰서 보여주기 + 정보 보이기 (동그라미로 표시)
  // TODO: 3. 예약 취소 가능하도록 서버에 delete 요청 보내는 함수 구현하기
  // TODO: 3-1. 예약 취소는 요청 잘 가는데 axios 요청 후에는 항상 invalid time value 오류가 나옴 & 새로고침 하면 modal 켜진 상태로 나옴.

  // TODO: 달력만들기
  // 달력 만들기는 https://www.youtube.com/watch?v=mfG4BVCRkEQ 를 참고했음
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  // 한주씩 구하는 함수 takeWeek
  const takeWeek = (start = new Date()) => {
    let date = startOfWeek(startOfDay(start)); // a. 주어진 날짜에서 날짜가 시작하는 지점을 찾고 b.그 지점을 사용해서 그 주의 시작날 찾음

    return function () {
      const week = [...Array(7)].map((_, index) => addDays(date, index)); // addDays -> date 인자에서 시작해서 index만큼 더해라
      date = addDays(week[6], 1); // week 가장 마지막 날짜 + 1 하면 그 다음주 날짜가 됨(takeWeek 호출할 때 마다 다음주, 다다음주를 보여줘야 하니 date 재설정해주는 것)
      return week;
    };
  };

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
  const changeSelected = (day) => {
    setSelectedDate(day);
    let index = reservationState.data
      .map((el) => format(new Date(el.rsDate), 'yyyy-MM-dd'))
      .indexOf(format(new Date(day), 'yyyy-MM-dd'));
    if (index !== -1) {
      setSelectedDateState(reservationState.data[index]);
    } else {
      setSelectedDateState({
        allergy: '',
        burner: 0,
        chefName: '',
        cuisine: '',
        id: 0,
        isOven: false,
        location: '',
        messageToChef: null,
        mobile: '010-0000-0000',
        people: 0,
        rsChefId: 0,
        rsCourseId: 0,
        rsDate: new Date(),
        rsTime: '00:00',
        rsUserId: 0,
      });
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
            <h2>{format(today, 'yyyy년 MM월')}</h2>
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
                    id={day === today ? 'today' : null}
                    onClick={() => changeSelected(day)}
                    key={new Date(day)}
                  >
                    <div>
                      {getDate(new Date(day)) === 1
                        ? format(new Date(day), 'MM/dd')
                        : format(new Date(day), 'dd')}
                    </div>
                    {reservationState.data.map((el) =>
                      format(new Date(el.rsDate), 'yyyy-MM-dd') ===
                      format(new Date(day), 'yyyy-MM-dd') ? (
                        <div className='reservedDate'></div>
                      ) : null
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </MyReservCalander>
      </div>
      <div id='myReservationInfo'>
        <div id='myReservationDate'>{format(selectedDate, 'yyyy-MM-dd')}</div>
        {selectedDateState.id !== 0 ? (
          <>
            <div id='myReservationData'>
              <p>
                {selectedDateState.chefName}의 코스, {selectedDateState.rsTime}
              </p>
              <p>{selectedDateState.location}</p>
            </div>
            <div id='deleteReserve'>
              <button
                onClick={() =>
                  dispatch(
                    openIsDeleteReservModal({ id: selectedDateState.id })
                  )
                }
              >
                취소하기
              </button>
            </div>
          </>
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
