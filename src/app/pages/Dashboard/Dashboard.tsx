import { useEffect } from 'react';

import { thunk } from 'store/dashboard/dashboardReducer';
import { dashboardSubjects } from 'store/dashboard/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const subjects = useAppSelector(dashboardSubjects);

  useEffect(() => {
    dispatch(thunk.subjectsThunk(''));
  }, []);

  console.log(subjects);

  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
