import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth } from 'store/auth/selectors';

import { thunk } from 'store/dashboard/dashboardReducer';
import { dashboardSubjects } from 'store/dashboard/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import css from './SubjectList.module.scss';

const SubjectList = () => {
  const subjects = useAppSelector(dashboardSubjects);
  const user = useAppSelector(auth);
  const dispatch = useAppDispatch();

  const addRef = useRef<HTMLInputElement | null>(null);
  // const handleRefresh = () => {
  // console.log('refreshed');
  // dispatch(thunk.subjectsRefreshThunk(addRef.current.value));
  // };

  const handleAdd = () => {
    if (addRef?.current?.value) {
      dispatch(thunk.subjectsAddThunk(addRef.current.value));
    }
  };

  const handleDelete = (id: number) => () => {
    console.log('SUBJECT LIST: ', user);
    dispatch(thunk.subjectsDeleteThunk(id));
  };

  return (
    <div className={css.subject}>
      <ul className={css.subject__list}>
        {subjects.map((el) => (
          <li key={el.subjectID} id={String(el.subjectID)} className={css.subject__item}>
            <Link to="#" className={css.subject__link}>
              <h2 className={css.subject__name}>{el.subjectName}</h2>
            </Link>
            <button onClick={handleDelete(el.subjectID)} className={css.subject__delete}>
              DELETE
            </button>
          </li>
        ))}
      </ul>

      {/* <button onClick={handleRefresh} className={css.subject__refresh}> </button>
          REFRESH*/}

      <div className={css.subject__add}>
        <input className={css.subject__add__input} ref={addRef} type="text" />
        <button className={css.subject__add__btn} onClick={handleAdd}>
          ADD
        </button>
      </div>
    </div>
  );
};
export default SubjectList;
