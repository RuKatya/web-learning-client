import { createAsyncThunk } from '@reduxjs/toolkit';

import { ROUTES } from 'config/routes';
import { ResponseLogin, ResponseLogout, ResponseRegistration } from 'config/types';

import { LoginThunkResponse, RegThunkResponse } from 'hooks/useAsyncSubmit';

import { getData, postData } from 'utils/fetchData';

type RejectValue = {
  rejectValue: string;
};

export const regThunk = createAsyncThunk<ResponseRegistration, RegThunkResponse, { rejectValue: string }>(
  ROUTES.auth.regUser.mask,
  async (state, { rejectWithValue }) => {
    return await postData<RegThunkResponse, ResponseRegistration>(ROUTES.auth.regUser.mask, { ...state })
      .then((data) => {
        return data;
      })
      .catch((data) => {
        const message = data.response.data.message as string;
        return rejectWithValue(message);
      });
  },
);

export const loginThunk = createAsyncThunk<ResponseLogin, LoginThunkResponse, { rejectValue: string }>(
  ROUTES.auth.loginUser.mask,
  async (state, { rejectWithValue }) => {
    return await postData<LoginThunkResponse, ResponseLogin>(ROUTES.auth.loginUser.mask, { ...state })
      .then((data) => {
        return data;
      })
      .catch((data) => {
        const message = data.response.data.message as string;
        return rejectWithValue(message);
      });
  },
);
export const loginOutThunk = createAsyncThunk<ResponseLogout, undefined, RejectValue>(
  ROUTES.auth.logoutUser.mask,
  async (__, { rejectWithValue }) => {
    return await getData<ResponseLogout>(ROUTES.auth.logoutUser.mask)
      .then((data) => {
        return data;
      })
      .catch(({ data }) => {
        const message = data.message as string;
        return rejectWithValue(message);
      });
  },
);

export const checkUserCookies = createAsyncThunk<ResponseLogin, unknown, { rejectValue: string }>(
  ROUTES.auth.userChecking.mask,
  async (__, { rejectWithValue }) => {
    return await getData<ResponseLogin>(ROUTES.auth.userChecking.mask)
      .then((data) => {
        return data;
      })
      .catch(({ data }) => {
        const message = data.message as string;
        return rejectWithValue(message);
      });
  },
);
