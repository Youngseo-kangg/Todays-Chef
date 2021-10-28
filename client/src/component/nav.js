import { Link } from 'react-router-dom';
import { NavbarWrap, Navbar } from '../styled/styleNav';

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
