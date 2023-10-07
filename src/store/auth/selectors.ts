import { RootState } from '../store';

export const auth = (state: RootState) => state.auth;
export const authUser = (state: RootState) => state.auth.user;
