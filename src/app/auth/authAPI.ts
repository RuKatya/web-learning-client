import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    IAxiosLogin,
    IAxiosLogout,
    IAxiosRegistration,
} from '../../View/Components/Forms/types';
import { RoutesE } from './types';

import { ILoginAsyncThunk, IRegAsyncThunk } from '../../hooks/useAsyncSubmit';

const HOST = 'http://localhost:8080';

export const regThunk = createAsyncThunk<
    IAxiosRegistration,
    IRegAsyncThunk,
    { rejectValue: string }
>(RoutesE.SAVE_USER, async (state, { rejectWithValue }) => {
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
            const message = data.response.data.message;
            if (message) {
                return rejectWithValue(message);
            }
        });
});

export const loginThunk = createAsyncThunk<
    IAxiosLogin,
    ILoginAsyncThunk,
    { rejectValue: string }
>(RoutesE.LOGIN_USER, async (state, { rejectWithValue }) => {
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
            const message = data.response.data.message as string;
            return rejectWithValue(message);
        });
});

export const loginOutThunk = createAsyncThunk<
    IAxiosLogout,
    undefined,
    { rejectValue: string }
>(RoutesE.LOGOUT_USER, async (state, { rejectWithValue }) => {
    return await axios
        .get(`${HOST}${RoutesE.LOGOUT_USER}`)
        .then(({ data }) => data)
        .catch(({ data }) => {
            const message = data.message as string;
            return rejectWithValue(message);
        });
});
