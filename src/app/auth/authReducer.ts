import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';

import { IAuthState } from './types';

import { regThunk, loginThunk } from './authAPI';

const initialState = {
    user: {
        userName: '',
        userRole: '',
        isLogin: false,
    },
    message: '',
    status: 'idle',
    continueWork: false,
} as IAuthState;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearErrorMessage(state) {
            state.message = '';
        },
    },
    extraReducers: builder => {
        builder
            .addCase(regThunk.pending, state => {
                state.status = 'loading';
            })
            .addCase(
                regThunk.fulfilled,
                (state, { payload: { message, continueWork } }: any) => {
                    state.status = 'idle';
                    state.message = message;
                    state.continueWork = continueWork;
                }
            )
            .addCase(regThunk.rejected, state => {
                state.status = 'failed';
            })
            .addCase(loginThunk.pending, (state, { payload }: any) => {
                state.status = 'loading';
            })
            .addCase(
                loginThunk.fulfilled,
                (state, { payload: { message, continueWork } }: any) => {
                    state.status = 'idle';
                    state.message = message;
                    state.user.isLogin = true;
                    state.continueWork = continueWork;
                }
            )
            .addCase(loginThunk.rejected, (state, { payload }: any) => {
                state.status = 'failed';
                state.message = payload;
            });
    },
});

export const { clearErrorMessage } = authSlice.actions;
export const thunk = { regThunk, loginThunk };

export default authSlice.reducer;
