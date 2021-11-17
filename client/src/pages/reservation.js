import { useState } from 'react';
import axios from 'axios';
import ReservationNotice from '../component/reservationNotice';
import ReservationDate from '../component/reservationDate';
import ReservationInfo from '../component/reservationInfo';
import ReservationPayment from '../component/reservationPayment';
import ReservationDone from '../component/reservationDone';
import {
  ReservationGrid,
  ReservationTitle,
  ReservationGraph,
  ReservationDesc,
} from '../styled/styleReservation';
import { useForm } from 'react-hook-form';
import { setHours, setMinutes } from 'date-fns';
require('dotenv').config();
axios.defaults.withCredentials = true;

function Reservation() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  let today = new Date(); //오늘
  const [makeReservation, setMakeReservation] = useState(0);
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      reservDateAndTime: setHours(
        setMinutes(new Date(today.setDate(today.getDate() + 2)), 0),
        13
      ),
      reservLocation: '',
      reservPeople: 2,
      reservMobile: '',
      reservFire: 1,
      reservOven: false,
      reservAllergy: '',
      reservComment: '',
    },
  });
  const onSubmit = (data) => {
    console.log('reservation에서 onSubmit: ', data);
    // axios 요청 들어갈 예정
    setMakeReservation(3); // 다음 페이지로 넘겨주기
  };
  const onError = (error) => {
    console.log('onSubmit에서 error: ', error);
  };

  return (
    <ReservationGrid>
      <ReservationTitle>
        <h2>예약 페이지</h2>
      </ReservationTitle>
      <ReservationGraph width={makeReservation}>
        <div id='reservationProgress'>
          <div id='reservationBar'></div>
        </div>
      </ReservationGraph>

      <ReservationDesc>
        {makeReservation === 0 ? (
          <ReservationNotice setMakeReservation={setMakeReservation} />
        ) : null}

        {makeReservation === 1 || makeReservation === 2 ? (
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <ReservationDate
              makeReservation={makeReservation}
              setMakeReservation={setMakeReservation}
              register={register}
              control={control}
              errors={errors}
            />
            <ReservationInfo
              makeReservation={makeReservation}
              setMakeReservation={setMakeReservation}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
            />
          </form>
        ) : null}
        {makeReservation === 3 ? (
          <ReservationPayment setMakeReservation={setMakeReservation} />
        ) : null}

        {makeReservation === 4 ? (
          <ReservationDone setMakeReservation={setMakeReservation} />
        ) : null}
      </ReservationDesc>
    </ReservationGrid>
  );
}

export default Reservation;
