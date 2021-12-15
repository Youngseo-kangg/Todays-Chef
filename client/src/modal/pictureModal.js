import { ModalBackground, PictureModalBox } from '../styled/styledModal';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import { useState } from 'react';

function PictureModal({ setMagnifyPic, magnifyPic }) {
  const clickOk = () => {
    setMagnifyPic({
      picState: false, // 사진 모달 상태 다시 끄기
      picAddress: '', // 사진 주소 원상태로 복구
    });
  };

  return (
    <>
      <ModalBackground>
        <PictureModalBox>
          <img
            src={magnifyPic.picAddress ? magnifyPic.picAddress : basic_profile}
            alt='예시 사진'
          />
          <div id='confirmBtn'>
            <button onClick={clickOk}>닫기</button>
          </div>
        </PictureModalBox>
      </ModalBackground>
    </>
  );
}

export default PictureModal;
