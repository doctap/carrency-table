import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CurrencySlice from '../reducers/CurrencySlice';

const rootReducer = combineReducers({
  CurrencySlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
