import { ChangeEvent, MouseEvent, useRef, useState, useEffect } from 'react';

import { thunk } from 'store/dashboard/dashboardReducer';
import { useAppDispatch } from 'store/hooks';

import { SubjectModel } from 'store/types';

const useModals = () => {
  const dispatch = useAppDispatch();

  const [modals, setModals] = useState({
    confirmModal: false,
    refuseModal: false,
  });
  const [subjectToDelete, setSubjectToDelete] = useState<SubjectModel | null>(null);
  const [inputState, setInputState] = useState({ value: '', error: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState((state) => ({ ...state, value: e.target.value }));
  };

  const [isEditInputVisible, setIsEditInputVisible] = useState(false);
  const editRef = useRef<HTMLInputElement | null>(null);

  // Focus edit input after render
  useEffect(() => {
    if (editRef.current && subjectToDelete) {
      editRef.current?.focus();
      editRef.current.value = subjectToDelete.subjectName;
    }
  }, [isEditInputVisible]);

  // Refresh button
  const handleRefresh = (subject: SubjectModel) => {
    console.log('Refresh button ', subject.subjectID, subject.subjectName);
    setIsEditInputVisible(true);
    setSubjectToDelete(subject);
  };
  const handleEditClose = () => {
    setIsEditInputVisible(false);
  };

  const handleUpdateSubject = (e: MouseEvent<HTMLButtonElement>) => {
    if (editRef.current) {
      // В ASYNC THUNK ЗАГЛУШКА
      dispatch(thunk.subjectsRefreshThunk(editRef.current?.value));
      setTimeout(() => {
        handleClearData();
      }, 200);
    }
  };

  // Delete button
  const handleDelete = (subject: SubjectModel) => {
    console.log('Delete button SUBJECT: ', subject.subjectID, subject.subjectName);
    setModals((state) => ({ ...state, confirmModal: true }));
    setSubjectToDelete(subject);
  };

  // 1 - Modal
  const handleRefuse = (e: MouseEvent<HTMLButtonElement>) => {
    setModals((state) => ({ ...state, confirmModal: false }));
  };

  const handleConfirm = (e: MouseEvent<HTMLButtonElement>) => {
    setModals((state) => ({ ...state, confirmModal: false }));
    setTimeout(() => {
      setModals((state) => ({ ...state, refuseModal: true }));
    }, 200);
  };

  // 2 - Modal
  const handleValidateName = (e: MouseEvent<HTMLButtonElement>) => {
    if (subjectToDelete) {
      if (inputState.value !== subjectToDelete?.subjectName) {
        setInputState((state) => ({ ...state, error: 'Error: values not the same' }));
      } else {
        dispatch(thunk.subjectsDeleteThunk(subjectToDelete.subjectID));
        setTimeout(() => {
          handleClearData();
        }, 200);
      }
    }
  };

  // clear - close/finish
  const handleClearData = () => {
    // edit
    setIsEditInputVisible(false);
    //
    setSubjectToDelete(null);
    setInputState({ error: '', value: '' });
    setInputState({ error: '', value: '' });
    setModals({ confirmModal: false, refuseModal: false });
  };

  return {
    modals,
    inputState,
    subjectToDelete,
    handleRefuse,
    handleChange,
    handleDelete,
    handleConfirm,
    handleClearData,
    handleValidateName,

    editRef,
    isEditInputVisible,
    handleRefresh,
    handleEditClose,
    handleUpdateSubject,
  };
};
export default useModals;
