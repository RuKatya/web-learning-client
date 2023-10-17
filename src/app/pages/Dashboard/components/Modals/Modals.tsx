// import Layout from 'components/Layout';
// import Modal from 'components/Modal';
// import css from './Modals.module.scss';

const Modals = () => {
  //   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     setInputState((prev) => ({ ...prev, value: event.target.value }));
  //   };
  //   // 1
  //   const handleRefuse = (event: MouseEvent<HTMLButtonElement>) => {
  //     event.stopPropagation();
  //     setModals((prev) => ({ ...prev, confirmModal: false }));
  //   };
  //   const handleConfirm = (event: MouseEvent<HTMLButtonElement>) => {
  //     event.stopPropagation();
  //     setIsConfirm(true);
  //     setModals((prev) => ({ ...prev, confirmModal: false }));
  //     setTimeout(() => {
  //       setModals((prev) => ({ ...prev, refuseModal: true }));
  //     }, 200);
  //   };
  //   // 2
  //   const handleValidateName = (event: MouseEvent<HTMLButtonElement>) => {
  //     event.stopPropagation();
  //     if (subjectToDelete) {
  //       if (inputState.value !== subjectToDelete?.subjectName) {
  //         setInputState((prev) => ({ ...prev, error: 'Error: values not the same' }));
  //       } else {
  //         dispatch(thunk.subjectsDeleteThunk(subjectToDelete.subjectID));
  //         setTimeout(() => {
  //           handleClearData();
  //         }, 200);
  //       }
  //     }
  //   };
  //   const handleClearData = () => {
  //     setSubjectToDelete(null);
  //     setIsConfirm(false);
  //     setInputState({ error: '', value: '' });
  //     setModals({ confirmModal: false, refuseModal: false });
  //   };
  //   return (
  //     <>
  //       <Layout isOpen={modals.confirmModal} toggleIsOpen={handleClearData}>
  //         <Modal
  //           isActive={modals.confirmModal}
  //           label="Are you sure want to delete the subject?"
  //           acceptLabel="Yes"
  //           refuseLabel="No"
  //           acceptOnClick={handleConfirm}
  //           refuseOnClick={handleRefuse}
  //         />
  //       </Layout>
  //       <Layout isOpen={modals.refuseModal} toggleIsOpen={handleClearData}>
  //         <Modal
  //           isActive={modals.refuseModal}
  //           label={`To delete the subject, please write ${subjectToDelete?.subjectName}?`}
  //           acceptLabel="Yes"
  //           refuseLabel="No"
  //           refuseOnClick={handleClearData}
  //           acceptOnClick={handleValidateName}
  //           hasInput={true}
  //           value={inputState.value}
  //           error={inputState.error}
  //           onChangeInput={handleChange}
  //         />
  //       </Layout>
  //     </>
  //   );
};
export default Modals;
