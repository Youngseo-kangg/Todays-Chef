import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import userReducer from '../features/user/user';
import modalReducer from '../features/user/modal';
import reviewReducer from '../features/review/review';
import reservationReducer from '../features/reservation/reservation';
import chefReducer from '../features/chef/chef';

const reducers = combineReducers({
  user: userReducer,
  modal: modalReducer,
  review: reviewReducer,
  reservation: reservationReducer,
  chef: chefReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'chef', 'modal'],
  blacklist: ['review', 'reservation'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
