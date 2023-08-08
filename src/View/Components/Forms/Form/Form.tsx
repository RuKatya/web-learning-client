import css from './Form.module.scss';

import { FC, FormEvent, useEffect } from 'react';
import { auth } from '../../../../app/auth/selectors';
import { Form, Link, useNavigate } from 'react-router-dom';
import { EButtonPosition, EButtonSize } from '../../Button';
import { useAppSelector } from '../../../../app/hooks';

import Input from '../../Input';
import Button from '../../Button';
import StatusMessage from '../StatusMessage/StatusMessage';

interface IFormProps {
    inputs: any[];
    title: string;
    method: 'post';
    question: string;
    linkToBtn: string;
    formAction: string;
    navigateTo: string;
    buttonText: string;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const MyForm: FC<IFormProps> = ({
    title,
    inputs,
    method,
    question,
    linkToBtn,
    buttonText,
    formAction,
    navigateTo,
    handleSubmit,
}) => {
    const {
        message,
        continueWork,
        status,
        user: { isLogin },
    } = useAppSelector(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            navigate(navigateTo);
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        let timerId: any;
        if (continueWork) {
            timerId = setTimeout(() => {
                navigate(navigateTo);
            }, 3000);
        }
        return () => clearTimeout(timerId);
        // eslint-disable-next-line
    }, [continueWork]);

    const statusMessage = message ? (
        <StatusMessage continueWork={continueWork} message={message} />
    ) : null;

    return (
        <Form
            className={css.loginForm}
            action={formAction}
            method={method}
            onSubmit={handleSubmit}
        >
            <h3 className={css.loginForm__title}>{title}</h3>
            {statusMessage}

            {inputs.map(el => (
                <Input key={el.name} {...el} />
            ))}

            <Button
                type="submit"
                size={EButtonSize.MEDIUM}
                position={EButtonPosition.CENTER}
                disabled={status === 'loading'}
                style={{ marginBottom: 10 }}
            >
                {buttonText}
            </Button>
            {!isLogin && (
                <p className={css.question}>
                    <span>{question}</span>{' '}
                    <Link to={linkToBtn}>{buttonText}</Link>
                </p>
            )}
        </Form>
    );
};

export default MyForm;
