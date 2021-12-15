import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  data: [],
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    getReview: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { getReview } = reviewSlice.actions;
export const reviewStatus = (state) => state.review;
export default reviewSlice.reducer;
