import { useState, useMemo, useEffect } from 'react';
import { throttle } from 'lodash';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { userStatus } from '../features/user/user';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import {
  NavbarWrap,
  Navbar,
  Mymenu,
  MymenuSmall,
  NavBarIcon,
} from '../styled/styleNav';

function Nav() {
  const userInfo = useSelector(userStatus); // user의 상태
  const [mymenuState, setMymenuState] = useState(false);
  const [transNav, setTransNav] = useState(false); // nav 투명도 지정
  const [transScreen, setTransScreen] = useState(false); // false면 큰 화면, true면 작은 화면
  const showMiniMenu = () => {
    setMymenuState(!mymenuState);
  }; // 큰 화면에서 myMenu 껏다 켯다 하는 메뉴

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const nextTabnavOn = window.scrollY > 80;
        if (nextTabnavOn !== transNav) setTransNav(nextTabnavOn);
      }, 300),
    [transNav]
  ); // 반응형 nav바 키고 끄기

  const handleScreen = useMemo(
    () =>
      throttle(() => {
        if (window.innerWidth < 767) {
          setTransScreen(true);
        } else {
          setTransScreen(false);
        }
      }, 300),
    []
  );

  useEffect(() => {
    if (window.innerWidth < 767) {
      setTransScreen(true);
    } else {
      setTransScreen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScreen);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScreen);
    };
  }, [transNav, transScreen, handleScroll, handleScreen]);

  return (
    <NavbarWrap className={transNav ? 'scrolled' : null}>
      <Navbar>
        {transScreen ? (
          <ul id='smallMenu'>
            <li>
              <h2>
                <Link to='/'>Todays chef</Link>
              </h2>
            </li>

            {userInfo.userId !== -1 || userInfo.userId === undefined ? (
              <li>
                <NavBarIcon onClick={showMiniMenu}>
                  <FontAwesomeIcon icon={faBars} className='navBarIcon' />
                </NavBarIcon>
                <MymenuSmall className={mymenuState ? 'showMyMenu' : null}>
                  <li onClick={showMiniMenu}>
                    <Link to='/mypage'>mypage</Link>
                  </li>
                  <li onClick={showMiniMenu}>Logout</li>
                </MymenuSmall>
              </li>
            ) : (
              <li>
                <NavBarIcon onClick={showMiniMenu}>
                  <FontAwesomeIcon icon={faBars} />
                </NavBarIcon>
                <MymenuSmall className={mymenuState ? 'showMyMenu' : null}>
                  <li>
                    <p>안녕하세요, OO님!</p>
                    <img src={basic_profile} alt='user profile' />
                  </li>
                  <li onClick={showMiniMenu}>
                    <Link to='/mypage'>mypage</Link>
                  </li>
                  <li onClick={showMiniMenu}>Logout</li>
                </MymenuSmall>
              </li>
            )}
          </ul>
        ) : (
          <ul id='defaultMenu'>
            {' '}
            {/* 큰 화면에서 보이는 nav */}
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
                <div className='afterLogin'>
                  <p>안녕하세요, OO님!</p>
                  <img
                    onClick={showMiniMenu}
                    src={basic_profile}
                    alt='user profile'
                  />
                </div>
                <Mymenu className={mymenuState ? 'showMyMenu' : null}>
                  <li onClick={showMiniMenu}>
                    <Link to='/mypage'>mypage</Link>
                  </li>
                  <li onClick={showMiniMenu}>Logout</li>
                </Mymenu>
              </li>
            )}
          </ul>
        )}
      </Navbar>
    </NavbarWrap>
  );
}

export default Nav;
