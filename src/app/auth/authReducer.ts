import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuthState, StatusT } from './types';

import { regThunk, loginThunk } from './authAPI';
import { ILoginAsyncThunk, IRegAsyncThunk } from '../../hooks/useAsyncSubmit';
import { IAxiosRegistration } from '../../View/Components/Forms/types';
import { AsyncThunkFulfilledActionCreator } from '@reduxjs/toolkit/dist/createAsyncThunk';

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
        clearMessageContinueWork(state) {
            state.message = '';
            state.continueWork = false;
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
                    if (message && continueWork) {
                        state.status = 'idle';
                        state.message = message;
                        state.continueWork = continueWork;
                    }
                }
            )
            .addCase(regThunk.rejected, (state, { payload }: any) => {
                state.status = 'failed';
                state.message = payload;
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
            });
    },
});

export const { clearMessageContinueWork, logout } = authSlice.actions;
export const thunk = { regThunk, loginThunk };

export default authSlice.reducer;
