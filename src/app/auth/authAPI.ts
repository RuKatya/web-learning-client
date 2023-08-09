import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    IAxiosLogin,
    IAxiosRegistration,
} from '../../View/Components/Forms/types';

const HOST = 'http://localhost:8080';

enum RoutesE {
    SAVE_USER = '/auth/save-user',
    LOGIN_USER = '/auth/login-user',
}

export interface IRegAsyncThunk {
    [key: string]: string;
}

export const regThunk = createAsyncThunk(
    'auth/save-user',
    async (state: any, { rejectWithValue }) => {
        const { userName, email, password, confirmPassword } = state;
        return await axios
            .post(`${HOST}${RoutesE.SAVE_USER}`, {
                userName,
                email,
                password,
                confirmPassword,
            })
            .then(({ data }: AxiosResponse<IAxiosRegistration>) => {
                const { continueWork } = data;
                if (continueWork) {
                    return data;
                }
            })
            .catch(data => rejectWithValue(data.response.data.message));
    }
);

export const loginThunk = createAsyncThunk(
    'auth/login-user',
    async (state: any, { rejectWithValue }) => {
        const { email, password } = state;
        return await axios
            .post(`${HOST}${RoutesE.LOGIN_USER}`, {
                email,
                password,
            })
            .then(({ data }: AxiosResponse<IAxiosLogin>) => {
                const { continueWork } = data;
                if (continueWork) {
                    return data as IAxiosLogin;
                }
            })
            .catch(data => rejectWithValue(data.response.data.message));
    }
);
