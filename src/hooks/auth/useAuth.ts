import { useEffect } from 'react';

import { thunk } from 'store/auth/authReducer';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const useAuth = (): void => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(thunk.checkUserCookies(user));
  }, []);
};

export default useAuth;
