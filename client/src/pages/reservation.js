import { useState, useEffect, useHistory } from 'react';
import axios from 'axios';
import AddressModal from '../modal/addressModal';
import ReservationNotice from '../component/reservationNotice';
import ReservationDate from '../component/reservationDate';
import ReservationInfo from '../component/reservationInfo';
import ReservationPayment from '../component/reservationPayment';
import ReservationDone from '../component/reservationDone';
import OneSentenceModal from '../modal/oneSentenceModal';
import NeedReLoginModal from '../modal/needReLoginModal';
import {
  ReservationGrid,
  ReservationTitle,
  ReservationGraph,
  ReservationDesc,
} from '../styled/styleReservation';
import { userStatus } from '../features/user/user';
import {
  openFailModal,
  openServerErrorModal,
  openIsNeedReLoginModal,
  modalStatus,
} from '../features/user/modal';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setHours, setMinutes } from 'date-fns';
import { reservationStatus } from '../features/reservation/reservation';

require('dotenv').config();
axios.defaults.withCredentials = true;

function Reservation() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  let today = new Date(); //오늘
  const dispatch = useDispatch();
  const userState = useSelector(userStatus);
  const modalState = useSelector(modalStatus);
  const reservationState = useSelector(reservationStatus);
  const [newData, setNewData] = useState({});
  const [makeReservation, setMakeReservation] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      reservDateAndTime: setHours(setMinutes(new Date(startDate), 0), 13),
      reservSubAddress: '',
      reservPeople: 2,
      reservMobile: '',
      reservFire: 2,
      reservOven: false,
      reservAllergy: '',
      reservComment: '',
    },
  });

  const onSubmit = (data) => {
    if (address.length === 0) {
      // 작성한 내용이 없을 때
      console.log('submit은 작동했으나 막았음');
      setMakeReservation(2);
      return false;
    } else {
      setNewData({
        ...data,
        reservMainAddress: address,
        postal: postal,
        reservCourseName: titleInfo.course.courseName,
        reservPrice: titleInfo.course.price * data.reservPeople,
      });
      console.log('새로만든 newData: ', newData); // newData 상태값 업데이트
      setMakeReservation(3); // 다음 페이지로 넘겨주기
    }
  };
  const onError = (error) => {
    console.log('onSubmit에서 error: ', error);
  };
  const [searchAddress, setSearchAddress] = useState(false); // 모달 키고 끌 상태
  const [address, setAddress] = useState(''); // 실제 주소 값
  const [postal, setPostal] = useState(''); // 우표 주소 값
  const [addressErr, setAddressErr] = useState(address ? true : false);
  const [titleInfo, setTitleInfo] = useState({
    chefName: '',
    course: {},
    reservation: [],
  });
  const URLSearch = new URLSearchParams(window.location.search);
  const queryChefId = URLSearch.get('chefId');
  const queryCourseId = URLSearch.get('courseId');

  useEffect(() => {
    if (userState.isChef || userState.isAdmin) {
      dispatch(
        openFailModal({
          message: `관리자 또는 셰프는 예약할 수 없습니다.`,
        })
      );
    } else if (
      userState.userId === -1 &&
      !modalState.isReservDeclinedModalOpen
    ) {
      dispatch(
        openFailModal({
          message: `로그인 이후 예약이 가능합니다.`,
        })
      );
    } else {
      axios
        .get(
          `${url}/reservation?chefId=${queryChefId}&courseId=${queryCourseId}`
        )
        .then((data) => {
          setTitleInfo({
            chefName: data.data.data.chefName,
            course: data.data.data.course,
            reservation: data.data.data.rsDate,
          });
          // * 시작일 잡아주기
        })
        .catch((err) => {
          console.log(err);
          if (err.message === 'Network Error') {
            dispatch(openServerErrorModal());
          } else if (err.response.data.message === 'Send new Login Request') {
            dispatch(openIsNeedReLoginModal());
          }
        });
    }
  }, []);
  console.log('titleInfo.reservation: ', titleInfo.reservation);
  console.log('reservationState: ', reservationState);
  return (
    <>
      {modalState.failModalOpen ? <OneSentenceModal /> : null}
      {modalState.isNeedReLoginModalOpen ? <NeedReLoginModal /> : null}
      {searchAddress === true ? (
        <AddressModal
          setSearchAddress={setSearchAddress}
          setAddress={setAddress}
          setAddressErr={setAddressErr}
          setPostal={setPostal}
        />
      ) : null}
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
            <ReservationNotice
              titleInfo={titleInfo}
              setMakeReservation={setMakeReservation}
            />
          ) : null}

          {makeReservation === 1 || makeReservation === 2 ? (
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <ReservationDate
                makeReservation={makeReservation}
                setMakeReservation={setMakeReservation}
                register={register}
                control={control}
                errors={errors}
                searchAddress={searchAddress}
                setSearchAddress={setSearchAddress}
                address={address}
                setAddressErr={setAddressErr}
                addressErr={addressErr}
                titleInfo={titleInfo}
                queryChefId={queryChefId}
                reservation={titleInfo.reservation}
              />
              <ReservationInfo
                makeReservation={makeReservation}
                setMakeReservation={setMakeReservation}
                register={register}
                errors={errors}
                handleSubmit={handleSubmit}
                addressErr={addressErr}
              />
            </form>
          ) : null}
          {makeReservation === 3 ? (
            <ReservationPayment
              setMakeReservation={setMakeReservation}
              newData={newData}
              queryChefId={queryChefId}
              queryCourseId={queryCourseId}
            />
          ) : null}

          {makeReservation === 4 ? <ReservationDone /> : null}
        </ReservationDesc>
      </ReservationGrid>
    </>
  );
}

export default Reservation;
