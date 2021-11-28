import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    deleteReservation: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    getReservation: (state, action) => {
      state = [...action.payload.reservationData];
    },
  },
});

export const { deleteReservation, getReservation } = reservationSlice.actions;
export const reservationStatus = (state) => state.reservation;
export default reservationSlice.reducer;
