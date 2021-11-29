import { useSelector } from 'react-redux';
import { MypageEditContent } from '../styled/styleMypage';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import { userStatus } from '../features/user/user';
import { chefStatus } from '../features/chef/chef';

function MypageEdit() {
  const userState = useSelector(userStatus);
  const chefState = useSelector(chefStatus);
  console.log(userState.userImg);
  return (
    <MypageEditContent>
      <div id='mypageEditContentWrap'>
        <div id='mypageEditTitle'>
          <h2>회원정보 수정</h2>
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
              <label htmlFor='image' id='mypageInfpPicBtn'>
                사진 업로드
              </label>
              <input
                type='file'
                id='image_uploads'
                name='image'
                accept='image/*'
              ></input>
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
