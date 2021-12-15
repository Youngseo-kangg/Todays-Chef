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
import { useSelector, useDispatch } from 'react-redux';
import { login, userStatus } from './features/user/user';

import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

require('dotenv').config();
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // 로그인 모달창 상태
  // const [isLoginErrorModalOpen, setIsLoginErrorModalOpen] = useState(false); // 로그인 에러 모당창 상태
  // const [isServerError, setIsServerError] = useState(false);
  // const [isLogout, setIsLogout] = useState(false);

  const modalState = useSelector(modalStatus);
  const userState = useSelector(userStatus);
  // console.log('App.js에서 userStatus: ', userState);

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
      console.log(authorizationCode);
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
      let userResult = await axios.post(`${url}/user/${socialType}`, {
        authorizationCode: authorizationCode,
      });
      dispatch(openLoginModal());
      // setIsLoginModalOpen(true);

      dispatch(
        login({
          ...userResult.data.userInfo,
          accessToken: userResult.data.accessToken,
        })
      );
      localStorage.removeItem('socialType');
    } catch (err) {
      console.log(err.response);
      if (err.message === 'Network Error') {
        dispatch(openLoginErrorModal());
      } else if ((err.response.data.message = 'You Already Signed up')) {
        dispatch(openLoginErrorModal());
        // setIsLoginErrorModalOpen(true);
      } else {
        // setIsServerError(true);
        // setIsLoginErrorModalOpen(true);
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
