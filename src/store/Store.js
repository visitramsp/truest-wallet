import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {confirmationSlice} from './recoveryConfirmation/reduce';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'persistedReducer',
  storage: AsyncStorage,
  blacklist: [''],
  whitelist: ['user'],
};

const combine = combineReducers({
  recoveryConfirmation: confirmationSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, combine);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

let persistor = persistStore(store);
export {persistor};
