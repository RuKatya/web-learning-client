import { ChangeEvent, MouseEvent, useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button';
import Layout from 'components/Layout';

import { auth } from 'store/auth/selectors';
import { thunk } from 'store/dashboard/dashboardReducer';
import { dashboardSubjects } from 'store/dashboard/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { SubjectModel } from 'store/types';

import css from './SubjectList.module.scss';

const SubjectList = () => {
  const subjects = useAppSelector(dashboardSubjects);
  const user = useAppSelector(auth);
  const dispatch = useAppDispatch();

  const addInputRef = useRef<HTMLInputElement | null>(null);

  // const handleRefresh = () => {
  // console.log('refreshed');
  // dispatch(thunk.subjectsRefreshThunk(addRef.current.value));
  // };

  const handleAdd = () => {
    if (addInputRef?.current?.value) {
      dispatch(thunk.subjectsAddThunk(addInputRef.current.value));
    }
  };

  const handleDelete = (id: number) => {
    console.log('SUBJECT LIST: ', user, id);
    dispatch(thunk.subjectsDeleteThunk(id));
  };

  const [modal1, setModal1] = useState(false);
  const [value, setValue] = useState('333');
  const [error, setError] = useState('');
  const [modal2, setModal2] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState<SubjectModel | null>(null);
  const [confirmationToDelete, setConfirmationToDelete] = useState(false);

  const toggleModal1 = useCallback((event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setModal1((prev) => !prev);
  }, []);
  const toggleModal2 = useCallback(() => {
    setModal2((prev) => !prev);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const checkWord = () => {
    if (subjectToDelete) {
      if (value !== subjectToDelete?.subjectName) {
        setError('Error: typed not the same');
      } else {
        handleDelete(subjectToDelete.subjectID);
        handleClearData();
      }
    }
  };

  const handleClearData = () => {
    setError('');
    setValue('');
    setModal1(false);
    setModal2(false);
    setSubjectToDelete(null);
    setConfirmationToDelete(false);
  };

  return (
    <div className={css.subject}>
      <ul className={css.subject__list}>
        {subjects.map((subject) => (
          <li key={subject.subjectID} id={String(subject.subjectID)} className={css.subject__item}>
            <Link to="#" className={css.subject__link}>
              <h2 className={css.subject__name}>{subject.subjectName}</h2>
            </Link>
            <button
              //  onClick={handleDelete(el.subjectID)}
              onClick={() => {
                setModal1(true);
                setSubjectToDelete(subject);
              }}
              className={css.subject__delete}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>

      {!confirmationToDelete && (
        <Layout isOpen={modal1} toggleIsOpen={toggleModal1}>
          <div className={css.modal__content}>
            <div className={css.modal__question}>Are you sure want to delete the subject?</div>
            <div className={css.modal__btns}>
              <Button
                onClick={(event) => {
                  event.stopPropagation();
                  setConfirmationToDelete(true);
                  setModal1(false);
                  setTimeout(() => {
                    setModal2(true);
                  }, 200);
                }}
                size="m"
                position="center"
                className={css.modal__btn}
              >
                Yes
              </Button>
              <Button
                onClick={(event) => {
                  event.stopPropagation();
                  setModal1(false);
                }}
                className={css.modal__btn}
                position="center"
                size="m"
              >
                No
              </Button>
            </div>
          </div>
        </Layout>
      )}

      {confirmationToDelete && (
        <Layout isOpen={modal2}>
          <div className={css.modal__content}>
            <div className={css.modal__question}>
              To delete the subject, please write {subjectToDelete?.subjectName}
            </div>
            <input value={value} onChange={handleChange} className={css.modal__input} />
            {error && <div>{error}</div>}
            <div className={css.modal__btns}>
              <Button onClick={() => checkWord()} className={css.modal__btn} position="center" size="m">
                Yes
              </Button>
              <Button onClick={() => handleClearData()} className={css.modal__btn} position="center" size="m">
                No
              </Button>
            </div>
          </div>
        </Layout>
      )}

      {/* <button onClick={handleRefresh} className={css.subject__refresh}> </button>
          REFRESH*/}

      <div className={css.subject__add}>
        <input className={css.subject__add__input} ref={addInputRef} type="text" />
        <button className={css.subject__add__btn} onClick={handleAdd}>
          ADD
        </button>
      </div>
    </div>
  );
};
export default SubjectList;
