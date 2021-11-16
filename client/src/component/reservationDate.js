import { useState } from 'react';
import { ReservationWrap, ReservDate } from '../styled/styleReservation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// https://yong-nyong.tistory.com/11 참고해서 달력 만들기

function ReservationDate({ setMakeReservation }) {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  return (
    <ReservationWrap>
      <button onClick={() => setMakeReservation(0)}>&lt;</button>
      <ReservDate>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          monthsShown={2}
          minDate={new Date()}
          inline={true}
        />
        <input type='text' placeholder='주소' />
        <input type='text' placeholder='인원' />
        <input type='text' placeholder='핸드폰 번호' />
      </ReservDate>
      <button onClick={() => setMakeReservation(2)}>&gt;</button>
    </ReservationWrap>
  );
}

export default ReservationDate;
