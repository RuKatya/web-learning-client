import { useEffect } from 'react';

import { thunk } from 'store/auth/authReducer';
import { authUser } from 'store/auth/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const useAuth = (): void => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(authUser);

  useEffect(() => {
    dispatch(thunk.checkUserCookies(user));
  }, []);
};

export default useAuth;
