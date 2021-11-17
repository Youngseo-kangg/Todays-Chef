import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styled/customCalander.css';
import { ReservationWrap, ReservDateAndInfo } from '../styled/styleReservation';
import subDays from 'date-fns/subDays';
import { ko } from 'date-fns/esm/locale';
import { getYear, getMonth, setHours, setMinutes } from 'date-fns';

function ReservationDate({ setMakeReservation }) {
  let today = new Date(); //오늘
  // const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(today.setDate(today.getDate() + 2)), 0), 13)
  ); // 이틀 후 부터 예약 가능
  // console.log(startDate); // Fri Nov 19 2021 13:00:13 GMT+0900 (한국 표준시)

  return (
    <ReservationWrap>
      <button onClick={() => setMakeReservation(0)}>&lt;</button>
      <div className='reservScheduleAndInfo'>
        <ReservDateAndInfo>
          <h2>1. 일정 및 개인정보 작성</h2>
          <div className='reservInputWrap'>
            <div className='reservInput'>
              <label htmlFor='dateAndTime'>예약 날짜와 시간</label>
              <DatePicker
                withPortal
                locale={ko}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                includeTimes={[
                  setHours(setMinutes(new Date(), 0), 12),
                  setHours(setMinutes(new Date(), 30), 12),
                  setHours(setMinutes(new Date(), 0), 13),
                  setHours(setMinutes(new Date(), 30), 13),
                  setHours(setMinutes(new Date(), 0), 14),
                  setHours(setMinutes(new Date(), 30), 14),
                  setHours(setMinutes(new Date(), 0), 15),
                  setHours(setMinutes(new Date(), 30), 15),
                  setHours(setMinutes(new Date(), 0), 16),
                  setHours(setMinutes(new Date(), 30), 16),
                  setHours(setMinutes(new Date(), 0), 17),
                  setHours(setMinutes(new Date(), 30), 17),
                  setHours(setMinutes(new Date(), 0), 18),
                  setHours(setMinutes(new Date(), 30), 18),
                  setHours(setMinutes(new Date(), 0), 19),
                  setHours(setMinutes(new Date(), 30), 19),
                ]}
                excludeDates={[new Date(), subDays(new Date(), -1)]}
                dateFormat='yyyy년 MMMM dd일, aa h:mm'
                showTimeSelect
                renderCustomHeader={({
                  date,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                  decreaseMonth,
                  increaseMonth,
                }) => (
                  <div
                    style={{
                      margin: 10,
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: 20,
                    }}
                  >
                    <div
                      className='btn_month btn_month-prev'
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                      style={{
                        cursor: 'pointer',
                      }}
                    >
                      &lt;
                    </div>
                    <div className='month-day'>
                      {getYear(date)}.{months[getMonth(date)]}
                    </div>
                    <div
                      className='btn_month btn_month-next'
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                      style={{
                        cursor: 'pointer',
                      }}
                    >
                      &gt;
                    </div>
                  </div>
                )}
              />
            </div>
          </div>

          <div className='reservInputWrap'>
            <div className='reservInput'>
              <label htmlFor='location'>주소</label>
              <input type='text' name='location' placeholder='주소' />
            </div>
          </div>
          <div className='reservInputWrap'>
            <div className='reservInput'>
              <label htmlFor='people'>인원</label>
              <select name='people'>
                <option value='2'>2명</option>
                <option value='3'>3명</option>
                <option value='4'>4명</option>
              </select>
            </div>
          </div>
          <div className='reservInputWrap'>
            <div className='reservInput'>
              <label htmlFor='mobile'>핸드폰 번호</label>
              <input type='text' name='mobile' placeholder='핸드폰 번호' />
            </div>
          </div>
        </ReservDateAndInfo>
      </div>
      <button onClick={() => setMakeReservation(2)}>&gt;</button>
    </ReservationWrap>
  );
}

export default ReservationDate;
