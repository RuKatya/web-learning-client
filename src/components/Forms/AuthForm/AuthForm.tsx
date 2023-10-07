import { FC, FormEvent, useEffect } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';

import Button, { EButtonPosition, EButtonSize } from 'components/Button';
import StatusMessage from 'components/Forms/StatusMessage';
import Input from 'components/Input';

import { clearMessageContinueWork } from 'store/auth/authReducer';
import { auth } from 'store/auth/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { IInputForm } from '../types';

import css from './AuthForm.module.scss';

interface IAuthFormProps {
  inputs: IInputForm[];
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
    // eslint-disable-next-line
  }, [continueWork]);

  return (
    <Form className={css.loginForm} method="post" onSubmit={handleSubmit}>
      <h3 className={css.loginForm__title}>{title}</h3>

      <StatusMessage continueWork={continueWork} message={message} />

      {inputs.map((el) => (
        <Input key={el.name} {...el} />
      ))}

      <Button
        type="submit"
        borderWidth={2}
        borderColor="green"
        size={EButtonSize.MEDIUM}
        position={EButtonPosition.CENTER}
        style={{ marginBottom: 10 }}
        spinnerWidth={20}
        spinnerHeight={20}
        isLoading={status === 'loading'}
      >
        {buttonText}
      </Button>
      {!isLogin && (
        <p className={css.question}>
          <span>{question}</span> <Link to={linkToBtn}>{questionLinkText}</Link>
        </p>
      )}
    </Form>
  );
};

export default AuthForm;
