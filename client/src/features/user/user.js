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
      state.userId = action.payload.id;
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
      state.isChef = action.payload.isChef;
      state.isOauth = action.payload.isOauth;
    },
    logout: (state) => {
      state.nickname = '';
      state.email = '';
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userStatus = (state) => state.user;
export default userSlice.reducer;
