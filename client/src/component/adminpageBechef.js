import { AdminContent } from '../styled/styleAdminpage';
import { PagenationList } from '../styled/styleFindChef';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAccessToken, userStatus } from '../features/user/user';
import { openIsNeedReLoginModal } from '../features/user/modal';
import { openServerErrorModal } from '../features/user/modal';

import axios from 'axios';
require('dotenv').config();
axios.defaults.withCredentials = true;

function AdminpageBechef() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const userState = useSelector(userStatus);
  const dispatch = useDispatch();
  const [adminDuedate, setAdminDuedate] = useState('week');
  const [adminBechef, setAdminBechef] = useState([]);
  const [adminBechefPerPage, setAdminBechefPerPage] = useState({
    start: 0,
    end: 4,
    array: [],
    length: 0,
  });
  const [updateAdminBechef, setUpdateAdminBechef] = useState(false);

  const getAdminBechef = async () => {
    try {
      let result = await axios.get(
        `${url}/admin/bechef/${adminDuedate}?startNum=0&endNum=4`,
        {
          headers: { authorization: `Bearer ${userState.accessToken}` },
        }
      );
      // console.log(result);
      if (result.data.accessToken) {
        dispatch(
          updateAccessToken({
            accessToken: result.data.accessToken,
          })
        );
      }
      console.log(result.data);
      setAdminBechef(result.data.data);
      let newArr = [];
      for (let i = 0; i < result.data.length; i += 4) {
        newArr.push(i); // 4씩 끊은 수 들어가게
      }
      setAdminBechefPerPage({
        ...adminBechefPerPage,
        array: newArr,
        length: result.data.length,
      });
    } catch (err) {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch(openServerErrorModal());
      } else if (err.response.data.message === 'Send new login request') {
        dispatch(openIsNeedReLoginModal()); // 재로그인 필요하다는 모달 띄우기
      }
    }
  };

  const getAdminBechefMore = async (start, end) => {
    try {
      let result = await axios.get(
        `${url}/admin/bechef/${adminDuedate}?startNum=${start}&endNum=${end}`,
        {
          headers: { authorization: `Bearer ${userState.accessToken}` },
        }
      );
      console.log(result.data);
      if (result.data.accessToken) {
        dispatch(
          updateAccessToken({
            accessToken: result.data.accessToken,
          })
        );
      }
      setAdminBechef(result.data.data);
      let newArr = [];
      for (let i = 0; i < result.data.length; i += 4) {
        newArr.push(i); // 4씩 끊은 수 들어가게
      }
      setAdminBechefPerPage({
        ...adminBechefPerPage,
        array: newArr,
        length: result.data.length,
      });
    } catch (err) {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch(openServerErrorModal());
      } else if (err.response.data.message === 'Send new login request') {
        dispatch(openIsNeedReLoginModal()); // 재로그인 필요하다는 모달 띄우기
      }
    }
  };

  const declineBechef = async (id) => {
    try {
      let result = await axios.post(
        `${url}/admin/bechef/refuse`,
        {
          id: id,
        },
        {
          headers: { authorization: `Bearer ${userState.accessToken}` },
        }
      );
      console.log(result);
      if (result.data.accessToken) {
        dispatch(
          updateAccessToken({
            accessToken: result.data.accessToken,
          })
        );
      }
      setUpdateAdminBechef(!updateAdminBechef);
    } catch (err) {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch(openServerErrorModal());
      } else if (err.response.data.message === 'Send new login request') {
        dispatch(openIsNeedReLoginModal()); // 재로그인 필요하다는 모달 띄우기
      }
    }
  };

  const acceptBechef = async (id) => {
    try {
      let result = await axios.post(
        `${url}/admin/bechef/confirm`,
        {
          id: id,
        },
        {
          headers: { authorization: `Bearer ${userState.accessToken}` },
        }
      );
      console.log(result);
      if (result.data.accessToken) {
        dispatch(
          updateAccessToken({
            accessToken: result.data.accessToken,
          })
        );
      }
      setUpdateAdminBechef(!updateAdminBechef);
    } catch (err) {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch(openServerErrorModal());
      } else if (err.response.data.message === 'Send new login request') {
        dispatch(openIsNeedReLoginModal()); // 로그인 에러 모달 띄우기
      }
    }
  };

  useEffect(() => {
    getAdminBechef();
  }, [adminDuedate, updateAdminBechef]);

  return (
    <>
      <AdminContent>
        <div id='adminReviewFilterWrap'>
          <div id='adminReviewFilter'>
            <select
              id='adminReviewCuisineFilter'
              onChange={(e) => setAdminDuedate(e.target.value)}
            >
              <option value='week'>1주일</option>
              <option value='month'>1개월</option>
              <option value='months'>3개월</option>
              <option value='all'>전체 기간</option>
            </select>
          </div>
        </div>

        <div id='adminBechefContentWrap'>
          <h2>셰프 지원자 리스트</h2>
          <ul>
            {adminBechef.length === 0 ? (
              <li className='noAdminBechefContent'>셰프 지원자가 없습니다.</li>
            ) : (
              adminBechef.map((el, idx) => {
                return (
                  <li key={idx} className='adminBechefContent'>
                    <div className='adminBechefInfo'>
                      <p>{el.id}</p>
                      <div className='adminBechefBtnWrap'>
                        <button onClick={() => console.log(el.id)}>
                          다운로드
                        </button>
                        <button onClick={() => declineBechef(el.id)}>
                          거부
                        </button>
                        <button onClick={() => acceptBechef(el.id)}>
                          승인
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        </div>

        <PagenationList>
          <ul>
            {adminBechefPerPage.array.map((el, idx) => {
              return (
                <li key={idx} onClick={() => getAdminBechefMore(el, el + 4)}>
                  {idx + 1}
                </li>
              );
            })}
          </ul>
        </PagenationList>
      </AdminContent>
    </>
  );
}

export default AdminpageBechef;
