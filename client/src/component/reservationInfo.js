import { ReservationWrap, ReservDateAndInfo } from '../styled/styleReservation';

function ReservationInfo({ setMakeReservation }) {
  return (
    <ReservationWrap>
      <button onClick={() => setMakeReservation(1)}>&lt;</button>
      <div className='reservScheduleAndInfo'>
        <ReservDateAndInfo id='reservInfo'>
          <h2>2. 세부 정보 작성</h2>
          <div className='reservInputWrap'>
            <div className='reservInput'>
              <label htmlFor='fire'>화구 갯수</label>
              <select name='fire'>
                <option value='2'>2개</option>
                <option value='3'>3개</option>
                <option value='4'>4개</option>
                <option value='5'>4개 이상</option>
              </select>
            </div>
          </div>
          <div className='reservInputWrap'>
            <div className='reservInput'>
              <label htmlFor='oven'>오븐 여부</label>
              <select name='oven'>
                <option value='true'>예</option>
                <option value='false'>아니오</option>
              </select>
            </div>
          </div>
          <div className='reservInputWrap'>
            <div className='reservInput'>
              <label htmlFor='allergy'>알러지</label>
              <input type='text' name='allergy' placeholder='알러지 식품' />
            </div>
          </div>
          <div className='reservInputWrap large'>
            <div className='reservInput'>
              <label htmlFor='comment'>셰프에게 전달할 코멘트</label>
              <textarea name='comment' placeholder='셰프에게 전달할 코멘트' />
            </div>
          </div>
        </ReservDateAndInfo>
      </div>

      <button onClick={() => setMakeReservation(3)}>&gt;</button>
    </ReservationWrap>
  );
}

export default ReservationInfo;
