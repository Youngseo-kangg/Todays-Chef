import { useSelector } from 'react-redux';
import { MypageEditContent } from '../styled/styleMypage';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import { userStatus } from '../features/user/user';
import { chefStatus } from '../features/chef/chef';
import axios from 'axios';
import { useState } from 'react';

require('dotenv').config();
axios.defaults.withCredentials = true;

function MypageEdit() {
  const userState = useSelector(userStatus);
  const chefState = useSelector(chefStatus);
  const [userPic, setUserPic] = useState({}); // 유저가 로컬에서 업로드한 프로필 이미지
  // TODO: 1. load 되자마자 서버에 get 요청해서 개인 데이터 다 가져오고, redux user 업데이트
  // TODO: 2. 사진 업데이트, 닉네임 변경, 비밀번호 변경, 회원 탈퇴 + 유효성 검사 + 필요한 modal, redux modal 업데이트
  // TODO: 2-1. 셰프의 경우 탈퇴 안되고 admin한테 연락 가게 만들기 + 고객의 경우 가장 가까운 예약 날짜까지 1주일 이상 남아있으면 탈퇴 가능하지만 그 이하로 남아있으면 탈퇴 안된다고 모달 띄우기
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;

  const changeProfileBtn = (event) => {
    // 로컬에서 선택한 사진 파일을 마이페이지 상에 미리보기로 띄움
    let formData = new FormData();
    formData.append('image', event.target.files[0]);
    setUserPic(formData);
  };

  const sendImgToServer = async () => {
    // 선택한 파일을 서버로 axios 요청을 보내 유저 db의 userPic 업데이트
    try {
      console.log(userState.userId);
      const imageRes = await axios.post(
        `${url}/mypage/image/${userState.userId}`,
        userPic,
        {
          headers: { authorization: `Bearer ${userState.accessToken}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MypageEditContent>
      <div id='mypageEditContentWrap'>
        <div id='mypageEditTitle'>
          <h2>개인 정보 수정</h2>
        </div>
        <div id='mypageInfoPic'>
          <div id='mypageInfoPicWrap'>
            <img
              src={userState.isChef ? basic_profile : userState.userImg}
              alt='유저 사진'
            />
          </div>
          {userState.isChef ? (
            <p>셰프 사진 변경은 자기 소개 수정 페이지에서 가능합니다.</p>
          ) : (
            <>
              <label htmlFor='image' id='mypageInfoPicBtn'>
                사진 업로드
              </label>
              <input
                type='file'
                id='image'
                name='image'
                accept='image/*'
                onChange={changeProfileBtn}
              ></input>
              <button onClick={sendImgToServer}>저장하기</button>
            </>
          )}
        </div>

        <div id='myInfoDetail'>
          <div id='myInfoDetailContent'>
            <div className='myInfoDetailWrap'>
              <label htmlFor='myInfoDetailNickname'>닉네임</label>
              <input type='text' name='myInfoDetailNickname' />
              <button>수정하기</button>
            </div>
            <div className='myInfoDetailWrap'>
              <label htmlFor='myInfoDetailPassword'>비밀번호</label>
              <input type='password' name='myInfoDetailPassword' />
            </div>
            <div className='myInfoDetailWrap'>
              <label htmlFor='myInfoDetailNewPassword'>새로운 비밀번호</label>
              <input type='password' name='myInfoDetailNewPassword' />
              <button>수정하기</button>
            </div>
            <div id='myInfoDetailBtnWrap'>
              <p>탈퇴 시 자동으로 예약이 취소됩니다.</p>
              <button>탈퇴하기</button>
            </div>
          </div>
        </div>
      </div>
    </MypageEditContent>
  );
}

export default MypageEdit;
