import { useState, useMemo, useEffect } from 'react';
import { throttle } from 'lodash';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, userStatus } from '../features/user/user';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import {
  NavbarWrap,
  Navbar,
  Mymenu,
  MymenuSmall,
  NavBarIcon,
} from '../styled/styleNav';

function Nav({ setIsLogout }) {
  const userInfo = useSelector(userStatus); // user의 상태
  const dispatch = useDispatch();
  const [mymenuState, setMymenuState] = useState(false); // 세부메뉴 보일지 말지
  const [transNav, setTransNav] = useState(false); // nav 투명에서 색상 변경
  const [transScreen, setTransScreen] = useState(false); // false면 큰 화면, true면 작은 화면
  const showMiniMenu = () => {
    setMymenuState(!mymenuState);
  }; // 큰 화면에서 myMenu 껏다 켯다 하는 메뉴

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        // ~420까지는 100vh, 420~으로는 90vh이상일때 변경해주기
        // const nextTabnavOn = window.scrollY > window.innerHeight - 140;
        const nextTabnavOn = window.scrollY > 80;
        if (nextTabnavOn !== transNav) setTransNav(nextTabnavOn);
      }, 300),
    [transNav]
  );

  const handleScreen = useMemo(
    () =>
      throttle(() => {
        if (window.innerWidth < 768) {
          setTransScreen(true);
        } else {
          setTransScreen(false);
        }
      }, 300),
    []
  );

  useEffect(() => {
    if (window.innerWidth < 768) {
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
              <h2 onClick={() => window.scrollTo(0, 0)}>
                <Link to='/'>Todays chef</Link>
              </h2>
            </li>

            {userInfo.userId === -1 || userInfo.userId === undefined ? (
              <li>
                <NavBarIcon onClick={showMiniMenu} className='menu-btn'>
                  <div
                    className={
                      mymenuState ? 'menu-btn__burger open' : 'menu-btn__burger'
                    }
                  ></div>
                </NavBarIcon>
                <div
                  id='myMenuSmallWrap'
                  className={mymenuState ? 'showMyMenu' : null}
                >
                  <MymenuSmall>
                    <li onClick={showMiniMenu}>
                      <Link to='/findChef'>findChef</Link>
                    </li>
                    <li onClick={showMiniMenu}>
                      <Link to='/beChef'>BeChef</Link>
                    </li>
                    <li onClick={showMiniMenu}>
                      <Link to='/loginOrSignup'>로그인/회원가입</Link>
                    </li>
                  </MymenuSmall>
                </div>
              </li>
            ) : (
              <li>
                <NavBarIcon onClick={showMiniMenu} className='menu-btn'>
                  <div
                    className={
                      mymenuState ? 'menu-btn__burger open' : 'menu-btn__burger'
                    }
                  ></div>
                </NavBarIcon>
                <div
                  id='myMenuSmallWrap'
                  className={mymenuState ? 'showMyMenu' : null}
                >
                  <MymenuSmall>
                    <li>
                      <p>안녕하세요, {userInfo.nickname}님!</p>
                      <img src={basic_profile} alt='user profile' />
                    </li>
                    <li onClick={showMiniMenu}>
                      <Link to='/findChef'>findChef</Link>
                    </li>
                    <li onClick={showMiniMenu}>
                      <Link to='/beChef'>BeChef</Link>
                    </li>
                    <li onClick={showMiniMenu}>
                      <Link to='/mypage'>mypage</Link>
                    </li>
                    <li
                      onClick={() => {
                        showMiniMenu();
                        setIsLogout(true);
                        // dispatch(logout());
                      }}
                    >
                      Logout
                    </li>
                  </MymenuSmall>
                </div>
              </li>
            )}
          </ul>
        ) : (
          <ul id='defaultMenu'>
            {' '}
            {/* 큰 화면에서 보이는 nav */}
            <li>
              <ul id='menuLeft'>
                <li onClick={() => window.scrollTo(0, 0)}>
                  <Link to='/beChef'>BeChef</Link>
                </li>
                <li onClick={() => window.scrollTo(0, 0)}>
                  <Link to='/findChef'>findChef</Link>
                </li>
              </ul>
            </li>
            <li onClick={() => window.scrollTo(0, 0)}>
              <h2>
                <Link to='/'>Todays chef</Link>
              </h2>
            </li>
            {userInfo.userId === -1 || userInfo.userId === undefined ? (
              <li onClick={() => window.scrollTo(0, 0)}>
                <Link to='/loginOrSignup'>로그인/회원가입</Link>
              </li>
            ) : (
              <li>
                <div className='afterLogin' onClick={showMiniMenu}>
                  <p>안녕하세요, {userInfo.nickname}님!</p>
                  <img src={basic_profile} alt='user profile' />
                </div>
                <Mymenu className={mymenuState ? 'showMyMenu' : null}>
                  <li onClick={showMiniMenu}>
                    <Link to='/mypage'>mypage</Link>
                  </li>
                  <li
                    onClick={() => {
                      showMiniMenu();
                      // dispatch(logout());
                      setIsLogout(true);
                    }}
                  >
                    Logout
                  </li>
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
