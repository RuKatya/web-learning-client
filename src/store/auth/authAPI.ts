import { createAsyncThunk } from '@reduxjs/toolkit';

import { ROUTES } from 'config/routes';
import { ResponseLogin, ResponseLogout, ResponseRegistration } from 'config/types';
import { LoginThunkResponse, RegThunkResponse } from 'hooks/useSubmit';

import { getData, postData } from 'utils/fetchData';

type RejectValue = {
  rejectValue: string;
};

// try: Вынести функции в одну

export const regThunk = createAsyncThunk<ResponseRegistration, RegThunkResponse, RejectValue>(
  ROUTES.auth.saveUser.mask,
  async (state, { rejectWithValue }) => {
    return await postData<RegThunkResponse, ResponseRegistration>(ROUTES.auth.saveUser.mask, { ...state })
      .then((data) => {
        return data;
      })
      .catch((message) => {
        return rejectWithValue(message);
      });
  },
);

export const loginThunk = createAsyncThunk<ResponseLogin, LoginThunkResponse, RejectValue>(
  ROUTES.auth.loginUser.mask,
  async (state, { rejectWithValue }) => {
    return await postData<LoginThunkResponse, ResponseLogin>(ROUTES.auth.loginUser.mask, { ...state })
      .then((data) => {
        return data;
      })
      .catch((data) => {
        return rejectWithValue(data);
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
      .catch((message) => {
        return rejectWithValue(message);
      });
  },
);

export const checkUserCookies = createAsyncThunk<ResponseLogin, unknown, RejectValue>(
  ROUTES.auth.checkUser.mask,
  async (__, { rejectWithValue }) => {
    return await getData<ResponseLogin>(ROUTES.auth.checkUser.mask)
      .then((data) => {
        return data;
      })
      .catch((message) => {
        return rejectWithValue(message);
      });
  },
);
