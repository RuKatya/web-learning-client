import { createSlice } from '@reduxjs/toolkit';

import { SubjectsState } from '../types';
import { subjectsThunk, subjectsAddThunk, subjectsDeleteThunk, subjectsRefreshThunk } from './dashboardAPI';

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
        state.status = 'idle';
        state.subjects = subjects;
        state.continueWork = continueWork;
      })
      .addCase(subjectsThunk.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.continueWork = false;
        state.message = payload ? payload : '';
      })
      .addCase(subjectsAddThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(subjectsAddThunk.fulfilled, (state, { payload: { message, continueWork, subjectID, subjectName } }) => {
        state.status = 'idle';
        state.message = message;
        state.continueWork = continueWork;
        state.subjects.push({ subjectID, subjectName });
      })
      .addCase(subjectsAddThunk.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.continueWork = false;
        state.message = payload ? payload : '';
      })
      .addCase(subjectsDeleteThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(subjectsDeleteThunk.fulfilled, (state, { payload }) => {
        console.log('dashboard delete', payload);
        state.status = 'idle';
        state.continueWork = payload.continueWork;
        //
      })
      .addCase(subjectsDeleteThunk.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.continueWork = false;
        state.message = payload ? payload : '';
      })
      .addCase(subjectsRefreshThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(subjectsRefreshThunk.fulfilled, (state, { payload }) => {
        console.log('dashboard refresh', payload);
        state.status = 'idle';
        state.continueWork = payload.continueWork;
        // state.subjects = subjects;
      })
      .addCase(subjectsRefreshThunk.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.message = payload ? payload : '';
      });
  },
});

export const thunk = { subjectsThunk, subjectsAddThunk, subjectsDeleteThunk, subjectsRefreshThunk };

export default dashboardSlice.reducer;
