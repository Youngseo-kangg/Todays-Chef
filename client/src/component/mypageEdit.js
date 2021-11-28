import { MypageEditContent } from '../styled/styleMypage';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';

function MypageEdit() {
  return (
    <MypageEditContent>
      <div id='mypageEditContentWrap'>
        <div id='mypageInfoPic'>
          <div id='mypageInfoPicWrap'>
            <img src={basic_profile} alt='유저 사진' />
          </div>
          <label htmlFor='image' id='mypageInfpPicBtn'>
            사진 업로드
          </label>
          <input
            type='file'
            id='image_uploads'
            name='image'
            accept='image/*'
          ></input>
        </div>

        <div id='myInfoDetail'>
          <form>
            <div className='myInfoDetailWrap'>
              <label htmlFor='myInfoDetailNickname'>이름</label>
              <input type='text' name='myInfoDetailNickname' />
            </div>
            <div className='myInfoDetailWrap'>
              <label htmlFor='myInfoDetailPassword'>비밀번호</label>
              <input type='password' name='myInfoDetailPassword' />
            </div>
            <div className='myInfoDetailWrap'>
              <label htmlFor='myInfoDetailNewPassword'>새로운 비밀번호</label>
              <input type='password' name='myInfoDetailNewPassword' />
            </div>
            <div id='myInfoDetailBtnWrap'>
              <button type='submit'>수정</button>
              <button>탈퇴하기</button>
            </div>
          </form>
        </div>
      </div>
    </MypageEditContent>
  );
}

export default MypageEdit;
