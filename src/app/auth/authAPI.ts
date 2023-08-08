import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    IAxiosLogin,
    IAxiosRegistration,
} from '../../View/Components/Forms/types';

export const regThunk = createAsyncThunk(
    'auth/save-user',
    async (state: any, { rejectWithValue }) => {
        const { userName, email, password, confirmPassword } = state;

        return await axios
            .post('http://localhost:8080/auth/save-user', {
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
            .post('http://localhost:8080/auth/login-user', {
                email: email,
                password: password,
            })
            .then(({ data }: AxiosResponse<IAxiosLogin>) => {
                const { continueWork } = data;
                if (continueWork) {
                    return data;
                }
            })
            .catch(data => rejectWithValue(data.response.data.message));
    }
);
