import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  userId: -1,
  nickname: '',
  email: '',
  isChef: false,
  isOauth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.username = '';
      state.email = '';
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userStatus = (state) => state.user;
export default userSlice.reducer;
