import axios from 'axios';
import { useEffect, useState } from 'react';
import { userStatus } from '../features/user/user';
import { madeReservation } from '../features/reservation/reservation';
import { openFailModal } from '../features/user/modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  MobileReservation,
  ReservationWrap,
  ReservNotice,
} from '../styled/styleReservation';

function MobileReservationDonePage() {
  // * 성공하면 ${url}/mobile/reservationDone?chefName=~~~&courseName=~~~&reservationData=${JSON.stringify(reservationData)&imp_uid=~~~&merchant_uid=~~~&imp_success=true}
  const URLSearch = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  let chefName = decodeURIComponent(URLSearch.get('chefName'));
  let courseName = decodeURIComponent(URLSearch.get('courseName'));
  let reservationData = JSON.parse(URLSearch.get('reservationData'));
  let reservationRsDate = reservationData.rsDate;
  let imp_uid = URLSearch.get('imp_uid');
  let merchant_uid = URLSearch.get('merchant_uid');
  let utc =
    new Date(reservationRsDate).getTime() +
    new Date(reservationRsDate).getTimezoneOffset() * 60 * 1000;
  let time_diff = 9 * 60 * 60 * 1000;
  let cur_date_korea = new Date(utc + time_diff);

  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const userState = useSelector(userStatus);
  const [saveStatus, setSaveStatus] = useState(false);
  // axios처리 필요함
  useEffect(() => {
    setSaveStatus(false); // 저장 시작
    axios
      .post(
        `${url}/reservation/payments`,
        {
          data: {
            reservationData: {
              ...reservationData,
              rsDate: cur_date_korea,
            },
            imp_uid,
            merchant_uid,
          },
        },
        {
          headers: {
            authorization: `bearer ${userState.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((data) => {
        if (data.data.status === 'success') {
          // * 결제 정보 저장 후 다음페이지로
          dispatch(
            madeReservation({
              newData: {
                ...reservationData,
                rsDate: String(reservationData.rsDate),
                chefName: chefName,
                courseName: courseName,
              },
            })
          ); // redux reservation 업뎃시켜주기
          setSaveStatus(true); // 저장 완료 상태
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          openFailModal({
            message: '결제가 중단되었습니다.',
          })
        );
      });
  }, []);

  return (
    <MobileReservation>
      <ReservationWrap className='reservDone'>
        <ReservNotice>
          <div className='reservDoneNotice'>
            {saveStatus ? (
              <>
                <h3>예약이 완료되었습니다.</h3>
                <p>취소는 마이페이지에서 가능합니다.</p>
              </>
            ) : (
              <>
                <h3>예약을 저장하고 있습니다.</h3>
                <p>잠시만 기다려주세요.</p>
              </>
            )}
          </div>
        </ReservNotice>
      </ReservationWrap>
    </MobileReservation>
  );
}

export default MobileReservationDonePage;
