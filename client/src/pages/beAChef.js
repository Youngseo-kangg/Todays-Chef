import {
  BeAChefGrid,
  BeAChefIntro,
  BeAChefDesc,
  BeAChefResumeWrap,
} from '../styled/styleBeAChef';

function BeAChef() {
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
        <h3 id='beChefDescTitle'>Todays chef에서 셰프로 활동해 보세요.</h3>
        <section id='beChefDesc'>
          <div className='beChefDescText'>
            <div>
              <p>셰프의 상상력을 발휘한,</p>
              <p>세상에 하나뿐인 미식 코스를</p>
              <p>제공해 보세요.</p>
            </div>
          </div>
          <div className='beChefDescText'>
            <div>
              <p>고객 개개인에게 최적화한</p>
              <p>파인다이닝 서비스 경험을</p>
              <p>쌓을 수 있습니다.</p>
            </div>
          </div>
          <div className='beChefDescText'>
            <div>
              <p>이력서를 등록하고 24~72시간 후</p>
              <p>고객센터에서 셰프 선정 여부를</p>
              <p>안내해 드립니다.</p>
            </div>
          </div>
        </section>
      </BeAChefDesc>
      <BeAChefResumeWrap>
        <h3 id='resumeTitle'>셰프 신청 하기</h3>
        <p>
          자유 형식의 이력서, 자기소개서 및 경력증빙서류를 하나의 pdf로 제출해
          주시면 됩니다.
        </p>
        <div id='resumeFormWrap'>
          <form>
            <select name='resumeCuisine' id='resumeCuisine'>
              <option>한식</option>
              <option>일식</option>
              <option>중식</option>
              <option>양식</option>
            </select>
            <input type='file' name='resumeFile' id='resumeFile' />
            <button type='submit' id='submitBtn'>
              제출
            </button>
          </form>
        </div>
      </BeAChefResumeWrap>
    </BeAChefGrid>
  );
}

export default BeAChef;
