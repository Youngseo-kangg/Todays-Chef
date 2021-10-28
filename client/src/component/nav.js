import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrap = styled.div`
  width: 100%;
  background: #603224;
`;

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  height: 80px;
  max-width: 1400px;
  margin: 0 auto;
  color: #fff;
`;

function Nav() {
  return (
    <NavbarWrap>
      <Navbar>
        <Link to='/findChef'>findChef</Link>
        <Link to='/'>로고</Link>
        <Link to='/user'>mypage</Link>
        <Link to='/loginOrSignup'>loginOrSignup</Link>
      </Navbar>
    </NavbarWrap>
  );
}

export default Nav;
