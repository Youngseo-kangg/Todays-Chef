import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAccessToken, userStatus } from '../features/user/user';
import { ReservationWrap, ReservNotice } from '../styled/styleReservation';
import { openFailModal } from '../features/user/modal';
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
  const userState = useSelector(userStatus);
  const dispatch = useDispatch();

  // const makeReservation = async () => {
  //   try {
  //     let reservation = await axios.post(
  //       `${url}/reservation`,
  //       {
  //         rsDate: new Date(
  //           format(newData.reservDateAndTime, 'yyyy-MM-dd HH:mm:ss')
  //         ),
  //         rsTime: `${getHours(newData.reservDateAndTime)}:${format(
  //           newData.reservDateAndTime,
  //           'mm'
  //         )}`,
  //         location: `${newData.reservMainAddress} ${newData.reservSubAddress}`,
  //         people: Number(newData.reservPeople),
  //         mobile: newData.reservMobile,
  //         isOven: newData.reservOven,
  //         burner: newData.reservFire,
  //         rsCourseId: Number(queryCourseId),
  //         rsUserId: Number(userState.userId),
  //         messageToChef: newData.Comment,
  //         rsChefId: Number(queryChefId),
  //         allergy: newData.reservAllergy,
  //         merchant_uid: '',
  //       },
  //       {
  //         headers: { authorization: `Bearer ${userState.accessToken}` },
  //       }
  //     );
  //     if (reservation.data.message === 'ok') {
  //       // 넘겨주기 ok
  //       if (reservation.data.accessToken) {
  //         dispatch(
  //           updateAccessToken({ accessToken: reservation.data.accessToken })
  //         );
  //       }
  //       iamportPayment();
  //       setMakeReservation(4); // 다음페이지로 넘겨주기
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     if (err.message === 'Network Error') {
  //       dispatch(openServerErrorModal()); // 서버 에러 모달 열기
  //     } else if (err.response.data.message === 'Send new login request') {
  //       dispatch(openIsNeedReLoginModal()); // 재로그인 필요하다는 모달 띄우기
  //     }
  //   }
  // };

  const iamportPayment = () => {
    // * 2-1. 결제 준비 (가맹점 식별코드 사용해 IMP 객체 초기화)
    const IMP = window.IMP;
    IMP.init('imp52890096'); // 가맹점 식별코드

    const data = {
      pg: 'html5_inicis', // 사용할 pg사
      pay_method: 'card', // 사용 메소드
      merchant_uid: 'merchant_' + format(new Date(), 'yyyy-MM-dd_HH-mm-ss'),
      name: newData.reservCourseName, // 이름
      amount: 10, // 가격
      buyer_email: userState.email,
      buyer_name: userState.nickname,
      buyer_tel: newData.reservMobile,
      buyer_addr: newData.reservMainAddress,
      buyer_postcode: newData.postal,
    }; // IMP.request_pay에 담길 data
    console.log('aaa', data);
    const callback = async (response) => {
      const {
        success,
        error_msg,
        imp_uid,
        merchant_uid,
        pay_method,
        paid_amount,
        status,
      } = response;
      if (success) {
        console.log('성공성공!!!');
        // 결제가 성공한 경우
        // * axios로 서버에 정보 보내서 결제정보 저장
        let postResult = await axios.post(
          `${url}/reservation/payments`,
          {
            data: {
              reservationData: {
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
              imp_uid: imp_uid,
              merchant_uid: merchant_uid,
            },
          },

          {
            headers: {
              authorization: `bearer ${userState.accessToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(postResult);
        if (postResult.data.status === 'success') {
          // * 결제 정보 저장 후 다음페이지로
          setMakeReservation(4); // 다음페이지로 넘겨주기
        }
      } else {
        // 결제 실패 경우
        console.log('error_msg: ', error_msg);
        dispatch(
          openFailModal({
            message: '결제가 중단되었습니다.',
          })
        );
      }
    }; // IMP.request_pay에 담길 data
    // * 2-2. IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(data, callback);
  };

  useEffect(() => {
    // *iamport #2. iamport 결제 실행
    iamportPayment();
    // makeReservation(); // 먼저 실행
  }, []);

  return (
    <ReservationWrap id='reservPayment'>
      <ReservNotice>
        <div id='reservPaymentNotice'>
          <h3>결제를 진행해 주세요.</h3>
          <p>결제가 완료되면 자동으로 페이지가 이동됩니다.</p>
        </div>
      </ReservNotice>
    </ReservationWrap>
  );
}

export default ReservationPayment;
