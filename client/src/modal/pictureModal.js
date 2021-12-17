import { ModalBackground, PictureModalBox } from '../styled/styledModal';
import { IoCloseCircleOutline } from 'react-icons/io5';
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
          <div id='confirmBtn'>
            <button onClick={clickOk}>
              <IoCloseCircleOutline size={50} color='#603224' />
            </button>
          </div>
          <img
            src={magnifyPic.picAddress ? magnifyPic.picAddress : basic_profile}
            alt='예시 사진'
          />
        </PictureModalBox>
      </ModalBackground>
    </>
  );
}

export default PictureModal;
