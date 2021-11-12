import { ChefAllCourseInfo, CourseItem } from '../styled/styleChefInfo';
import { Link } from 'react-router-dom';
import axios from 'axios';

require('dotenv').config();
axios.defaults.withCredentials = true;

function ChefAllCourse({ chefCourse }) {
  return (
    <ChefAllCourseInfo>
      <ul id='courseWrap'>
        {chefCourse.map((el, idx) => {
          return (
            <CourseItem key={idx}>
              <div className='courseName'>
                <h2>{el.courseName}</h2>
              </div>
              <ul>
                {el.courseDesc.split('/').map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
              <div className='coursePrice'>
                <table>
                  <tbody>
                    <tr>
                      <th>{el.peopleMin}인</th>
                      <th>{Math.ceil((el.peopleMin + el.peopleMax) / 2)}인</th>
                      <th>{el.peopleMax}인</th>
                    </tr>
                    <tr>
                      <td>{el.price * el.peopleMin}원</td>
                      <td>
                        {el.price * ((el.peopleMin + el.peopleMax) / 2) * 0.9}원
                      </td>
                      <td>{el.price * el.peopleMax * 0.9}원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='courseInfoMore'>
                <p className='pricePerOne'>1인당 {el.price}원</p>
                <p className='maxMinPerson'>
                  최소 {el.peopleMin}명 ~ 최대 {el.peopleMax}명의 인원이
                  필요합니다.
                </p>
              </div>
              <div className='courseResBtn'>
                <Link to='/reservation'>예약하기</Link>
              </div>
            </CourseItem>
          );
        })}
      </ul>
    </ChefAllCourseInfo>
  );
}

export default ChefAllCourse;
