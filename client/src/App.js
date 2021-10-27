import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Nav from './component/nav';
import FindChef from './pages/findChef';
import ChefInfo from './pages/chefInfo';
import Reservation from './pages/reservation';
import Mypage from './pages/mypage';
import LoginOrSignup from './pages/loginOrSignup';

import axios from 'axios';

require('dotenv').config();
axios.defaults.withCredentials = true;

function App() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const test = () => {
    axios
      .get(`${url}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log('err', url);
      });
  };
  return (
    <BrowserRouter>
      <div className='App'>
        <button onClick={test}>click</button>
        <Switch>
          <Nav />
        </Switch>

        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/findChef'>
          <FindChef />
        </Route>
        <Route path='/chefInfo'>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
