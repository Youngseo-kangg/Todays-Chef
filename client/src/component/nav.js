import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to='/'>로고</Link>
      <Link to='/findChef'>findChef</Link>
      <Link to='/chefInfo'>chefInfo</Link>
      <Link to='/reservation'>reservation</Link>
      <Link to='/mypage'>mypage</Link>
      <Link to='/loginOrSignup'>loginOrSignup</Link>
    </nav>
  );
}

export default Nav;
