import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  userId: -1,
  nickname: '',
  email: '',
  isChef: false,
  isOauth: false,
  accessToken: null,
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
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.userId = -1;
      state.nickname = '';
      state.email = '';
      state.isChef = false;
      state.isOauth = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userStatus = (state) => state.user;
export default userSlice.reducer;
