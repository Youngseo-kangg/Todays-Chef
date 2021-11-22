import { AdminReview } from '../styled/styleAdminpage';
import { PagenationList } from '../styled/styleFindChef';
import { useEffect, useState } from 'react';
import axios from 'axios';
require('dotenv').config();
axios.defaults.withCredentials = true;

function AdminpageReview() {
  const [adminCuisine, setAdminCuisine] = useState('한식');
  useEffect(() => {
    console.log(adminCuisine);
  }, [adminCuisine]);

  return (
    <AdminReview>
      <div id='adminReviewFilterWrap'>
        <div id='adminReviewFilter'>
          <select
            id='adminCuisineFilter'
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
          <li className='adminReviewContent'>
            <div className='adminReviewInfo'>
              <p>2021-11-22</p>
              <p>리뷰 작성자</p>
              <p>2.0</p>
            </div>
            <p>리뷰 내용</p>
          </li>
          <li className='adminReviewContent'>
            <div className='adminReviewInfo'>
              <p>2021-11-22</p>
              <p>리뷰 작성자</p>
              <p>2.0</p>
            </div>
            <p>리뷰 내용</p>
          </li>
          <li className='adminReviewContent'>
            <div className='adminReviewInfo'>
              <p>2021-11-22</p>
              <p>리뷰 작성자</p>
              <p>2.0</p>
            </div>
            <p>리뷰 내용</p>
          </li>
          <li className='adminReviewContent'>
            <div className='adminReviewInfo'>
              <p>2021-11-22</p>
              <p>리뷰 작성자</p>
              <p>2.0</p>
            </div>
            <p>리뷰 내용</p>
          </li>
          <li className='adminReviewContent'>
            <div className='adminReviewInfo'>
              <p>2021-11-22</p>
              <p>리뷰 작성자</p>
              <p>2.0</p>
            </div>
            <p>리뷰 내용</p>
          </li>
        </ul>
      </div>

      <PagenationList>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </PagenationList>
    </AdminReview>
  );
}

export default AdminpageReview;
