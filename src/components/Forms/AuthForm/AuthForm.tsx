import { FC, FormEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import FormInput from 'components/FormInput';
import StatusMessage from 'components/Forms/StatusMessage';

import { clearMessageContinueWork } from 'store/auth/authReducer';
import { auth } from 'store/auth/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { FormInputT } from '../../../config/types';

import css from './AuthForm.module.scss';

interface IAuthFormProps {
  inputs: FormInputT[];
  title: string;
  question: string;
  linkToBtn: string;
  buttonText: string;
  questionLinkText: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const AuthForm: FC<IAuthFormProps> = ({
  title,
  inputs,
  question,
  linkToBtn,
  buttonText,
  handleSubmit,
  questionLinkText,
}) => {
  const {
    message,
    continueWork,
    status,
    user: { isLogin },
  } = useAppSelector(auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (continueWork && !isLogin) {
      navigate('/auth');
    } else if (continueWork && isLogin) {
      navigate('/');
    }
    dispatch(clearMessageContinueWork());
  }, [continueWork]);

  return (
    <form className={css.loginForm} onSubmit={handleSubmit}>
      <h3 className={css.loginForm__title}>{title}</h3>

      {message && <StatusMessage continueWork={continueWork} message={message} />}

      <ul className={css.inputs__list}>
        {inputs.map((el) => (
          <FormInput key={el.name} {...el} />
        ))}
      </ul>

      <Button
        type="submit"
        size="m"
        position="center"
        style={{ marginBottom: 10 }}
        spinnerWidth={20}
        spinnerHeight={20}
        isLoading={status === 'loading'}
      >
        {buttonText}
      </Button>
      {!isLogin && (
        <p className={css.loginForm__question}>
          <span>{question}</span>
          <Link className={css.loginForm__question__link} to={linkToBtn}>
            {questionLinkText}
          </Link>
        </p>
      )}
    </form>
  );
};

export default AuthForm;
