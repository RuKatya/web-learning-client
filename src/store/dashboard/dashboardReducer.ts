import { createSlice } from '@reduxjs/toolkit';

import { SubjectsState } from '../types';
import { subjectsThunk } from './dashboardAPI';

const initialState = {
  subjects: [],
  message: '',
  status: 'idle',
  continueWork: false,
} as SubjectsState;

const dashboardSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subjectsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(subjectsThunk.fulfilled, (state, { payload: { continueWork, subjects } }) => {
        console.log('dashboard', continueWork, subjects);
        state.status = 'idle';
        state.subjects = subjects;
        state.continueWork = continueWork;
      })
      .addCase(subjectsThunk.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.message = payload ? payload : '';
      });
  },
});

// export const {  } = dashboardSlice.actions;
export const thunk = { subjectsThunk };

export default dashboardSlice.reducer;
