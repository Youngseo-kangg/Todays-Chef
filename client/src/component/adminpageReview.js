import { AdminReviewAndChef } from '../styled/styleAdminpage';
import { PagenationList } from '../styled/styleFindChef';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
require('dotenv').config();
axios.defaults.withCredentials = true;

function AdminpageReview() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const [adminCuisine, setAdminCuisine] = useState('한식');
  const [adminReview, setAdminReview] = useState([]);
  const [adminReviewPerPage, setAdminReviewPerPage] = useState({
    start: 0,
    end: 4,
    array: [],
    length: 0,
  });
  const [updateAdminReview, setUpdateAdminReview] = useState(false);

  const getAdminReview = async () => {
    try {
      let encodeSelected = encodeURI(encodeURIComponent(adminCuisine));
      let result = await axios.get(
        `${url}/admin/review/${encodeSelected}?startNum=0&endNum=4`
      );
      // console.log(result);
      setAdminReview(result.data.data);
      let newArr = [];
      for (let i = 0; i < result.data.length; i += 4) {
        newArr.push(i); // 4씩 끊은 수 들어가게
      }
      setAdminReviewPerPage({
        ...adminReviewPerPage,
        array: newArr,
        length: result.data.length,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getAdminReviewMore = async (start, end) => {
    try {
      let encodeSelected = encodeURI(encodeURIComponent(adminCuisine));
      let result = await axios.get(
        `${url}/admin/review/${encodeSelected}?startNum=${start}&endNum=${end}`
      );
      // console.log(result);
      setAdminReview(result.data.data);
      let newArr = [];
      for (let i = 0; i < result.data.length; i += 4) {
        newArr.push(i); // 4씩 끊은 수 들어가게
      }
      setAdminReviewPerPage({
        ...adminReviewPerPage,
        array: newArr,
        length: result.data.length,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteReview = async (id) => {
    try {
      // console.log(id);
      await axios.delete(`${url}/admin/review`, {
        id: id,
      });
      setUpdateAdminReview(!updateAdminReview);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAdminReview();
  }, [adminCuisine, updateAdminReview]);

  return (
    <AdminReviewAndChef>
      <div id='adminReviewFilterWrap'>
        <div id='adminReviewFilter'>
          <select
            id='adminReviewCuisineFilter'
            onChange={(e) => setAdminCuisine(e.target.value)}
          >
            <option value='한식'>한식</option>
            <option value='일식'>일식</option>
            <option value='양식'>양식</option>
            <option value='중식'>중식</option>
          </select>
        </div>
      </div>
      <div id='adminReviewContentWrap'>
        <h2>{adminCuisine}에 대한 리뷰입니다.</h2>
        <ul>
          {adminReview.length === 0 ? (
            <li className='noAdminReviewContent'>나타낼 리뷰가 없습니다.</li>
          ) : (
            adminReview.map((el, idx) => {
              return (
                <li key={idx} className='adminReviewContent'>
                  <div className='adminReviewInfo'>
                    <p>{format(new Date(el.createdAt), 'yyyy-MM-dd')}</p>
                    <p>{el.nickname}</p>
                    <p>{el.rating}</p>
                    <button onClick={() => deleteReview(el.id)}>삭제</button>
                  </div>
                  <p>{el.eval}</p>
                </li>
              );
            })
          )}
        </ul>
      </div>

      <PagenationList>
        <ul>
          {adminReviewPerPage.array.map((el, idx) => {
            return (
              <li key={idx} onClick={() => getAdminReviewMore(el, el + 4)}>
                {idx + 1}
              </li>
            );
          })}
        </ul>
      </PagenationList>
    </AdminReviewAndChef>
  );
}

export default AdminpageReview;
