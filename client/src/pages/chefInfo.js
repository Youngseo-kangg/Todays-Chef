import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChefAllInfo from '../component/chefInfoInfo';
import ChefAllCourse from '../component/chefInfoCourse';
import ChefAllReview from '../component/chefInfoReview';
import {
  ChefInfoGrid,
  ChefInfoDesc,
  ChefInformation,
  ChefWrapBox,
} from '../styled/styleChefInfo';

function ChefInfo() {
  const [chefInfoIdx, setChefInfoIdx] = useState(0);

  return (
    <ChefInfoGrid>
      <ChefInfoDesc>
        <h2>김코딩 셰프님의 만찬에 오신 것을 환영합니다!</h2>
      </ChefInfoDesc>
      <ChefInformation>
        <ul id='chefInfoOrder'>
          <li
            className={chefInfoIdx === 0 ? 'chefInfoActive' : null}
            onClick={() => setChefInfoIdx(0)}
          >
            셰프 소개
          </li>
          <li
            className={chefInfoIdx === 1 ? 'chefInfoActive' : null}
            onClick={() => setChefInfoIdx(1)}
          >
            코스
          </li>
          <li
            className={chefInfoIdx === 2 ? 'chefInfoActive' : null}
            onClick={() => setChefInfoIdx(2)}
          >
            리뷰
          </li>
        </ul>
        <ChefWrapBox>
          {chefInfoIdx === 0 ? <ChefAllInfo /> : null}
          {chefInfoIdx === 1 ? <ChefAllCourse /> : null}
          {chefInfoIdx === 2 ? <ChefAllReview /> : null}
        </ChefWrapBox>
        {/* <Link to='/reservation'>예약하러 가기</Link> */}
      </ChefInformation>
    </ChefInfoGrid>
  );
}

export default ChefInfo;
