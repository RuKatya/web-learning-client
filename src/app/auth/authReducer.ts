import { createSlice } from '@reduxjs/toolkit';

import { IAuthState } from './types';

import { regThunk, loginThunk } from './authAPI';

const initialState = {
    user: {
        userName: '',
        userRole: '',
        isLogin: false,
    },
    status: 'idle',
    message: '',
    continueWork: false,
} as IAuthState;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        increment(state) {
            state.user.isLogin = !state.user.isLogin;
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
            .addCase(loginThunk.pending, state => {
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
            .addCase(loginThunk.rejected, state => {
                state.status = 'failed';
            });
    },
});

export const { increment } = authSlice.actions;
export const thunk = { regThunk, loginThunk };

export default authSlice.reducer;
