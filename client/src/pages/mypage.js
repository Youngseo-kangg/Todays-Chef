import MypageReservation from '../component/mypageReservation';
import MypageChefEdit from '../component/mypageChefEdit';
import MypageEdit from '../component/mypageEdit';
import MypageReview from '../component/mypageReview';
import { useState } from 'react';

function Mypage() {
  const menuList = {
    0: <MypageReservation />,
    1: <MypageReview />,
    2: <MypageEdit />,
    3: <MypageChefEdit />,
  }; // mypage component 리스트
  const [mypageMenu, setMypageMenu] = useState(0);
  const changeMenu = (index) => {
    setMypageMenu(index);
  }; // menuList에서 몇번째 내용이 보여져야 할지 지정해주는 함수

  return (
    <>
      <ul>
        <li onClick={() => changeMenu(0)}>예약 확인</li>
        <li onClick={() => changeMenu(1)}>리뷰 쓰기</li>
        <li onClick={() => changeMenu(2)}>정보 수정</li>
        <li onClick={() => changeMenu(3)}>자기소개 수정</li>
      </ul>
      {menuList[mypageMenu]}
      <p>this is Mypage</p>
    </>
  );
}

export default Mypage;
