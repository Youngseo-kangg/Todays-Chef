import './App.css';
import Main from './pages/main';
import axios from 'axios';

require('dotenv').config();
axios.defaults.withCredentials = true;

function App() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  console.log('first', url);
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
    <div className='App'>
      <button onClick={test}>click</button>
      <Main />
    </div>
  );
}

export default App;
