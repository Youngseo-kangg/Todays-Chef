import { ReservationWrap, ReservDateAndInfo } from '../styled/styleReservation';

function ReservationInfo({
  makeReservation,
  setMakeReservation,
  register,
  errors,
  addressErr,
}) {
  return (
    <ReservationWrap className={makeReservation === 2 ? null : 'none'}>
      <div className='arrow' onClick={() => setMakeReservation(1)}>
        &lt;
      </div>
      <div className='reservScheduleAndInfo'>
        <ReservDateAndInfo id='reservInfo'>
          <h2>2. 세부 정보 작성</h2>
          <div className='reservInputWrap'>
            <div className='reservInput'>
              <label htmlFor='reservFire'>화구 갯수</label>
              <select
                name='reservFire'
                selected='1개'
                {...register('reservFire', {
                  validate: (value) =>
                    value === '1' ? '화구는 최소 2개 이상이여야 합니다.' : null,
                })}
              >
                <option value='1'>1개</option>
                <option value='2'>2개</option>
                <option value='3'>3개</option>
                <option value='4'>4개</option>
                <option value='5'>4개 이상</option>
              </select>
            </div>
            {errors.reservFire && (
              <span className='reservAlert'>{errors.reservFire.message}</span>
            )}
          </div>
          <div className='reservInputWrap'>
            <div className='reservInput'>
              <label htmlFor='reservOven'>오븐 여부</label>
              <select name='reservOven' {...register('reservOven')}>
                <option value='true'>예</option>
                <option value='false'>아니오</option>
              </select>
            </div>
          </div>
          <div className='reservInputWrap'>
            <div className='reservInput'>
              <label htmlFor='reservAllergy'>알러지</label>
              <input
                type='text'
                name='reservAllergy'
                placeholder='알러지가 있는 재료에 대해 작성해 주세요.'
                {...register('reservAllergy')}
              />
            </div>
          </div>
          <div className='reservInputWrap large'>
            <div className='reservInput'>
              <label htmlFor='reservComment'>셰프에게 전달할 코멘트</label>
              <textarea
                name='reservComment'
                placeholder='셰프에게 전달할 코멘트'
                {...register('reservComment')}
              />
            </div>
          </div>
          {Object.keys(errors).length > 0 || !addressErr ? (
            <div className='reservInputWrap'>
              <span className='reservAlert'>작성 내용을 확인해주세요.</span>
            </div>
          ) : null}
        </ReservDateAndInfo>
      </div>
      <button type='submit'>&gt;</button>
    </ReservationWrap>
  );
}

export default ReservationInfo;
