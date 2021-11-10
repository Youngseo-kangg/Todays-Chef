import { ChefAllCourseInfo } from '../styled/styleChefInfo';

function ChefAllCourse() {
  return (
    <ChefAllCourseInfo>
      <ul id='courseWrap'>
        <li className='courseItem'>
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
        </li>
        <li className='courseItem'>
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
        </li>
        <li className='courseItem'>
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
        </li>
        {/* <li className='courseItem'>
          <h2 className='courseName'>코스 D 이름</h2>
          <ul>
            <li>코스 소개 1</li>
            <li>코스 소개 2</li>
            <li>코스 소개 3</li>
          </ul>
          <div className='coursePrice'>
            <table>
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
            </table>
          </div>
          <div className='courseInfoMore'>
            <p className='pricePerOne'>1인당 000000원</p>
            <p className='maxMinPerson'>최소 0명 ~ 최대 X명</p>
          </div>
        </li>
        <li className='courseItem'>
          <h2 className='courseName'>코스 B 이름</h2>
          <ul>
            <li>코스 소개 1</li>
            <li>코스 소개 2</li>
            <li>코스 소개 3</li>
          </ul>
          <div className='coursePrice'>
            <table>
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
            </table>
          </div>
          <div className='courseInfoMore'>
            <p className='pricePerOne'>1인당 000000원</p>
            <p className='maxMinPerson'>최소 0명 ~ 최대 X명</p>
          </div>
        </li>
        <li className='courseItem'>
          <h2 className='courseName'>코스 C 이름</h2>
          <ul>
            <li>코스 소개 1</li>
            <li>코스 소개 2</li>
            <li>코스 소개 3</li>
          </ul>
          <div className='coursePrice'>
            <table>
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
            </table>
          </div>
          <div className='courseInfoMore'>
            <p className='pricePerOne'>1인당 000000원</p>
            <p className='maxMinPerson'>최소 0명 ~ 최대 X명</p>
          </div>
        </li>
        <li className='courseItem'>
          <h2 className='courseName'>코스 D 이름</h2>
          <ul>
            <li>코스 소개 1</li>
            <li>코스 소개 2</li>
            <li>코스 소개 3</li>
          </ul>
          <div className='coursePrice'>
            <table>
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
            </table>
          </div>
          <div className='courseInfoMore'>
            <p className='pricePerOne'>1인당 000000원</p>
            <p className='maxMinPerson'>최소 0명 ~ 최대 X명</p>
          </div>
        </li>
        <li className='courseItem'>
          <h2 className='courseName'>코스 B 이름</h2>
          <ul>
            <li>코스 소개 1</li>
            <li>코스 소개 2</li>
            <li>코스 소개 3</li>
          </ul>
          <div className='coursePrice'>
            <table>
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
            </table>
          </div>
          <div className='courseInfoMore'>
            <p className='pricePerOne'>1인당 000000원</p>
            <p className='maxMinPerson'>최소 0명 ~ 최대 X명</p>
          </div>
        </li>
        <li className='courseItem'>
          <h2 className='courseName'>코스 C 이름</h2>
          <ul>
            <li>코스 소개 1</li>
            <li>코스 소개 2</li>
            <li>코스 소개 3</li>
          </ul>
          <div className='coursePrice'>
            <table>
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
            </table>
          </div>
          <div className='courseInfoMore'>
            <p className='pricePerOne'>1인당 000000원</p>
            <p className='maxMinPerson'>최소 0명 ~ 최대 X명</p>
          </div>
        </li> */}
      </ul>
    </ChefAllCourseInfo>
  );
}

export default ChefAllCourse;
