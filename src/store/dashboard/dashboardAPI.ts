import { createAsyncThunk } from '@reduxjs/toolkit';
import { ROUTES } from 'config/routes';
import { ResponseSubjects } from 'config/types';

import { getData } from 'utils/fetchData';

type RejectValue = {
  rejectValue: string;
};

// Разобраться с танком когда не надо передавать аргумент
// Показать ошибку?

export const subjectsThunk = createAsyncThunk<ResponseSubjects, unknown, RejectValue>(
  ROUTES.dashboard.subjects.mask,
  async (__, { rejectWithValue }) => {
    return await getData<ResponseSubjects>(ROUTES.dashboard.subjects.mask)
      .then((data) => {
        return data;
      })
      .catch((message) => {
        return rejectWithValue(message);
      });
  },
);
