import css from './StatusMessage.module.scss';

interface StatusMessageProps {
  message: string;
  continueWork: boolean;
}

const StatusMessage = ({ continueWork = false, message = '' }: StatusMessageProps) => {
  return <p className={continueWork ? css.success : css.error}>{message}</p>;
};

export default StatusMessage;
