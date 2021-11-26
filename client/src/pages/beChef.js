import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  sumbitBechef,
  updateAccessToken,
  userStatus,
} from '../features/user/user';
import { openIsSubmitCompleteModal, modalStatus } from '../features/user/modal';
import {
  BeAChefGrid,
  BeAChefIntro,
  BeAChefDesc,
  BeAChefResumeWrap,
} from '../styled/styleBeChef';
import SubmitCompleteModal from '../modal/submitCompleteModal';

require('dotenv').config();
axios.defaults.withCredentials = true;

function BeAChef() {
  const beChefText = [
    '셰프의 상상력을 발휘한, 세상에 하나뿐인 요리를 제공해 보세요.',
    '고객 개개인에게 최적화한 파인다이닝 서비스 경험을 쌓을 수 있습니다.',
    '이력서를 등록하고 24시간 후 고객센터에서 셰프 선정 여부를 안내해 드립니다.',
  ];
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_API_URL || `http://localhost:4000`;
  const userState = useSelector(userStatus);
  const modalState = useSelector(modalStatus);
  const [textIdx, setTextIdx] = useState(0); // beChefText 몇번째 보여줄지 정하는 state
  const [resumeName, setResumeName] = useState(''); // resume 파일 이름
  const [resumePdf, setResumePdf] = useState({}); // resume 파일 자체
  const [errorMsg, setErrorMsg] = useState('');

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

  const attachResume = (event) => {
    // formData에 파일 붙여주기
    let formData = new FormData();
    formData.append('file', event.target.files[0]);
    setErrorMsg(''); // 에러메세지 초기화
    // 로컬에서 선택한 pdf파일의 제목을 input에 보여주기
    setResumeName(event.target.files[0].name);
    // resume 파일 업뎃
    setResumePdf(formData);

    // FormData의 key 확인
    for (let key of formData.keys()) {
      console.log(key);
    }
    //FormData의 value 확인
    for (let value of formData.values()) {
      console.log(value.name);
    }
  };

  const sendResumeToServer = async () => {
    try {
      if (resumeName === '') {
        setErrorMsg('파일을 업로드 해주세요.');
      } else if (resumeName.split('.')[1] !== 'pdf') {
        setErrorMsg('pdf형식이 아닙니다.');
      } else if (userState.userId === -1) {
        setErrorMsg('로그인 상태에서만 제출이 가능합니다.');
      } else if (userState.isSubmit) {
        setErrorMsg('이미 제출한 상태입니다.');
      } else if (userState.isAdmin) {
        setErrorMsg('관리자는 제출할 수 없습니다.');
      } else {
        let submitResult = await axios.post(`${url}/chef`, resumePdf, {
          headers: {
            authorization: `bearer ${userState.accessToken}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        // 만약 응답에 새로운 accessToken이 있다면 그걸로 업데이트 해주기
        if (submitResult.data.accessToken) {
          dispatch(
            updateAccessToken({ accessToken: submitResult.data.accessToken })
          );
        }
        dispatch(sumbitBechef()); // dispatch로 submit 바꿔주기
        dispatch(openIsSubmitCompleteModal()); // submit 완료했다는 모달 띄워주기
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {modalState.isSubmitCompleteModalOpen ? <SubmitCompleteModal /> : null}
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
              <div className='beChefDescImg' onClick={() => setTextIdx(0)}>
                <span className={textIdx === 0 ? 'imgActive' : null}></span>
              </div>
              <div className='beChefDescImg' onClick={() => setTextIdx(1)}>
                <span className={textIdx === 1 ? 'imgActive' : null}></span>
              </div>
              <div className='beChefDescImg' onClick={() => setTextIdx(2)}>
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
                <div id='resumeFileWrap'>
                  <input
                    id='resumeFileName'
                    value={resumeName}
                    placeholder='첨부파일'
                    readOnly
                  />
                  <label htmlFor='resumeFile'>업로드</label>
                  <input
                    type='file'
                    id='resumeFile'
                    style={{ display: 'none' }}
                    name='resumeFile'
                    onChange={attachResume}
                  />
                </div>
                {errorMsg ? <p>{errorMsg}</p> : null}
              </form>
              <button id='submitBtn' onClick={sendResumeToServer}>
                제출
              </button>
            </div>
          </div>
        </BeAChefResumeWrap>
      </BeAChefGrid>
    </>
  );
}

export default BeAChef;
