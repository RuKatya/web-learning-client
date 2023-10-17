import { useEffect } from 'react';

import { thunk } from 'store/dashboard/dashboardReducer';
import { useAppDispatch } from 'store/hooks';

import SubjectList from './components/SubjectList';

const Dashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunk.subjectsThunk(''));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <SubjectList />
    </div>
  );
};

export default Dashboard;
