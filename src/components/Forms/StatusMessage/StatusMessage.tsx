import { FC } from 'react';
import css from './StatusMessage.module.scss';

interface IStatusMessageProps {
  message: string;
  continueWork: boolean;
}

const StatusMessage: FC<IStatusMessageProps> = ({ continueWork = false, message = '' }) => {
  return <p className={continueWork ? css.success : css.error}>{message}</p>;
};

export default StatusMessage;
