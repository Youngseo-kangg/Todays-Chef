import styled from 'styled-components';

export const NavbarWrap = styled.div`
  width: 100%;
  height: 80px;
  line-height: 80px;
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
    justify-content: space-around;
    width: 100%;
    margin: 0 auto;
    max-width: 1400px;
    color: #fff;
  }

  #defaultMenu {
    .afterLogin {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .afterLogin > img {
      width: 40px;
      height: 40px;
      border-radius: 40px;
      margin-left: 10px;
      cursor: pointer;
    }
  }

  #smallMenu {
    justify-content: space-between;
    position: relative;
    padding: 0px 10px;
    box-sizing: border-box;
  }
`;

export const NavBarIcon = styled.div`
  font-size: 40px;
  cursor: pointer;
`;

export const Mymenu = styled.ul`
  display: none;
  background-color: transparent;
  height: 45px;
  line-height: 45px;
  &.showMyMenu {
    display: flex;
    margin-top: 5px;
    > li {
      flex: 1 1 auto;
      border-radius: 5px;
      cursor: pointer;
      > a {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    > li:hover {
      background-color: #603224;
    }
  }
`;

export const MymenuSmall = styled.ul`
  display: none;
  background-color: transparent;
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: #dbb89a;
  left: 0;
  &.showMyMenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > li {
      border-radius: 5px;
      width: 100%;
      cursor: pointer;
      > a {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    > li:hover:not(:nth-child(1)) {
      background-color: #603224;
    }
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 40px;
    margin-left: 10px;
    cursor: pointer;
  }
`;
