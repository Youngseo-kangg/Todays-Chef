import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  data: [],
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    writeReview: (state, action) => {},
    getReview: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { writeReview, getReview } = reviewSlice.actions;
export const reviewStatus = (state) => state.review;
export default reviewSlice.reducer;
