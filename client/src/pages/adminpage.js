import { useEffect, useState } from 'react';
import AdminpageBechef from '../component/adminpageBechef';
import AdminpageReview from '../component/adminpageReview';
import AdminpageChef from '../component/adminpageChef';
import NeedReLoginModal from '../modal/needReLoginModal';
import { AdminpageGrid, AdminPageContent } from '../styled/styleAdminpage';
import { userStatus } from '../features/user/user';
import { modalStatus } from '../features/user/modal';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function Adminpage() {
  const history = useHistory();
  const userState = useSelector(userStatus);
  const modalState = useSelector(modalStatus);
  const adminpageMenuList = {
    0: <AdminpageBechef />,
    1: <AdminpageReview />,
    2: <AdminpageChef />,
  }; // adminpage component 리스트
  const [adminpageMenu, setAdminpageMenu] = useState(0);
  const changeAdminMenu = (index) => {
    setAdminpageMenu(index);
  }; // menuList에서 몇번째 내용이 보여져야 할지 지정해주는 함수

  useEffect(() => {
    if (!userState.isAdmin) {
      history.push('/');
    }
  }, []);

  return (
    <>
      {modalState.isNeedReLoginModalOpen ? <NeedReLoginModal /> : null}
      <AdminpageGrid>
        <div id='adminpageGridWrap'>
          <ul>
            <li
              className={adminpageMenu === 0 ? 'adminSelected' : null}
              onClick={() => changeAdminMenu(0)}
            >
              셰프 신청 확인
            </li>
            <li
              className={adminpageMenu === 1 ? 'adminSelected' : null}
              onClick={() => changeAdminMenu(1)}
            >
              리뷰 관리
            </li>
            <li
              className={adminpageMenu === 2 ? 'adminSelected' : null}
              onClick={() => changeAdminMenu(2)}
            >
              셰프 관리
            </li>
          </ul>
          <AdminPageContent>
            {adminpageMenuList[adminpageMenu]}
          </AdminPageContent>
        </div>
      </AdminpageGrid>
    </>
  );
}

export default Adminpage;
