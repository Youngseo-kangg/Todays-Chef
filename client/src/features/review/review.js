import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    writeReview: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    getReview: (state) => {},
  },
});

export const { writeReview, getReview } = reviewSlice.actions;
export const reviewStatus = (state) => state.review;
export default reviewSlice.reducer;
