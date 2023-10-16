import { createAsyncThunk } from '@reduxjs/toolkit';
import { ROUTES } from 'config/routes';
import { ResponseSubjects, ResponseSubjectsModel } from 'config/types';
import { getData, postData, deleteData } from 'utils/fetchData';
import { ResponseAddSubjectModel, ResponseAddSubject } from '../types';

type RejectValue = {
  rejectValue: string;
};

// Разобраться с танком когда не надо передавать аргумент
// Показать ошибку?

const normalizeSubjectsData = (from: ResponseSubjects): ResponseSubjectsModel => {
  return {
    continueWork: from.continueWork,
    subjects: from.subjects.map((subject) => ({ subjectID: subject.SubjectID, subjectName: subject.SubjectName })),
  };
};

export const subjectsThunk = createAsyncThunk<ResponseSubjectsModel, unknown, RejectValue>(
  ROUTES.dashboard.subjects.mask,
  async (__, { rejectWithValue }) => {
    return await getData<ResponseSubjects>(ROUTES.dashboard.subjects.mask)
      .then((data) => {
        return normalizeSubjectsData(data);
      })
      .catch((message) => {
        return rejectWithValue(message);
      });
  },
);

const normalizeSubjectsAddData = (from: ResponseAddSubject): ResponseAddSubjectModel => {
  return {
    continueWork: from.continueWork,
    message: from.message,
    subjectID: from.SubjectID,
    subjectName: from.newName,
  };
};

export const subjectsAddThunk = createAsyncThunk<ResponseAddSubjectModel, string, RejectValue>(
  ROUTES.dashboard.subjects.addSubject.mask,
  async (state, { rejectWithValue }) => {
    return await postData<{ newName: string }, ResponseAddSubject>(ROUTES.dashboard.subjects.addSubject.mask, {
      newName: state,
    })
      .then((data) => {
        return normalizeSubjectsAddData(data);
      })
      .catch((message) => {
        return rejectWithValue(message);
      });
  },
);

export const subjectsDeleteThunk = createAsyncThunk<ResponseSubjects, number, RejectValue>(
  ROUTES.dashboard.subjects.deleteSubject.mask,
  async (state, { rejectWithValue }) => {
    console.log('123123123');
    return await deleteData<{ id: number }, ResponseSubjects>(ROUTES.dashboard.subjects.deleteSubject.mask, {
      id: state,
    })
      .then((data) => {
        console.log('delete async thunk data:', data);
        return data;
      })
      .catch((message) => {
        console.log('delete async thunk error:', message);
        return rejectWithValue(message);
      });
  },
);

export const subjectsRefreshThunk = createAsyncThunk<ResponseSubjectsModel, unknown, RejectValue>(
  ROUTES.dashboard.subjects.refreshSubject.mask,
  async (__, { rejectWithValue }) => {
    return await getData<any>(ROUTES.dashboard.subjects.mask)
      .then((data) => {
        return normalizeSubjectsData(data);
      })
      .catch((message) => {
        return rejectWithValue(message);
      });
  },
);
