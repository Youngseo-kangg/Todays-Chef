import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  data: [],
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    deleteReservation: (state, action) => {
      // action.payload.id 제외하고 다 두기
      state.data = state.data.filter((el) => el.id !== action.payload.id);
    },
    getReservation: (state, action) => {
      state.data = [...action.payload.reservationData];
    },
    madeReservation: (state, action) => {
      state.data = [...state.data, action.payload.newData];
    },
  },
});

export const { deleteReservation, getReservation, madeReservation } =
  reservationSlice.actions;
export const reservationStatus = (state) => state.reservation;
export default reservationSlice.reducer;
