import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    deleteReservation: (state, action) => {},
    getReservation: (state, action) => {
      state.push(action.payload.reservationData);
    },
  },
});

export const { deleteReservation, getReservation } = reservationSlice.actions;
export const reservationStatus = (state) => state.reservation;
export default reservationSlice.reducer;
