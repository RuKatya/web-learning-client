import { ChangeEvent, MouseEvent, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';

import Layout from 'components/Layout';
import Modal from 'components/Modal';

import { thunk } from 'store/dashboard/dashboardReducer';
import { dashboardSubjects } from 'store/dashboard/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { SubjectModel } from 'store/types';

import Subject from '../Subject';

import css from './SubjectList.module.scss';

const SubjectList = () => {
  const addInputRef = useRef<HTMLInputElement | null>(null);
  const subjects = useAppSelector(dashboardSubjects);
  const dispatch = useAppDispatch();

  const [inputState, setInputState] = useState({ value: '', error: '' });

  const [subjectToDelete, setSubjectToDelete] = useState<SubjectModel | null>(null);
  const [modals, setModals] = useState({
    confirmModal: false,
    refuseModal: false,
  });

  // const handleRefresh = () => {
  // console.log('refreshed');
  // dispatch(thunk.subjectsRefreshThunk(addRef.current.value));
  // };

  const handleAdd = () => {
    if (addInputRef?.current?.value) {
      dispatch(thunk.subjectsAddThunk(addInputRef.current.value));
    }
  };

  const handleDelete = (subject: SubjectModel) => {
    console.log('SUBJECT LIST: ', subject.subjectID);
    setModals((prev) => ({ ...prev, confirmModal: true }));
    setSubjectToDelete(subject);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState((prev) => ({ ...prev, value: event.target.value }));
  };

  // 1
  const handleRefuse = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setModals((prev) => ({ ...prev, confirmModal: false }));
  };

  const handleConfirm = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setModals((prev) => ({ ...prev, confirmModal: false }));
    setTimeout(() => {
      setModals((prev) => ({ ...prev, refuseModal: true }));
    }, 200);
  };

  // 2
  const handleValidateName = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (inputState.value !== subjectToDelete?.subjectName) {
      setInputState((prev) => ({ ...prev, error: 'Error: values not the same' }));
    } else {
      dispatch(thunk.subjectsDeleteThunk(subjectToDelete.subjectID));
      setTimeout(() => {
        handleClearData();
      }, 200);
    }
  };

  const handleClearData = () => {
    setSubjectToDelete(null);
    setInputState({ error: '', value: '' });
    setModals({ confirmModal: false, refuseModal: false });
  };

  return (
    <div className={css.subject}>
      <ul className={css.subject__list}>
        {subjects.length > 0 &&
          subjects.map((subject) => (
            <Subject
              handleDelete={() => handleDelete(subject)}
              key={subject.subjectID}
              subjectID={subject.subjectID}
              subjectName={subject.subjectName}
            />
          ))}
      </ul>
      <Layout isOpen={modals.confirmModal} toggleIsOpen={handleClearData}>
        <Modal
          isActive={modals.confirmModal}
          label="Are you sure want to delete the subject?"
          acceptLabel="Yes"
          refuseLabel="No"
          acceptOnClick={handleConfirm}
          refuseOnClick={handleRefuse}
        />
      </Layout>

      <Layout isOpen={modals.refuseModal} toggleIsOpen={handleClearData}>
        <Modal
          isActive={modals.refuseModal}
          label={`To delete the subject, please write ${subjectToDelete?.subjectName}?`}
          acceptLabel="Yes"
          refuseLabel="No"
          refuseOnClick={handleClearData}
          acceptOnClick={handleValidateName}
          hasInput={true}
          value={inputState.value}
          error={inputState.error}
          onChangeInput={handleChange}
        />
      </Layout>
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
