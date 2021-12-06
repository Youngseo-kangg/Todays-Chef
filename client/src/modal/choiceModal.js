import { ModalBackground, LogoutModalBox } from '../styled/styledModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  openServerErrorModal,
  closeChoiceModal,
  openIsNeedReLoginModal,
  modalStatus,
} from '../features/user/modal';
import { logout } from '../features/user/user';
import { userStatus, updateAccessToken } from '../features/user/user';
import axios from 'axios';
import { chefStatus, deleteCourse } from '../features/chef/chef';

function ChoiceModal() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const dispatch = useDispatch();
  const userState = useSelector(userStatus);
  const modalState = useSelector(modalStatus);
  const chefState = useSelector(chefStatus);

  const deleteCourseItem = async () => {
    try {
      console.log('요청들어옴');
      let deleteResult = await axios.delete(
        `${url}/mypage/info/chef?id=${chefState.chefId}&courseId=${modalState.choiceModalOpen}`,
        {
          headers: { authorization: `bearer ${userState.accessToken}` },
        }
      );
      if (deleteResult.data.message === 'ok') {
        if (deleteResult.data.accessToken) {
          dispatch(
            updateAccessToken({ accessToken: deleteResult.data.accessToken })
          );
        } // accessToken 있으면 업뎃
        dispatch(deleteCourse({ targetId: modalState.choiceModalOpen })); // redux에서도 해당 데이터 없애주기
        dispatch(closeChoiceModal()); // 모달 끄기
      }
    } catch (err) {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch(openServerErrorModal());
      } else if (err.response.data.message === 'Send new Login Request') {
        dispatch(openIsNeedReLoginModal());
      }
    }
  };

  const deleteUser = async () => {
    try {
      let deleteResult = await axios.delete(
        `${url}/mypage/${modalState.choiceModalOpen}`
      );
      if (deleteResult.data.message === 'ok') {
        dispatch(logout()); // 로그아웃 상태로 만들어주기
        dispatch(closeChoiceModal()); // 모달 끄기
        window.location.replace('/');
      }
    } catch (err) {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch(openServerErrorModal());
      } else if (err.response.data.message === 'Send new Login Request') {
        dispatch(openIsNeedReLoginModal());
      }
    }
  };

  const clickOk = () => {
    if (modalState.choiceTitle === '코스 삭제') {
      return deleteCourseItem();
    } else if (modalState.choiceTitle === '회원 탈퇴') {
      return deleteUser();
    }
  };

  const clickCancel = () => {
    dispatch(closeChoiceModal()); // 코스 수정 모달 끄기
  };

  return (
    <>
      <ModalBackground>
        <LogoutModalBox>
          <span>{modalState.choiceTitle}</span>
          <div id='logoutDesc'>
            <p>{modalState.choiceMessage}</p>
          </div>
          <div id='confirmBtn'>
            <button onClick={clickOk}>확인</button>
            <button onClick={clickCancel}>취소</button>
          </div>
        </LogoutModalBox>
      </ModalBackground>
    </>
  );
}

export default ChoiceModal;
