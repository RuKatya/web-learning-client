import { createSlice } from '@reduxjs/toolkit';

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
        logout(state) {
            state.continueWork = false;
            state.user = {
                isLogin: false,
                userRole: '',
                userName: '',
            };
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
                (
                    state,
                    {
                        payload: { message, continueWork, userRole, userName },
                    }: any
                ) => {
                    state.status = 'idle';
                    state.message = message;
                    state.continueWork = continueWork;
                    state.user = {
                        isLogin: true,
                        userRole: userRole,
                        userName: userName,
                    };
                }
            )
            .addCase(loginThunk.rejected, (state, { payload }: any) => {
                state.status = 'failed';
                state.message = payload;
            });
    },
});

export const { clearErrorMessage, logout } = authSlice.actions;
export const thunk = { regThunk, loginThunk };

export default authSlice.reducer;
