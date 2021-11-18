import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styled/customCalander.css';
import { ReservationWrap, ReservDateAndInfo } from '../styled/styleReservation';
import subDays from 'date-fns/subDays';
import { ko } from 'date-fns/esm/locale';
import { getYear, getMonth, setHours, setMinutes } from 'date-fns';
import { Controller } from 'react-hook-form';

function ReservationDate({
  makeReservation,
  setMakeReservation,
  register,
  control,
  errors,
  setSearchAddress,
  searchAddress,
  address,
  addressErr,
}) {
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  let dateFormat = 'yyyy년 MMMM dd일, aa h:mm';

  return (
    <>
      <ReservationWrap className={makeReservation === 1 ? null : 'none'}>
        <div onClick={() => setMakeReservation(0)}>&lt;</div>
        <div className='reservScheduleAndInfo'>
          <ReservDateAndInfo>
            <h2>1. 일정 및 개인정보 작성</h2>
            <div className='reservInputWrap'>
              <div className='reservInput'>
                <label htmlFor='reservDateAndTime'>예약 날짜와 시간</label>
                <Controller
                  control={control}
                  name='reservDateAndTime'
                  format={dateFormat}
                  defaultValue={null}
                  render={({ field }) => (
                    <DatePicker
                      withPortal
                      placeholderText='날짜를 선택해주세요.'
                      locale={ko}
                      selected={field.value}
                      onChange={(e) => field.onChange(e)}
                      minDate={new Date()}
                      includeTimes={[
                        setHours(setMinutes(new Date(), 0), 12),
                        setHours(setMinutes(new Date(), 30), 12),
                        setHours(setMinutes(new Date(), 0), 13),
                        setHours(setMinutes(new Date(), 30), 13),
                        setHours(setMinutes(new Date(), 0), 14),
                        setHours(setMinutes(new Date(), 30), 14),
                        setHours(setMinutes(new Date(), 0), 15),
                        setHours(setMinutes(new Date(), 30), 15),
                        setHours(setMinutes(new Date(), 0), 16),
                        setHours(setMinutes(new Date(), 30), 16),
                        setHours(setMinutes(new Date(), 0), 17),
                        setHours(setMinutes(new Date(), 30), 17),
                        setHours(setMinutes(new Date(), 0), 18),
                        setHours(setMinutes(new Date(), 30), 18),
                        setHours(setMinutes(new Date(), 0), 19),
                        setHours(setMinutes(new Date(), 30), 19),
                      ]}
                      excludeDates={[new Date(), subDays(new Date(), -1)]}
                      dateFormat={dateFormat}
                      showTimeSelect
                      renderCustomHeader={({
                        date,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                        decreaseMonth,
                        increaseMonth,
                      }) => (
                        <div
                          style={{
                            margin: 10,
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: 20,
                          }}
                        >
                          <div
                            className='btn_month btn_month-prev'
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                            style={{
                              cursor: 'pointer',
                            }}
                          >
                            &lt;
                          </div>
                          <div className='month-day'>
                            {getYear(date)}.{months[getMonth(date)]}
                          </div>
                          <div
                            className='btn_month btn_month-next'
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                            style={{
                              cursor: 'pointer',
                            }}
                          >
                            &gt;
                          </div>
                        </div>
                      )}
                    />
                  )}
                ></Controller>
              </div>
            </div>

            <div className='reservInputWrap'>
              <div className='reservInput findAddress'>
                <label htmlFor='reservMainAddress'>주소</label>
                <input
                  type='text'
                  name='reservMainAddress'
                  placeholder='주소를 입력해주세요.'
                  defaultValue={address}
                  onClick={() => setSearchAddress(true)}
                  id='reservMainAddress'
                />
              </div>
              {!addressErr ? (
                <span className='reservAlert'>주소 입력이 필요합니다.</span>
              ) : null}
            </div>

            <div className='reservInputWrap'>
              <div className='reservInput'>
                <label htmlFor='reservSubAddress'>세부 주소</label>
                <input
                  type='text'
                  name='reservSubAddress'
                  placeholder='세부 주소'
                  {...register('reservSubAddress', {
                    required: '세부 주소 입력이 필요합니다.',
                  })}
                />
              </div>
              {errors.reservSubAddress && (
                <span className='reservAlert'>
                  {errors.reservSubAddress.message}
                </span>
              )}
            </div>

            <div className='reservInputWrap'>
              <div className='reservInput'>
                <label htmlFor='reservPeople'>인원</label>
                <Controller
                  control={control}
                  name='reservPeople'
                  render={({ field }) => (
                    <select
                      defaultValue='2'
                      onChange={(e) => field.onChange(e)}
                    >
                      <option value='2'>2명</option>
                      <option value='3'>3명</option>
                      <option value='4'>4명</option>
                    </select>
                  )}
                />
              </div>
              {errors.reservPeople && (
                <span className='reservAlert'>
                  {errors.reservPeople.message}
                </span>
              )}
            </div>

            <div className='reservInputWrap'>
              <div className='reservInput'>
                <label htmlFor='reservMobile'>핸드폰 번호</label>
                <input
                  type='text'
                  name='reservMobile'
                  placeholder='핸드폰 번호 (ex. 01012345678)'
                  {...register('reservMobile', {
                    required: '핸드폰 번호 입력이 필요합니다.',
                    pattern: {
                      value: /^[0-9]+$/,
                      message: '숫자로만 입력해주세요.',
                    },
                  })}
                />
              </div>
              {errors.reservMobile && (
                <span className='reservAlert'>
                  {errors.reservMobile.message}
                </span>
              )}
            </div>
          </ReservDateAndInfo>
        </div>
        <div onClick={() => setMakeReservation(2)}>&gt;</div>
      </ReservationWrap>
    </>
  );
}

export default ReservationDate;
