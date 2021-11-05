import { useState, useEffect, useMemo } from 'react';
import { throttle } from 'lodash';
import {
  BeAChefGrid,
  BeAChefIntro,
  BeAChefDesc,
  BeAChefResumeWrap,
} from '../styled/styleBeChef';

function BeAChef() {
  const beChefText = [
    '셰프의 상상력을 발휘한, 세상에 하나뿐인 요리를 제공해 보세요.',
    '고객 개개인에게 최적화한 파인다이닝 서비스 경험을 쌓을 수 있습니다.',
    '이력서를 등록하고 24시간 후 고객센터에서 셰프 선정 여부를 안내해 드립니다.',
  ];

  const [textIdx, setTextIdx] = useState(0); // beChefText 몇번째 보여줄지 정하는 state

  let textIdxMinus = () => {
    if (textIdx === 0) {
      setTextIdx(2);
    } else {
      setTextIdx(textIdx - 1);
    }
  }; // 보여질 beChefText index++하는 함수
  let textIdxPlus = () => {
    if (textIdx === 2) {
      setTextIdx(0);
    } else {
      setTextIdx(textIdx + 1);
    }
  }; // 보여질 beChefText index--하는 함수

  return (
    <BeAChefGrid>
      <BeAChefIntro>
        <div id='beChefSlogan'>
          <div id='beChefSloganText'>
            <h3>레스토랑에서 고객의 식탁으로</h3>
            <p>다양한 고객을 만나고 경험을 쌓고,</p>
            <p>다채로운 미식 체험을 제공해 보세요.</p>
          </div>
        </div>
      </BeAChefIntro>
      <BeAChefDesc>
        <div id='beChefDescTitleWrap'>
          <h3 id='beChefDescTitle'>Todays chef의 셰프가 되어보세요.</h3>
        </div>

        <div id='beChefDescWrap'>
          <section id='beChefDesc'>
            <div className='beChefDescImg'>
              <span className={textIdx === 0 ? 'imgActive' : null}></span>
            </div>
            <div className='beChefDescImg'>
              <span className={textIdx === 1 ? 'imgActive' : null}></span>
            </div>
            <div className='beChefDescImg'>
              <span className={textIdx === 2 ? 'imgActive' : null}></span>
            </div>
          </section>
        </div>

        <div id='beChefDescTextWrap'>
          <section id='beChefDescText'>
            <div className='beChefDescArrow' onClick={textIdxMinus}>
              &lt;
            </div>
            <p>{beChefText[textIdx]}</p>
            <div className='beChefDescArrow' onClick={textIdxPlus}>
              &gt;
            </div>
          </section>
        </div>
      </BeAChefDesc>

      <BeAChefResumeWrap>
        <div id='resumeTitleWrap'>
          <h3 id='resumeTitle'>셰프 신청 하기</h3>
        </div>
        <p>
          자유 형식의 이력서, 자기소개서 및 경력증빙서류를 하나의 pdf로 제출해
          주시면 됩니다.
        </p>
        <div id='resumeFormWrap'>
          <div id='resumeForm'>
            <form>
              <select name='resumeCuisine' id='resumeCuisine'>
                <option>한식</option>
                <option>일식</option>
                <option>중식</option>
                <option>양식</option>
              </select>
              <div id='resumeFileWrap'>
                <input
                  id='resumeFileName'
                  defaultValue='첨부파일'
                  placeholder='첨부파일'
                />
                <label htmlFor='resumeFile'>업로드</label>
                <input
                  type='file'
                  id='resumeFile'
                  style={{ display: 'none' }}
                  name='resumeFile'
                  id='resumeFile'
                />
              </div>
            </form>
            <button id='submitBtn'>제출</button>
          </div>
        </div>
      </BeAChefResumeWrap>
    </BeAChefGrid>
  );
}

export default BeAChef;
