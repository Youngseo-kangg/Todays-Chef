import { ModalBackground, LogoutModalBox } from '../styled/styledModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  openServerErrorModal,
  closeChoiceModal,
  closeIsDeleteReservModal,
  modalStatus,
} from '../features/user/modal';
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
    }
  };

  const clickCancel = () => {
    dispatch(closeChoiceModal()); // 코스 수정 모달 끄기
  };

  return (
    <>
      <ModalBackground>
        <LogoutModalBox>
          <span>삭제</span>
          <div id='logoutDesc'>
            <p>{modalState.choiceMessage}</p>
          </div>
          <div id='confirmBtn'>
            <button onClick={deleteCourseItem}>확인</button>
            <button onClick={clickCancel}>취소</button>
          </div>
        </LogoutModalBox>
      </ModalBackground>
    </>
  );
}

export default ChoiceModal;
