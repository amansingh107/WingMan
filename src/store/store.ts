import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productsReducer from './productsSlice';

// Create the Redux store
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook for dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
