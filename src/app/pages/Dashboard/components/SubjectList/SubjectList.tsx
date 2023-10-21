import { useRef } from 'react';

import Layout from 'components/Layout';
import Modal from 'components/Modal';
import useModals from 'hooks/dashboard/useModals';

import { thunk } from 'store/dashboard/dashboardReducer';
import { dashboardSubjects } from 'store/dashboard/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import Subject from '../Subject';

import css from './SubjectList.module.scss';

const SubjectList = () => {
  const subjects = useAppSelector(dashboardSubjects);
  const dispatch = useAppDispatch();

  const addInputRef = useRef<HTMLInputElement | null>(null);

  const handleAdd = () => {
    if (addInputRef?.current?.value) {
      dispatch(thunk.subjectsAddThunk(addInputRef.current.value));
    }
  };

  const {
    modals,
    inputState,
    subjectToDelete,
    handleRefuse,
    handleDelete,
    handleChange,
    handleConfirm,
    handleClearData,
    handleValidateName,

    editRef,
    isEditInputVisible,
    handleRefresh,
    handleEditClose,
    handleUpdateSubject,
  } = useModals();

  return (
    <div className={css.subject}>
      <ul className={css.subject__list}>
        {subjects.length > 0 &&
          subjects.map((subject) => (
            <Subject
              handleEditClose={handleEditClose}
              ref={editRef}
              key={subject.subjectID}
              subjectID={subject.subjectID}
              subjectName={subject.subjectName}
              handleDelete={() => handleDelete(subject)}
              handleRefresh={() => handleRefresh(subject)}
              handleUpdateSubject={
                isEditInputVisible && subject.subjectID === subjectToDelete?.subjectID ? handleUpdateSubject : undefined
              }
            />
          ))}
      </ul>

      <Layout isOpen={modals.confirmModal} toggleIsOpen={handleClearData}>
        <Modal
          isActive={modals.confirmModal}
          label="Are you sure want to delete the subject?"
          acceptOnClick={handleConfirm}
          refuseOnClick={handleRefuse}
        />
      </Layout>
      <Layout isOpen={modals.refuseModal} toggleIsOpen={handleClearData}>
        <Modal
          isActive={modals.refuseModal}
          label={`To delete the subject, please write ${subjectToDelete?.subjectName}?`}
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
