// import { useState } from 'react';

// import { dashboardSubjects } from 'store/dashboard/selectors';
// import { useAppSelector, useAppDispatch } from 'store/hooks';

// import { SubjectModel } from 'store/types';

const useModals = () => {
  // const subjects = useAppSelector(dashboardSubjects);
  // const dispatch = useAppDispatch();
  // const [inputState, setInputState] = useState({ value: '', error: '' });

  // const [subjectToDelete, setSubjectToDelete] = useState<SubjectModel | null>(null);
  // const [modals, setModals] = useState({
  //   confirmModal: false,
  //   refuseModal: false,
  // });

  // // const handleRefresh = () => {
  // // console.log('refreshed');
  // // dispatch(thunk.subjectsRefreshThunk(addRef.current.value));
  // // };

  // const handleAdd = () => {
  //   if (addInputRef?.current?.value) {
  //     dispatch(thunk.subjectsAddThunk(addInputRef.current.value));
  //   }
  // };

  // const handleDelete = (subject: SubjectModel) => {
  //   console.log('SUBJECT LIST: ', subject.subjectID);
  //   setModals((prev) => ({ ...prev, confirmModal: true }));
  //   setSubjectToDelete(subject);
  // };

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setInputState((prev) => ({ ...prev, value: event.target.value }));
  // };

  // // 1
  // const handleRefuse = (event: MouseEvent<HTMLButtonElement>) => {
  //   event.stopPropagation();
  //   setModals((prev) => ({ ...prev, confirmModal: false }));
  // };

  // const handleConfirm = (event: MouseEvent<HTMLButtonElement>) => {
  //   event.stopPropagation();
  //   setModals((prev) => ({ ...prev, confirmModal: false }));
  //   setTimeout(() => {
  //     setModals((prev) => ({ ...prev, refuseModal: true }));
  //   }, 200);
  // };

  // // 2
  // const handleValidateName = (event: MouseEvent<HTMLButtonElement>) => {
  //   event.stopPropagation();
  //   if (inputState.value !== subjectToDelete?.subjectName) {
  //     setInputState((prev) => ({ ...prev, error: 'Error: values not the same' }));
  //   } else {
  //     dispatch(thunk.subjectsDeleteThunk(subjectToDelete.subjectID));
  //     setTimeout(() => {
  //       handleClearData();
  //     }, 200);
  //   }
  // };

  // const handleClearData = () => {
  //   setSubjectToDelete(null);
  //   setInputState({ error: '', value: '' });
  //   setModals({ confirmModal: false, refuseModal: false });
  // };

  return {
    // handleClearData,
    // handleValidateName,
    // handleConfirm,
    // handleRefuse,
    // handleChange,
    // handleAdd,
    // inputState,
    // setInputState,
    // subjectToDelete,
    // setSubjectToDelete,
    // modals,
    // setModals,
  };
};
export default useModals;
