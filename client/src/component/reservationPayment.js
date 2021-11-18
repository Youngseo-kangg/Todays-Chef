import { useSelector } from 'react-redux';
import { userStatus } from '../features/user/user';
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
  console.log('payment에서 프롭스로 받아온 newData: ', newData);
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const userInfo = useSelector(userStatus);
  console.log(userInfo);
  console.log({
    rsDate: format(newData.reservDateAndTime, 'yyyy-MM-dd HH:mm:ss'),
    rsTime: String(getHours(newData.reservDateAndTime)),
    location: `${newData.reservMainAddress} ${newData.reservSubAddress}`,
    people: Number(newData.reservPeople),
    mobile: newData.reservMobile,
    isOven: newData.reservOven,
    burner: newData.reservFire,
    rsCourseId: Number(queryCourseId),
    rsUserId: Number(userInfo.userId),
    messageToChef: newData.Comment || '',
    rsChefId: Number(queryChefId),
    allergy: newData.reservAllergy,
  });
  const makeReservation = async () => {
    let reservation = await axios.post(
      `${url}/reservation`,
      {
        header: { authorization: `Bearer ${userInfo.accessToken}` },
      },
      {
        rsDate: new Date(newData.reservDateAndTime),
        rsTime: `${getHours(newData.reservDateAndTime)}:${getMinutes(
          newData.reservDateAndTime
        )}`,
        location: `${newData.reservMainAddress} ${newData.reservSubAddress}`,
        people: Number(newData.reservPeople),
        mobile: newData.reservMobile,
        isOven: newData.reservOven,
        burner: newData.reservFire,
        rsCourseId: Number(queryCourseId),
        rsUserId: Number(userInfo.id),
        messageToChef: newData.Comment,
        rsChefId: Number(queryChefId),
        allergy: newData.reservAllergy,
      }
    );
  };
  return (
    <ReservationWrap>
      <button>&lt;</button>
      <ReservPayment>this is reservationPayment(4단계)</ReservPayment>
      <button onClick={() => setMakeReservation(4)}>&gt;</button>
    </ReservationWrap>
  );
}

export default ReservationPayment;
