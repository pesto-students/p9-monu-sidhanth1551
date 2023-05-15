import { configureStore } from '@reduxjs/toolkit';
import linkReducer from '../features/links/linkSlice';

export const store = configureStore({
  reducer: {
    links: linkReducer,
  }, 
});
