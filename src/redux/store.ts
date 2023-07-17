import { configureStore } from '@reduxjs/toolkit';
import productImageReducer from './features/productImageSlice';
import productSearchReducer from './features/productSearchSlice';

export const store = configureStore({
  reducer: {
    productImageReducer,
    productSearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
