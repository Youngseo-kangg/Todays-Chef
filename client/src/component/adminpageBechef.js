import { AdminContent } from '../styled/styleAdminpage';
import { PagenationList } from '../styled/styleFindChef';
import { useEffect, useState } from 'react';
import axios from 'axios';
require('dotenv').config();
axios.defaults.withCredentials = true;

function AdminpageBechef() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
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
        `${url}/admin/review/${adminDuedate}?startNum=0&endNum=4`
      );
      // console.log(result);
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
    }
  };

  const getAdminBechefMore = async (start, end) => {
    try {
      let result = await axios.get(
        `${url}/admin/review/${adminDuedate}?startNum=${start}&endNum=${end}`
      );
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
    }
  };

  const declineBechef = async (id) => {
    try {
      // console.log(id);
      await axios.post(`${url}/admin/review`, {
        id: id,
      });
      setUpdateAdminBechef(!updateAdminBechef);
    } catch (err) {
      console.log(err);
    }
  };

  const acceptBechef = async (id) => {
    try {
      console.log(id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAdminBechef();
  }, [adminDuedate, updateAdminBechef]);

  return (
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
                    {/* 
                    <p>{el.nickname}</p>
                    <button>다운로드 받기</button>
                    <button onClick={() => declineBechef(el.id)}>거부</button> 
                    <button onClick={() => acceptBechef(el.id)}>승인</button>
                    */}
                  </div>
                  {/* <p>{el.eval}</p> */}
                </li>
              );
            })
          )}
          <li className='adminBechefContent'>
            <div className='adminBechefInfo'>
              <p>지원자 이름</p>
              <p>퀴진</p>
              <div className='adminBechefBtnWrap'>
                <button>다운로드</button>
                <button onClick={() => declineBechef(1)}>거부</button>
                <button onClick={() => acceptBechef(1)}>승인</button>
              </div>
            </div>
          </li>
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
  );
}

export default AdminpageBechef;
