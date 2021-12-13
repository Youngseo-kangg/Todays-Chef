import axios from 'axios';
import { useEffect, useState } from 'react';
import { updateAccessToken, userStatus } from '../features/user/user';
import { useSelector } from 'react-redux';
import {
  MobileReservation,
  ReservationWrap,
  ReservNotice,
} from '../styled/styleReservation';

function MobileReservationDonePage() {
  // * 성공하면 ${url}/mobile/reservationDone?reservationData=${JSON.stringify(reservationData)&imp_uid=~~~&merchant_uid=~~~&imp_success=true}
  const URLSearch = new URLSearchParams(window.location.search);
  console.log('URLSearch.toString(): ', URLSearch.toString());

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
            // reservationData,
            // imp_uid,
            // merchant_uid,
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
        console.log(data);
        if (data.status === 'success') {
          // * 결제 정보 저장 후 다음페이지로
          setSaveStatus(true); // 저장 완료 상태
        }
      })
      .catch((error) => {
        console.log(error);
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
