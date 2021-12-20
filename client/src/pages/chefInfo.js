import { useState, useEffect } from 'react';
import axios from 'axios';
import ChefAllInfo from '../component/chefInfoInfo';
import ChefAllCourse from '../component/chefInfoCourse';
import ChefAllReview from '../component/chefInfoReview';
import PictureModal from '../modal/pictureModal';
import {
  ChefInfoGrid,
  ChefInfoDesc,
  ChefInformation,
  ChefWrapBox,
} from '../styled/styleChefInfo';
import { modalStatus, openServerErrorModal } from '../features/user/modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';

AOS.init();

require('dotenv').config();
axios.defaults.withCredentials = true;

function ChefInfo() {
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const dispatch = useDispatch();
  const modalState = useSelector(modalStatus);
  const [chefInfoIdx, setChefInfoIdx] = useState(0);
  const query = window.location.search.split('=')[1]; // chefId=~~에서 '='뒤 텍스트 가져오기
  const [loading, setLoading] = useState(true);
  const [chefInfo, setChefInfo] = useState({
    info: {},
    course: [],
    reviewLength: 0,
  }); // 셰프 정보 담아두기
  const [magnifyPic, setMagnifyPic] = useState({
    picState: false, // 사진 모달 상태
    picAddress: '', // 사진 저장되어 있는 s3버킷의 주소
  });

  const getChef = async () => {
    try {
      const getChefResult = await axios.get(`${url}/chef?chefId=${query}`);
      setChefInfo({
        info: getChefResult.data.data,
        course: getChefResult.data.chefCourse,
        reviewLength: getChefResult.data.chefReviewLength,
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
      if (err.message === 'Network Error') {
        dispatch(openServerErrorModal());
      }
    }
  };
  useEffect(() => {
    getChef();
  }, []); // 들어오자마자 한번만

  return (
    <>
      {magnifyPic.picState ? (
        <PictureModal setMagnifyPic={setMagnifyPic} magnifyPic={magnifyPic} />
      ) : null}
      <ChefInfoGrid>
        <ChefInfoDesc>
          {loading ? null : (
            <h2 data-aos='fade-zoom-in'>
              {chefInfo.info.chefName} 셰프님의 만찬을 즐겨보세요
            </h2>
          )}
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
            {chefInfoIdx === 0 ? (
              <ChefAllInfo chefInfo={chefInfo.info} />
            ) : null}
            {chefInfoIdx === 1 ? (
              <ChefAllCourse chefCourse={chefInfo.course} query={query} />
            ) : null}
            {chefInfoIdx === 2 ? (
              <ChefAllReview
                reviewLength={chefInfo.reviewLength}
                query={query}
                setMagnifyPic={setMagnifyPic}
              />
            ) : null}
          </ChefWrapBox>
          {/* <Link to='/reservation'>예약하러 가기</Link> */}
        </ChefInformation>
      </ChefInfoGrid>
    </>
  );
}

export default ChefInfo;
