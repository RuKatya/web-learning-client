import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    IAxiosLogin,
    IAxiosRegistration,
} from '../../View/Components/Forms/types';

export const regThunk = createAsyncThunk(
    'auth/save-user',
    async (state: any) => {
        try {
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
                .catch(e => console.log(e));
        } catch (error) {
            console.log(error);
        }
    }
);

export const loginThunk = createAsyncThunk(
    'auth/login-user',
    async (state: any, { rejectWithValue }) => {
        const { email, password } = state;
        console.log(email, password);
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
            .catch(data => {
                return rejectWithValue(data.response.data.message);
            });
    }
);
