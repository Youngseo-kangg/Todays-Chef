import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAccessToken, userStatus } from '../features/user/user';
import { ReservationWrap, ReservNotice } from '../styled/styleReservation';
import {
  openServerErrorModal,
  openIsNeedReLoginModal,
} from '../features/user/modal';
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
      if (reservation.data.message === 'ok') {
        // 넘겨주기 ok
        if (reservation.data.accessToken) {
          dispatch(
            updateAccessToken({ accessToken: reservation.data.accessToken })
          );
        }
        setMakeReservation(4); // 다음페이지로 넘겨주기
      }
    } catch (err) {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch(openServerErrorModal()); // 서버 에러 모달 열기
      } else if (err.response.data.message === 'Send new login request') {
        dispatch(openIsNeedReLoginModal()); // 재로그인 필요하다는 모달 띄우기
      }
    }
  };

  const iamportPayment = () => {
    // * 2-1. 결제 준비 (가맹점 식별코드 사용해 IMP 객체 초기화)
    const { IMP } = window;
    IMP.init(''); // 가맹점 식별코드

    const data = {
      pg: 'html5_inicis', // 사용할 pg사
      pay_method: 'card', // 사용 메소드
      merchant_uid: 'merchant_' + new Date().getTime(),
      name: newData.courseName, // 이름
      amount: 0, // 가격
      buyer_email: userState.email,
      buyer_name: userState.nickname,
      buyer_tel: newData.reservMobile,
      buyer_addr: newData.reservMainAddress,
      buyer_postcode: newData.postal,
    }; // IMP.request_pay에 담길 data
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
        // 결제가 성공한 경우
        // * axios로 서버에 정보 보내서 결제정보 저장
        let postResult = await axios.post(
          `${url}/서버의_결제정보를_받는_엔드포인트`,
          {
            data: {
              imp_uid: imp_uid,
              merchant_uid: merchant_uid,
            },
          },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );
        if (postResult.data.message === 'ok') {
          // * 결제 정보 저장 후 axios로 예약 생성
          makeReservation();
        }
      } else {
        // 결제 실패 경우
        console.log('error_msg: ', error_msg);
      }
    }; // IMP.request_pay에 담길 data
    // * 2-2. IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(data, callback);
  };

  useEffect(() => {
    // TODO : 실제 결제 프로세스 일어나야 함
    // * iamport #1. jquery, iamport 호출하기
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr.js/iamport.payment-1.1.7.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    // *iamport #2. iamport 결제 실행
    iamportPayment();

    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  return (
    <ReservationWrap id='reservPayment'>
      <ReservNotice>
        <div id='reservPaymentNotice'>
          <h3>결제를 진행해 주세요.</h3>
        </div>
      </ReservNotice>
    </ReservationWrap>
  );
}

export default ReservationPayment;
