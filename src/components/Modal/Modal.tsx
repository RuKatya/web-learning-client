import classnames from 'classnames';
import { ChangeEvent, MouseEvent } from 'react';

import Button from 'components/Button';

import css from './Modal.module.scss';

type ModalProps = {
  label: string;
  acceptLabel?: string;
  refuseLabel?: string;
  acceptOnClick: (event: MouseEvent<HTMLButtonElement>) => void;
  refuseOnClick: (event: MouseEvent<HTMLButtonElement>) => void;
  value?: string;
  error?: string;
  hasInput?: boolean;
  onChangeInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  isActive?: boolean;
};

const Modal = ({
  isActive,
  label,
  acceptLabel = 'Yes',
  refuseLabel = 'No',
  value,
  error,
  hasInput,
  acceptOnClick,
  refuseOnClick,
  onChangeInput,
}: ModalProps) => {
  const cnModal = classnames(css.modal, isActive && css.active);

  return (
    <div className={cnModal}>
      <div className={css.modal__question}>{label}</div>
      <Button size="s" position="center" className={css.modal__close} onClick={refuseOnClick}>
        X
      </Button>

      {hasInput && <input className={css.modal__input} value={value} onChange={onChangeInput} />}
      {hasInput && error && <div className={css.modal__error}>{error}</div>}

      <div className={css.modal__btns}>
        <Button onClick={acceptOnClick} size="m" position="center" className={css.modal__btn}>
          {acceptLabel}
        </Button>
        <Button onClick={refuseOnClick} size="m" position="center" className={css.modal__btn}>
          {refuseLabel}
        </Button>
      </div>
    </div>
  );
};
export default Modal;
