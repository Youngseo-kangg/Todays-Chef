import { ChefAllCourseInfo, CourseItem } from '../styled/styleChefInfo';
import { Link } from 'react-router-dom';
import axios from 'axios';

require('dotenv').config();
axios.defaults.withCredentials = true;

function ChefAllCourse() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  // 셰프가 작성한 코스 받아오기
  // 받아서 .courseName 렌더하기

  return (
    <ChefAllCourseInfo>
      <ul id='courseWrap'>
        <CourseItem>
          <div className='courseName'>
            <h2>코스 A 이름</h2>
          </div>
          <ul>
            <li>코스 소개 1</li>
            <li>코스 소개 2</li>
            <li>코스 소개 3</li>
          </ul>
          <div className='coursePrice'>
            <table>
              <tbody>
                <tr>
                  <th>2인</th>
                  <th>4인</th>
                  <th>6인</th>
                </tr>
                <tr>
                  <td>000000원</td>
                  <td>000000원</td>
                  <td>000000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='courseInfoMore'>
            <p className='pricePerOne'>1인당 000000원</p>
            <p className='maxMinPerson'>최소 0명 ~ 최대 X명</p>
          </div>
          <div className='courseResBtn'>
            <Link to='/reservation'>예약하기</Link>
          </div>
        </CourseItem>
        <CourseItem>
          <div className='courseName'>
            <h2>코스 B 이름</h2>
          </div>
          <ul>
            <li>코스 소개 1</li>
            <li>코스 소개 2</li>
            <li>코스 소개 3</li>
          </ul>
          <div className='coursePrice'>
            <table>
              <tbody>
                <tr>
                  <th>2인</th>
                  <th>4인</th>
                  <th>6인</th>
                </tr>
                <tr>
                  <td>000000원</td>
                  <td>000000원</td>
                  <td>000000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='courseInfoMore'>
            <p className='pricePerOne'>1인당 000000원</p>
            <p className='maxMinPerson'>최소 0명 ~ 최대 X명</p>
          </div>
          <div className='courseResBtn'>
            <Link to='/reservation'>예약하기</Link>
          </div>
        </CourseItem>
        <CourseItem>
          <div className='courseName'>
            <h2>코스 C 이름</h2>
          </div>
          <ul>
            <li>코스 소개 1</li>
            <li>코스 소개 2</li>
            <li>코스 소개 3</li>
          </ul>
          <div className='coursePrice'>
            <table>
              <tbody>
                <tr>
                  <th>2인</th>
                  <th>4인</th>
                  <th>6인</th>
                </tr>
                <tr>
                  <td>000000원</td>
                  <td>000000원</td>
                  <td>000000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='courseInfoMore'>
            <p className='pricePerOne'>1인당 000000원</p>
            <p className='maxMinPerson'>최소 0명 ~ 최대 X명</p>
          </div>
          <div className='courseResBtn'>
            <Link to='/reservation'>예약하기</Link>
          </div>
        </CourseItem>
        <CourseItem>
          <div className='courseName'>
            <h2>코스 D 이름</h2>
          </div>
          <ul>
            <li>코스 소개 1</li>
            <li>코스 소개 2</li>
            <li>코스 소개 3</li>
          </ul>
          <div className='coursePrice'>
            <table>
              <tbody>
                <tr>
                  <th>2인</th>
                  <th>4인</th>
                  <th>6인</th>
                </tr>
                <tr>
                  <td>000000원</td>
                  <td>000000원</td>
                  <td>000000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='courseInfoMore'>
            <p className='pricePerOne'>1인당 000000원</p>
            <p className='maxMinPerson'>최소 0명 ~ 최대 X명</p>
          </div>
          <div className='courseResBtn'>
            <Link to='/reservation'>예약하기</Link>
          </div>
        </CourseItem>
        <CourseItem>
          <div className='courseName'>
            <h2>코스 E 이름</h2>
          </div>
          <ul>
            <li>코스 소개 1</li>
            <li>코스 소개 2</li>
            <li>코스 소개 3</li>
          </ul>
          <div className='coursePrice'>
            <table>
              <tbody>
                <tr>
                  <th>2인</th>
                  <th>4인</th>
                  <th>6인</th>
                </tr>
                <tr>
                  <td>000000원</td>
                  <td>000000원</td>
                  <td>000000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='courseInfoMore'>
            <p className='pricePerOne'>1인당 000000원</p>
            <p className='maxMinPerson'>최소 0명 ~ 최대 X명</p>
          </div>
          <div className='courseResBtn'>
            <Link to='/reservation'>예약하기</Link>
          </div>
        </CourseItem>
        <CourseItem>
          <div className='courseName'>
            <h2>코스 F 이름</h2>
          </div>
          <ul>
            <li>코스 소개 1</li>
            <li>코스 소개 2</li>
            <li>코스 소개 3</li>
          </ul>
          <div className='coursePrice'>
            <table>
              <tbody>
                <tr>
                  <th>2인</th>
                  <th>4인</th>
                  <th>6인</th>
                </tr>
                <tr>
                  <td>000000원</td>
                  <td>000000원</td>
                  <td>000000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='courseInfoMore'>
            <p className='pricePerOne'>1인당 000000원</p>
            <p className='maxMinPerson'>최소 0명 ~ 최대 X명</p>
          </div>
          <div className='courseResBtn'>
            <Link to='/reservation'>예약하기</Link>
          </div>
        </CourseItem>
      </ul>
    </ChefAllCourseInfo>
  );
}

export default ChefAllCourse;
