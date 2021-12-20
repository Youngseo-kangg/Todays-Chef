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
  subDays,
} from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { reservationStatus } from '../features/reservation/reservation';
import { updateAccessToken, userStatus } from '../features/user/user';
import {
  openFailModal,
  openIsNeedReLoginModal,
  openServerErrorModal,
  openIsDeleteReservModal,
} from '../features/user/modal';
import { getReservation } from '../features/reservation/reservation';
import { modalStatus } from '../features/user/modal';
import { chefStatus } from '../features/chef/chef';
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
  const chefState = useSelector(chefStatus);
  // 1. load 되자마자 서버에 get 요청해서 reservation 데이터 다 가져오고, redux reservation 업데이트
  const [selectedDateState, setSelectedDateState] = useState({
    allergy: '',
    burner: 0,
    chefName: '',
    courseName: '',
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
    merchantUid: '',
    receiptUrl: '',
  });
  const [selectedDateStateChef, setSelectedDateStateChef] = useState({
    id: 0,
    people: 0,
    allergy: '',
    location: '',
    mobile: '010-0000-0000',
    rsDate: new Date(),
    rsTime: '00:00',
    isOven: false,
    burner: 0,
    messageToChef: '',
    rsUsrId: 0,
    userNickname: '',
    courseName: '',
    merchantUid: '',
    receiptUrl: '',
  });

  useEffect(() => {
    if (modalState.isDeleteReservModalOpen === 0 && !userState.isChef) {
      axios
        .get(`${url}/mypage/reservation/user?id=${userState.userId}`, {
          headers: { authorization: `bearer ${userState.accessToken}` },
        })
        .then((result) => {
          if (result.data.accessToken) {
            dispatch(
              updateAccessToken({ accessToken: result.data.accessToken })
            );
          }
          setSelectedDateState({
            allergy: '',
            burner: 0,
            chefName: '',
            courseName: '',
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
            merchantUid: '',
            receiptUrl: '',
          });
          dispatch(getReservation({ reservationData: result.data.data }));
        })
        .catch((err) => {
          console.log(err);
          if (err.message === 'Network Error') {
            dispatch(openServerErrorModal());
          } else if (err.response.data.message === 'Send new Login Request') {
            dispatch(openIsNeedReLoginModal());
          }
        });
    } else if (modalState.isDeleteReservModalOpen === 0 && userState.isChef) {
      axios
        .get(`${url}/mypage/reservation/chef?id=${chefState.chefId}`, {
          headers: { authorization: `bearer ${userState.accessToken}` },
        })
        .then((result) => {
          if (result.data.accessToken) {
            dispatch(
              updateAccessToken({ accessToken: result.data.accessToken })
            );
          }
          setSelectedDateStateChef({
            id: 0,
            people: 0,
            allergy: '',
            location: '',
            mobile: '',
            rsDate: new Date(),
            rsTime: '00:00',
            isOven: false,
            burner: 0,
            messageToChef: '',
            rsUsrId: 0,
            userNickname: '',
            courseName: '',
            merchantUid: '',
          });
          dispatch(getReservation({ reservationData: result.data.data }));
        })
        .catch((err) => {
          console.log(err);
          if (err.message === 'Network Error') {
            dispatch(openServerErrorModal());
          } else if (err.response.data.message === 'Send new Login Request') {
            dispatch(openIsNeedReLoginModal());
          }
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
      setCurrentDate(subMonths(currentDate, 1));
    }
  };
  const changeSelected = (day) => {
    setSelectedDate(day);
    let index = reservationState.data
      .map((el) => format(new Date(el.rsDate), 'yyyy-MM-dd'))
      .indexOf(format(new Date(day), 'yyyy-MM-dd'));
    if (index !== -1) {
      if (!userState.isChef) {
        setSelectedDateState(reservationState.data[index]);
      } else {
        setSelectedDateStateChef(reservationState.data[index]);
      }
    } else {
      if (!userState.isChef) {
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
          merchantUid: '',
          receiptUrl: '',
        });
      } else {
        setSelectedDateStateChef({
          id: 0,
          people: 0,
          allergy: '',
          location: '',
          mobile: '',
          rsDate: new Date(),
          rsTime: '00:00',
          isOven: false,
          burner: 0,
          messageToChef: '',
          rsUsrId: 0,
          userNickname: '',
          courseName: '',
          merchantUid: '',
          receiptUrl: '',
        });
      }
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
                    id={
                      format(new Date(day), 'yyyy-MM-dd') ===
                      format(new Date(today), 'yyyy-MM-dd')
                        ? 'today'
                        : null
                    }
                    onClick={() => changeSelected(day)}
                    key={new Date(day)}
                  >
                    <div>
                      {getDate(new Date(day)) === 1
                        ? format(new Date(day), 'MM/dd')
                        : format(new Date(day), 'dd')}
                    </div>
                    {reservationState.data.map((el, idx) =>
                      format(new Date(el.rsDate), 'yyyy-MM-dd') ===
                      format(new Date(day), 'yyyy-MM-dd') ? (
                        <div key={idx} className='reservedDate'></div>
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
        {selectedDateState.id !== 0 || selectedDateStateChef.id !== 0 ? (
          <>
            <div id='myReservationData'>
              {!userState.isChef ? (
                <>
                  <p>
                    {selectedDateState.chefName}의{' '}
                    {selectedDateState.courseName} 코스,{' '}
                    {selectedDateState.rsTime}
                  </p>
                  <p>{selectedDateState.location}</p>
                </>
              ) : (
                <>
                  <p>
                    {selectedDateStateChef.userName} /
                    {selectedDateStateChef.courseName} 코스,{' '}
                    {selectedDateStateChef.rsTime}
                  </p>
                  <p>인원 : {selectedDateStateChef.people}</p>
                  <p>장소 : {selectedDateStateChef.location}</p>
                  <p>연락처: {selectedDateStateChef.mobile}</p>
                  <p>
                    알러지 :{' '}
                    {selectedDateStateChef.allergy
                      ? selectedDateStateChef.allergy
                      : '없음'}
                  </p>
                  <p>
                    메세지 :{' '}
                    {selectedDateStateChef.messageToChef
                      ? selectedDateStateChef.messageToChef
                      : '없음'}
                  </p>
                </>
              )}
            </div>
            <div id='deleteReserve'>
              {isBefore(new Date(today), subDays(new Date(selectedDate), 7)) &&
              !userState.isChef ? (
                <>
                  <button
                    onClick={() =>
                      dispatch(
                        openIsDeleteReservModal({
                          id: selectedDateState.id,
                          merchantUid: selectedDateState.merchantUid,
                        })
                      )
                    }
                  >
                    취소하기
                  </button>
                </>
              ) : (
                <button
                  onClick={
                    userState.isChef
                      ? () =>
                          dispatch(
                            openFailModal({
                              message:
                                '셰프가 취소하는 경우 고객 센터에 문의 바랍니다.',
                            })
                          )
                      : () =>
                          dispatch(
                            openFailModal({
                              message:
                                '예약날까지 1주일 이하로 남은 경우 취소가 불가능 합니다.',
                            })
                          )
                  }
                >
                  취소 불가
                </button>
              )}
              {selectedDateState.receiptUrl ? (
                <button
                  onClick={() =>
                    window.open(
                      selectedDateState.receiptUrl,
                      '영수증 보기',
                      'width=430,height=500,location=no,status=no,scrollbars=yes'
                    )
                  }
                >
                  영수증 보기
                </button>
              ) : null}
            </div>
          </>
        ) : (
          <>
            <div id='myReservationData'>예약 내역이 없습니다.</div>
            <div id='deleteReserve'>
              {userState.isChef ? null : (
                <button onClick={() => history.push('/findChef')}>
                  예약하러 가기
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </MypageReservContent>
  );
}

export default MypageReservation;
