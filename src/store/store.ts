import { configureStore } from '@reduxjs/toolkit';

import currencyReducer from './reducers/currency-slice';

export const store = configureStore({
  reducer: {
    reducer: currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
