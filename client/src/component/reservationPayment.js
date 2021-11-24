import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAccessToken, userStatus } from '../features/user/user';
import { ReservationWrap, ReservPayment } from '../styled/styleReservation';
import { format, getHours, getMinutes } from 'date-fns';

import axios from 'axios';
require('dotenv').config();
axios.defaults.withCredentials = true;

function ReservationPayment({
  setMakeReservation,
  newData,
  queryChefId,
  queryCourseId,
}) {
  // console.log('payment에서 프롭스로 받아온 newData: ', newData);
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const userState = useSelector(userStatus);
  const dispatch = useDispatch();
  // console.log(userState);
  // console.log({
  //   rsDate: new Date(format(newData.reservDateAndTime, 'yyyy-MM-dd HH:mm:ss')),
  //   rsTime: `${getHours(newData.reservDateAndTime)}:${format(
  //     newData.reservDateAndTime,
  //     'mm'
  //   )}`,
  //   location: `${newData.reservMainAddress} ${newData.reservSubAddress}`,
  //   people: Number(newData.reservPeople),
  //   mobile: newData.reservMobile,
  //   isOven: newData.reservOven,
  //   burner: newData.reservFire,
  //   rsCourseId: Number(queryCourseId),
  //   rsUserId: Number(userState.userId),
  //   messageToChef: newData.Comment || '',
  //   rsChefId: Number(queryChefId),
  //   allergy: newData.reservAllergy,
  // });

  const makeReservation = async () => {
    try {
      let reservation = await axios.post(
        `${url}/reservation`,
        {
          rsDate: new Date(
            format(newData.reservDateAndTime, 'yyyy-MM-dd HH:mm:ss')
          ),
          rsTime: `${getHours(newData.reservDateAndTime)}:${format(
            newData.reservDateAndTime,
            'mm'
          )}`,
          location: `${newData.reservMainAddress} ${newData.reservSubAddress}`,
          people: Number(newData.reservPeople),
          mobile: newData.reservMobile,
          isOven: newData.reservOven,
          burner: newData.reservFire,
          rsCourseId: Number(queryCourseId),
          rsUserId: Number(userState.userId),
          messageToChef: newData.Comment,
          rsChefId: Number(queryChefId),
          allergy: newData.reservAllergy,
        },
        {
          headers: { authorization: `Bearer ${userState.accessToken}` },
        }
      );
      if (reservation.data.accessToken) {
        dispatch(
          updateAccessToken({ accessToken: reservation.data.accessToken })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // 실제 결제 프로세스 일어나야 함
    makeReservation(); // reservation 테이블에 예약 추가
  }, []);

  return (
    <ReservationWrap>
      <button>&lt;</button>
      <ReservPayment>this is reservationPayment(4단계)</ReservPayment>
      <button onClick={() => setMakeReservation(4)}>&gt;</button>
    </ReservationWrap>
  );
}

export default ReservationPayment;
