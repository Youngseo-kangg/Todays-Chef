import './App.css';
import Main from './pages/main';
import Nav from './component/nav';
import FindChef from './pages/findChef';
import BeChef from './pages/beChef';
import ChefInfo from './pages/chefInfo';
import Reservation from './pages/reservation';
import Mypage from './pages/mypage';
import LoginOrSignup from './pages/loginOrSignup';
import Footer from './component/footer';
import LogoutModal from './modal/logoutModal';

import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

require('dotenv').config();
axios.defaults.withCredentials = true;

function App() {
  // const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  // const test = () => {
  //   axios
  //     .get(`${url}`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       console.log('err', url);
  //     });
  // };
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
      kakaoSocialLogin(authorizationCode);
    }
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  const kakaoSocialLogin = (authorizationCode) => {
    const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
    axios.post(`${url}/user/kakao`, {
      authorizationCode: authorizationCode,
    });
  };

  const [isLogout, setIsLogout] = useState(false);

  return (
    <BrowserRouter>
      <div className='App'>
        {/* <button onClick={test}>click</button> */}
        {isLogout ? <LogoutModal setIsLogout={setIsLogout} /> : null}
        <Switch>
          <Nav setIsLogout={setIsLogout} />
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
        <Route path='/loginOrSignup'>
          <LoginOrSignup />
        </Route>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
