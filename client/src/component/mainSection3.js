import {
  MainSection3Wrap,
  BestOfChefsWrap,
  BestChefBox,
  RatingStar,
  ChefStar,
} from '../styled/styleMain';

import { useEffect, useState } from 'react';

import basic_profile from '../todaysChefIMG/basic_profile.jpeg';
import axios from 'axios';

import fullStar from '../todaysChefIMG/ratingStar.svg';
import halfStar from '../todaysChefIMG/halfStar.svg';
import noneStar from '../todaysChefIMG/noneStar.svg';

function MainSection3() {
  const [chefData, setChefData] = useState([]);
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;

  const getBestChef = async () => {
    const chefInfo = await axios.get(`${url}/main`);
    setChefData(chefInfo.data.data);
  };

  console.log(chefData);

  useEffect(() => {
    getBestChef();
  }, []);

  const ratingStar = (el) => {
    const arr = [];
    const NumRating = Number(el.rating);

    if (NumRating >= 0 && NumRating < 0.5) {
      arr.push(
        <div>
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 0.5 && NumRating < 1) {
      arr.push(
        <div>
          <img src={halfStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 1 && NumRating < 1.5) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 1.5 && NumRating < 2) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={halfStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 2 && NumRating < 2.5) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 2.5 && NumRating < 3) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={halfStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 3 && NumRating < 3.5) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={noneStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 3.5 && NumRating < 4) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={halfStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 4 && NumRating < 4.5) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={noneStar} alt='' />
        </div>
      );
    } else if (NumRating >= 4.5 && NumRating < 5) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={halfStar} alt='' />
        </div>
      );
    } else if (NumRating === 5) {
      arr.push(
        <div>
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
          <img src={fullStar} alt='' />
        </div>
      );
    }

    return arr;
  };

  return (
    <>
      <MainSection3Wrap>
        <h3>각 요리별 최고의 셰프를 알아보고 경험해보세요.</h3>
        <BestOfChefsWrap>
          <ul>
            {chefData.map((el, idx) => {
              return (
                <li key={idx} className='chef'>
                  <div className='bestCuisine'>{el.cuisine}</div>
                  <div className='chefPic'>
                    {el.chefImg === '' ? (
                      <img src={basic_profile} alt='셰프 사진' />
                    ) : (
                      <img src={el.chefImg} alt='셰프 사진' />
                    )}
                  </div>
                  <h4>{el.chefName}</h4>
                  <ChefStar>{ratingStar(el)}</ChefStar>
                  <span>{el.rating}</span>
                </li>
              );
            })}
          </ul>
        </BestOfChefsWrap>
      </MainSection3Wrap>
    </>
  );
}

export default MainSection3;
