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
  isSubmitCompleteModalOpen: false, // 제출 완료 되었다는 모달
  isDeleteReservModalOpen: 0, // 예약 삭제 할건지 + 삭제 하는 모달
  isAdminOrChefWarningModalOpen: false, // 셰프나 admin이라서 예약 안된다는 모달
  merchantUid: '',
  failModalOpen: false,
  failMessage: '',
  successModalOpen: false,
  successMessage: '',
  choiceModalOpen: 0,
  choiceTitle: '',
  choiceMessage: '',
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
    openIsDeleteReservModal: (state, action) => {
      state.isDeleteReservModalOpen = action.payload.id;
      state.merchantUid = action.payload.merchantUid;
    },
    closeIsDeleteReservModal: (state) => {
      state.isDeleteReservModalOpen = 0;
      state.merchantUid = '';
    },
    openFailModal: (state, action) => {
      state.failModalOpen = true;
      state.failMessage = action.payload.message;
    },
    closeFailModal: (state) => {
      state.failModalOpen = false;
      state.failMessage = '';
    },
    openSuccessModal: (state, action) => {
      state.successModalOpen = true;
      state.successMessage = action.payload.message;
    },
    closeSuccessModal: (state) => {
      state.successModalOpen = false;
      state.successMessage = '';
    },
    openChoiceModal: (state, action) => {
      state.choiceModalOpen = action.payload.target;
      state.choiceTitle = action.payload.choiceTitle;
      state.choiceMessage = action.payload.message;
    },
    closeChoiceModal: (state) => {
      state.choiceModalOpen = 0;
      state.choiceTitle = '';
      state.choiceMessage = '';
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
  openIsDeleteReservModal,
  closeIsDeleteReservModal,
  openFailModal,
  closeFailModal,
  openSuccessModal,
  closeSuccessModal,
  openChoiceModal,
  closeChoiceModal,
} = modalSlice.actions;
export const modalStatus = (state) => state.modal;
export default modalSlice.reducer;
