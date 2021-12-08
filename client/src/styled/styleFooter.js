import styled from 'styled-components';

export const FooterWrap = styled.footer`
  width: 100%;
  height: 200px;
  display: grid;
  place-items: center;
  color: #fff;
  background-color: #603224;
  @media screen and (max-width: 420px) {
    height: 250px;
  }
`;

export const FooterList = styled.div`
  width: 90%;
  max-width: 1400px;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  > * {
    border: 1px solid red;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    height: 150px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: none;
  }
  #leftFooter {
    display: grid;
    place-items: center;
    grid-template-rows: 1fr 50px;
    li:nth-child(1) {
      h2 {
        font-size: 25px;
      }
      p {
        font-size: 14px;
      }
    }
    li:nth-child(2) {
      display: grid;
      width: 190px;
      place-items: center;
      grid-template-columns: repeat(4, 40px);
      column-gap: 10px;
      > svg {
        cursor: pointer;
        transition: all 0.3s;
      }
      > svg:hover {
        color: #dbb89a;
      }
    }
  }
  #rightFooter {
    display: grid;
    place-items: center;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    > li {
      cursor: pointer;
      transition: all 0.3s;
      :hover {
        color: #dbb89a;
      }
    }
  }
`;
