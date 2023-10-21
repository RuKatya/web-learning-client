import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import authReducer from './auth/authReducer';
import dashboardReducer from './dashboard/dashboardReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
