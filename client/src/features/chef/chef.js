import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chefId: -1,
  chefName: '',
  cuisine: '',
  chefImg: '',
  greeting: '',
  career: '',
  values: '',
  rating: '',
  chUserId: -1,
  courses: [],
};

export const chefSlice = createSlice({
  name: 'chef',
  initialState,
  reducers: {
    chefLogin: (state, action) => {
      state.chefId = action.payload.chefId;
    },
    chefMypage: (state, action) => {
      state.chefName = action.payload.chefName;
      state.cuisine = action.payload.cuisine;
      state.chefImg = action.payload.chefImg;
      state.greeting = action.payload.greeting;
      state.career = action.payload.career;
      state.values = action.payload.values;
      state.rating = action.payload.rating;
      state.chUserId = action.payload.chUserId;
    },
    chefCourses: (state, action) => {
      state.courses = action.payload.courses;
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload.data);
    },
    updateCourse: (state, action) => {
      let target = state.courses.indexOf(
        state.courses.filter((el) => el.id === action.payload.target.id)[0]
      );
      state.courses[target] = action.payload.target;
    },
    deleteCourse: (state, action) => {
      let target = state.courses.indexOf(
        state.courses.filter((el) => el.id === action.payload.targetId)[0]
      );
      state.courses.splice(target, 1);
      state.courses = state.courses;
    },
    chefLogout: (state) => {
      state.userId = -1;
      state.nickname = '';
      state.userImg = '';
      state.email = '';
      state.isChef = false;
      state.isOauth = false;
      state.isSubmit = false;
      state.isAdmin = false;
      state.accessToken = null;
      state.courses = [];
    },
  },
});

export const {
  chefLogin,
  chefMypage,
  chefCourses,
  chefLogout,
  addCourse,
  updateCourse,
  deleteCourse,
} = chefSlice.actions;
export const chefStatus = (state) => state.chef;
export default chefSlice.reducer;
