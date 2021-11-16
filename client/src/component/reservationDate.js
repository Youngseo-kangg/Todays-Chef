import { useState, forwardRef } from 'react';
import { ReservationWrap, ReservDate } from '../styled/styleReservation';
import DatePicker from 'react-datepicker';
import subDays from 'date-fns/subDays';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
// https://yong-nyong.tistory.com/11 참고해서 달력 만들기

function ReservationDate({ setMakeReservation }) {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 13)
  );

  return (
    <ReservationWrap>
      <button onClick={() => setMakeReservation(0)}>&lt;</button>
      <ReservDate>
        <DatePicker
          locale={ko}
          // dateFormat='yyyy년 m월 dd일'
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
          includeTimes={[
            setHours(setMinutes(new Date(), 0), 13),
            setHours(setMinutes(new Date(), 0), 18),
          ]}
          dateFormat='yyyy.MM.dd(eee)'
          inline
          showTimeSelect
          excludeDates={[new Date(), subDays(new Date(), -1)]}
        />
        <input type='text' value={startDate.toString()} />
        <input type='text' placeholder='주소' />
        <input type='text' placeholder='인원' />
        <input type='text' placeholder='핸드폰 번호' />
      </ReservDate>
      <button onClick={() => setMakeReservation(2)}>&gt;</button>
    </ReservationWrap>
  );
}

export default ReservationDate;
