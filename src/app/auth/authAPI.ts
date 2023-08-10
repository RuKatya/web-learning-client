import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    IAxiosLogin,
    IAxiosRegistration,
} from '../../View/Components/Forms/types';
import { RoutesE } from './types';

import { ILoginAsyncThunk, IRegAsyncThunk } from '../../hooks/useAsyncSubmit';

const HOST = 'http://localhost:8080';

export const regThunk = createAsyncThunk<
    AxiosResponse<IAxiosRegistration>,
    IRegAsyncThunk,
    { rejectValue: string }
>(
    'auth/save-user',

    async (state, { rejectWithValue }) => {
        console.log('state', state);
        const { userName, email, password, confirmPassword } = state;
        return await axios
            .post(`${HOST}${RoutesE.SAVE_USER}`, {
                userName,
                email,
                password,
                confirmPassword,
            })
            .then(({ data }) => {
                const { continueWork } = data;
                if (continueWork) return data;
            })
            .catch(data => {
                const message = data.response.data.message as string;
                return rejectWithValue(message);
            });
    }
);

export const loginThunk = createAsyncThunk<
    AxiosResponse<IAxiosLogin>,
    ILoginAsyncThunk,
    { rejectValue: string }
>('auth/login-user', async (state, { rejectWithValue }) => {
    console.log('state', state);

    const { email, password } = state;
    return await axios
        .post(`${HOST}${RoutesE.LOGIN_USER}`, {
            email,
            password,
        })
        .then(({ data }) => {
            const { continueWork } = data;
            if (continueWork) return data;
        })
        .catch(data => {
            const message = data.response.data.message;
            return rejectWithValue(message);
        });
});
