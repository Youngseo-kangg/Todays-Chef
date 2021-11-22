import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginModalOpen: false, // 로그인 관련 모달창 상태
  isSignUpModalOpen: false, // 회원가입 관련 모달창 상태
  isLoginErrorModalOpen: false, // 로그인 에러 모달창 상태
  isServerError: false, // 서버 에러 표시 상태
  isLogoutModalOpen: false, // 로그아웃 모달창 상태
  isReservDeclinedModalOpen: false, // 로그인 상태 아닌데 예약하려고 하는 상태
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
    openLoginErrorModal: (state) => {
      state.isLoginErrorModalOpen = true;
    },
    closeLoginErrorModal: (state) => {
      state.isLoginErrorModalOpen = false;
    },
    openSignUpModal: (state) => {
      state.isSignUpModalOpen = true;
    },
    closeSignUpModal: (state) => {
      state.isSignUpModalOpen = false;
    },
    setServerErrorTrue: (state) => {
      state.isServerError = true;
    },
    setServerErrorFalse: (state) => {
      state.isServerError = false;
    },
    openLogoutModal: (state) => {
      state.isLogoutModalOpen = true;
    },
    closeLogoutModal: (state) => {
      state.isLogoutModalOpen = false;
    },
    openReservDeclinedModalOpen: (state) => {
      state.isReservDeclinedModalOpen = true;
    },
    closeReservDeclinedModalOpen: (state) => {
      state.isReservDeclinedModalOpen = false;
    },
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  openLoginErrorModal,
  closeLoginErrorModal,
  openSignUpModal,
  closeSignUpModal,
  setServerErrorTrue,
  setServerErrorFalse,
  openLogoutModal,
  closeLogoutModal,
  openReservDeclinedModalOpen,
  closeReservDeclinedModalOpen,
} = modalSlice.actions;
export const modalStatus = (state) => state.modal;
export default modalSlice.reducer;
