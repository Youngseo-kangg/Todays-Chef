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
