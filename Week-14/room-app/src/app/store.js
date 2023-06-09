import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from '../features/button/buttonSlice';

export const store = configureStore({
  reducer: {
    button: buttonReducer,
  },
});
