import { createSlice } from '@reduxjs/toolkit';

import { IAuthState } from './types';

import { regThunk, loginThunk, loginOutThunk } from './authAPI';

const initialState = {
    user: {
        userName: '',
        userRole: 'user',
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
        clearMessageContinueWork(state) {
            state.message = '';
            state.continueWork = false;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(regThunk.pending, state => {
                state.status = 'loading';
            })
            .addCase(
                regThunk.fulfilled,
                (state, { payload: { message, continueWork } }) => {
                    if (message && continueWork) {
                        state.status = 'idle';
                        state.message = message;
                        state.continueWork = continueWork;
                    }
                }
            )
            .addCase(regThunk.rejected, (state, { payload }) => {
                state.status = 'failed';
                if (payload) {
                    state.message = payload;
                }
            })
            .addCase(loginThunk.pending, state => {
                state.status = 'loading';
            })
            .addCase(
                loginThunk.fulfilled,
                (
                    state,
                    { payload: { continueWork, userRole, userName } }: any
                ) => {
                    state.status = 'idle';
                    state.continueWork = continueWork;
                    state.user = {
                        isLogin: true,
                        userRole: userRole,
                        userName: userName,
                    };
                }
            )
            .addCase(loginThunk.rejected, (state, { payload }) => {
                if (payload) {
                    state.status = 'failed';
                    state.message = payload;
                }
            })
            .addCase(loginOutThunk.pending, state => {
                state.status = 'loading';
            })
            .addCase(
                loginOutThunk.fulfilled,
                (state, { payload: { continueWork, isLogin } }) => {
                    state.status = 'idle';
                    state.continueWork = continueWork;
                    state.user = {
                        isLogin: isLogin,
                        userRole: 'user',
                        userName: '',
                    };
                }
            )
            .addCase(loginOutThunk.rejected, (state, { payload }) => {
                state.status = 'failed';
                if (payload) {
                    state.message = payload;
                }
            });
    },
});

export const { clearMessageContinueWork } = authSlice.actions;
export const thunk = { regThunk, loginThunk, loginOutThunk };

export default authSlice.reducer;
