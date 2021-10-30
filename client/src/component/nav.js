import { useState, useMemo, useEffect, useRef } from 'react';
import { throttle } from 'lodash';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userStatus } from '../features/user/user';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import { NavbarWrap, Navbar, Mymenu } from '../styled/styleNav';

function Nav() {
  const userInfo = useSelector(userStatus); // user의 상태
  const [mymenuState, setMymenuState] = useState(false);
  const [transNav, setTransNav] = useState(false); // 투명도 지정
  const showLogout = () => {
    setMymenuState(!mymenuState);
  }; // myMenu 껏다 켯다 하는 메뉴

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      console.log('state변경');
      setTransNav(true);
      return;
    }
    if (window.scrollY <= 80) {
      console.log('state변경');
      setTransNav(false);
      return;
    }
  };

  return (
    <NavbarWrap className={transNav ? 'scrolled' : null}>
      <Navbar>
        <ul>
          <li>
            <Link to='/findChef'>findChef</Link>
          </li>
          <li>
            <h2>
              <Link to='/'>Todays chef</Link>
            </h2>
          </li>

          {userInfo.userId !== -1 || userInfo.userId === undefined ? (
            <li>
              <Link to='/loginOrSignup'>loginOrSignup</Link>
            </li>
          ) : (
            <li>
              <div id='afterLogin'>
                <p>안녕하세요, OO님!</p>
                <img
                  onClick={showLogout}
                  src={basic_profile}
                  alt='user profile'
                />
              </div>
              <Mymenu className={mymenuState ? 'showMyMenu' : null}>
                <li>
                  <Link to='/mypage'>mypage</Link>
                </li>
                <li>Logout</li>
              </Mymenu>
            </li>
          )}
        </ul>
      </Navbar>
    </NavbarWrap>
  );
}

export default Nav;
