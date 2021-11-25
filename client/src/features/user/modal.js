import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginModalOpen: false, // 로그인 관련 모달창 상태
  isSignUpModalOpen: false, // 회원가입 관련 모달창 상태
  isLoginErrorModalOpen: false, // 로그인 에러 모달창 상태
  isLogoutErrorModalOpen: false, // 로그아웃 에러 모달창 상태
  isServerErrorModalOpen: false, // 서버 에러 모달창 상태
  isLogoutModalOpen: false, // 로그아웃 모달창 상태
  isReservDeclinedModalOpen: false, // 로그인 상태 아닌데 예약하려고 하는 상태
  isNeedReLoginModalOpen: false, // 재로그인이 필요하다고 알려주는 상태
  isSubmitCompleteModalOpen: true, // 제출 완료 되었다는 모달
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
    openLogoutErrorModal: (state) => {
      state.isLogoutErrorModalOpen = true;
    },
    closeLogoutErrorModal: (state) => {
      state.isLogoutErrorModalOpen = false;
    },
    openSignUpModal: (state) => {
      state.isSignUpModalOpen = true;
    },
    closeSignUpModal: (state) => {
      state.isSignUpModalOpen = false;
    },
    openServerErrorModal: (state) => {
      state.isServerErrorModalOpen = true;
    },
    closeServerErrorModal: (state) => {
      state.isServerErrorModalOpen = false;
    },
    openLogoutModal: (state) => {
      state.isLogoutModalOpen = true;
    },
    closeLogoutModal: (state) => {
      state.isLogoutModalOpen = false;
    },
    openReservDeclinedModal: (state) => {
      state.isReservDeclinedModalOpen = true;
    },
    closeReservDeclinedModal: (state) => {
      state.isReservDeclinedModalOpen = false;
    },
    openIsNeedReLoginModal: (state) => {
      state.isNeedReLoginModalOpen = true;
    },
    closeIsNeedReLoginModal: (state) => {
      state.isNeedReLoginModalOpen = false;
    },
    openIsSubmitCompleteModal: (state) => {
      state.isSubmitCompleteModalOpen = true;
    },
    closeIsSubmitCompleteModal: (state) => {
      state.isSubmitCompleteModalOpen = false;
    },
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  openLoginErrorModal,
  closeLoginErrorModal,
  openLogoutErrorModal,
  closeLogoutErrorModal,
  openSignUpModal,
  closeSignUpModal,
  openServerErrorModal,
  closeServerErrorModal,
  openLogoutModal,
  closeLogoutModal,
  openReservDeclinedModal,
  closeReservDeclinedModal,
  openIsNeedReLoginModal,
  closeIsNeedReLoginModal,
  openIsSubmitCompleteModal,
  closeIsSubmitCompleteModal,
} = modalSlice.actions;
export const modalStatus = (state) => state.modal;
export default modalSlice.reducer;
