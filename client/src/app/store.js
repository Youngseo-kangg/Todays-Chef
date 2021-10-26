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
import reviewReducer from '../features/review/review';
import reservationReducer from '../features/reservation/reservation';

const reducers = combineReducers({
  user: userReducer,
  review: reviewReducer,
  reservation: reservationReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
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
