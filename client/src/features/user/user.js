import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: -1,
  nickname: '',
  userImg: '',
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
      state.userImg = action.payload.userImg;
      state.email = action.payload.email;
      state.isChef = action.payload.isChef;
      state.isOauth = action.payload.isOauth;
      state.accessToken = action.payload.accessToken;
    },
    updateAccessToken: (state, action) => {
      state.userId = action.payload.id;
      state.nickname = action.payload.nickname;
      state.userImg = action.payload.userImg;
      state.email = action.payload.email;
      state.isChef = action.payload.isChef;
      state.isOauth = action.payload.isOauth;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.userId = -1;
      state.nickname = '';
      state.userImg = '';
      state.email = '';
      state.isChef = false;
      state.isOauth = false;
      state.accessToken = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userStatus = (state) => state.user;
export default userSlice.reducer;
