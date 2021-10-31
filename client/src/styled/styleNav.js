import styled from 'styled-components';

export const NavbarWrap = styled.div`
  width: 100%;
  background-color: #603224;
  position: fixed;
  z-index: 9999;
  transition: all 0.3s;
  &.scrolled {
    background-color: transparent;
  }
`;

export const Navbar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  > ul {
    display: flex;
    justify-content: space-between;
    height: 80px;
    line-height: 80px;
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
    color: #fff;
  }
  #afterLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 40px;
      height: 40px;
      border-radius: 40px;
      margin-left: 10px;
    }
  }
`;

export const Mymenu = styled.ul`
  display: none;
  background-color: #603224;
  &.showMyMenu {
    display: block;
  }
`;
