import { useState, useEffect } from 'react';
import { AdminContent } from '../styled/styleAdminpage';
import { PagenationList } from '../styled/styleFindChef';
import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import axios from 'axios';
require('dotenv').config();
axios.defaults.withCredentials = true;

function AdminpageChef() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const [adminCuisine, setAdminCuisine] = useState('한식');
  const [adminChef, setAdminChef] = useState([]);
  const [adminChefPerPage, setAdminChefPerPage] = useState({
    start: 0,
    end: 4,
    array: [],
    length: 0,
  });
  const [updateAdminChef, setUpdateAdminChef] = useState(false);

  const getAdminChef = async () => {
    try {
      let encodeSelected = encodeURI(encodeURIComponent(adminCuisine));
      let result = await axios.get(
        `${url}/admin/chef/${encodeSelected}?startNum=0&endNum=4`
      );
      // console.log(result);
      setAdminChef(result.data.data);
      let newArr = [];
      for (let i = 0; i < result.data.length; i += 4) {
        newArr.push(i); // 4씩 끊은 수 들어가게
      }
      setAdminChefPerPage({
        ...adminChefPerPage,
        array: newArr,
        length: result.data.length,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getAdminChefMore = async (start, end) => {
    try {
      let encodeSelected = encodeURI(encodeURIComponent(adminCuisine));
      let result = await axios.get(
        `${url}/admin/chef/${encodeSelected}?startNum=${start}&endNum=${end}`
      );
      // console.log(result);
      setAdminChef(result.data.data);
      let newArr = [];
      for (let i = 0; i < result.data.length; i += 4) {
        newArr.push(i); // 4씩 끊은 수 들어가게
      }
      setAdminChefPerPage({
        ...adminChefPerPage,
        array: newArr,
        length: result.data.length,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteChef = async (id) => {
    try {
      console.log('chef delete id: ', id);
      await axios.post(`${url}/admin/chef`, {
        id: id,
      });
      setUpdateAdminChef(!updateAdminChef);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAdminChef();
  }, [adminCuisine, updateAdminChef]);

  return (
    <AdminContent>
      <div id='adminChefFilterWrap'>
        <div id='adminChefFilter'>
          <select
            id='adminChefCuisineFilter'
            onChange={(e) => setAdminCuisine(e.target.value)}
          >
            <option value='한식'>한식</option>
            <option value='일식'>일식</option>
            <option value='양식'>양식</option>
            <option value='중식'>중식</option>
          </select>
        </div>
      </div>
      <div id='adminChefContentWrap'>
        <h2>{adminCuisine} 셰프 리스트</h2>
        <ul>
          {adminChef.length === 0 ? (
            <li className='noAdminChefContent'>
              해당 카테고리에 셰프가 없습니다.
            </li>
          ) : (
            adminChef.map((el, idx) => {
              return (
                <li key={idx} className='adminChefContent'>
                  <div className='adminChefInfo'>
                    <img alt='셰프 사진' />
                    <p>{el.chefName}</p>
                    <p>{el.rating}</p>
                    <button onClick={() => deleteChef(el.id)}>삭제</button>
                  </div>
                  <p>{el.eval}</p>
                </li>
              );
            })
          )}
          <li className='adminChefContent'>
            <div className='adminChefInfo'>
              <div className='adminChefPicWrap'>
                <img src={basic_profile} alt='셰프 사진' />
              </div>
              <p>셰프 이름</p>
              <p>4</p>
              <div className='adminChefBtnWrap'>
                <button onClick={() => deleteChef(1)}>삭제</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <PagenationList>
        <ul>
          {adminChefPerPage.array.map((el, idx) => {
            return (
              <li key={idx} onClick={() => getAdminChefMore(el, el + 4)}>
                {idx + 1}
              </li>
            );
          })}
        </ul>
      </PagenationList>
    </AdminContent>
  );
}

export default AdminpageChef;
