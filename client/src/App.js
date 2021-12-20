import './App.css';
import Main from './pages/main';
import Nav from './component/nav';
import FindChef from './pages/findChef';
import BeChef from './pages/beChef';
import ChefInfo from './pages/chefInfo';
import Reservation from './pages/reservation';
import Mypage from './pages/mypage';
import Adminpage from './pages/adminpage';
import MobileReservationDonePage from './pages/reservationDonePage';
import LoginOrSignup from './pages/loginOrSignup';
import Footer from './component/footer';
import LogoutModal from './modal/logoutModal';
import ServerErrorModal from './modal/serverErrorModal';
import {
  openLoginModal,
  openLoginErrorModal,
  modalStatus,
} from './features/user/modal';
import { chefLogin } from './features/chef/chef';
import { getReservation } from './features/reservation/reservation';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './features/user/user';

import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

require('dotenv').config();
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const modalState = useSelector(modalStatus);
  useEffect(() => {
    if (
      window.location.href === 'https://www.todayschef.click' ||
      window.location.href === 'http://www.todayschef.click' ||
      window.location.href === 'http://todayschef.click'
    ) {
      window.location.href = 'https://todayschef.click';
    } // https와 http로 들어갔을 때 redirect 시켜주기

    const authorizationCode = new URL(window.location.href).searchParams.get(
      'code'
    );
    if (authorizationCode) {
      socialLoginAccessToken(authorizationCode);
    }
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  const socialLoginAccessToken = async (authorizationCode) => {
    const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
    const socialType = localStorage.getItem('socialType');

    try {
      let loginResult = await axios.post(`${url}/user/${socialType}`, {
        authorizationCode: authorizationCode,
      });
      if (
        loginResult.data.message === 'ok' ||
        loginResult.data.message === 'created'
      ) {
        if (loginResult.data.userInfo.chefId) {
          // 셰프라면
          dispatch(chefLogin({ chefId: loginResult.data.userInfo.chefId }));
        }
        // 예약내역이 있다면
        if (loginResult.data.reservInfo) {
          dispatch(
            getReservation({ reservationData: loginResult.data.reservInfo })
          );
        }
        dispatch(
          login({
            ...loginResult.data.userInfo,
            accessToken: loginResult.data.accessToken,
          })
        );
        dispatch(openLoginModal());
        localStorage.removeItem('socialType');
      }
    } catch (err) {
      console.log(err.response);
      if (err.message === 'Network Error') {
        dispatch(openLoginErrorModal());
      } else if ((err.response.data.message = 'You Already Signed up')) {
        dispatch(openLoginErrorModal());
      } else {
        dispatch(openLoginErrorModal());
      }
    }
  };

  return (
    <BrowserRouter>
      <div className='App'>
        {/* <button onClick={test}>click</button> */}
        {modalState.isLogoutModalOpen ? <LogoutModal /> : null}
        {modalState.isServerErrorModalOpen ? <ServerErrorModal /> : null}
        <Switch>
          <Nav />
        </Switch>

        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/findChef'>
          <FindChef />
        </Route>
        <Route path='/beChef'>
          <BeChef />
        </Route>
        <Route path='/chef'>
          <ChefInfo />
        </Route>
        <Route path='/reservation'>
          <Reservation />
        </Route>
        <Route path='/mypage'>
          <Mypage />
        </Route>
        <Route path='/admin'>
          <Adminpage />
        </Route>
        <Route path='/loginOrSignup'>
          <LoginOrSignup />
        </Route>
        <Route path='/mobile/reservationDone'>
          <MobileReservationDonePage />
        </Route>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
