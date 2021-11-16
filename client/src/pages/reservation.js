import { useState } from 'react';
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

function Reservation() {
  const [makeReservation, setMakeReservation] = useState(0);
  return (
    <ReservationGrid>
      <ReservationTitle>this is Reservation</ReservationTitle>
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
          <form>
            {makeReservation === 1 ? (
              <ReservationDate setMakeReservation={setMakeReservation} />
            ) : null}
            {makeReservation === 2 ? (
              <ReservationInfo setMakeReservation={setMakeReservation} />
            ) : null}
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
