import css from './Form.module.scss';

import { FC, FormEvent, useEffect } from 'react';
import { auth } from '../../../../app/auth/selectors';
import { Form, Link, useNavigate } from 'react-router-dom';
import { EButtonPosition, EButtonSize } from '../../Button';
import { clearErrorMessage } from '../../../../app/auth/authReducer';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';

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
    // const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            navigate(navigateTo);
        }
    }, []);

    useEffect(() => {
        let timerId: any;
        if (continueWork) {
            timerId = setTimeout(() => {
                // dispatch(clearErrorMessage());
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
            >
                {buttonText}
            </Button>
            <p className={css.question}>
                <span>{question}</span> <Link to={linkToBtn}>{buttonText}</Link>
            </p>
        </Form>
    );
};

export default MyForm;

// const Login: FC<IFormProps> = props => {
//     const email = useInput('qwe123@mail.ruww', validateEmail);
//     const password = useInput('qwe123!', validatePassword);

//     const dispatch = useAppDispatch();
//     const {
//         message,
//         continueWork,
//         status,
//         user: { isLogin, userRole },
//     } = useAppSelector(auth);

//     const navigate = useNavigate();

//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         dispatch(
//             thunk.loginThunk({ email: email.value, password: password.value })
//         );
//     };

//     const inputsLogin: IInputForm[] = [
//         {
//             ...email,
//             name: 'email',
//             placeholder: 'Type email...',
//         },
//         {
//             ...password,
//             type: 'password',
//             name: 'password',
//             placeholder: 'Type password...',
//         },
//     ];

//     const statusMessage = message ? (
//         <StatusMessage continueWork={continueWork} message={message} />
//     ) : null;

//     return (
//         <Form
//             className={css.loginForm}
//             action="/auth"
//             method="post"
//             onSubmit={handleSubmit}
//         >
//             <h3 className={css.loginForm__title}>Login</h3>
//             {statusMessage}

//             {inputsLogin.map(el => (
//                 <Input key={el.name} {...el} />
//             ))}

//             <Button
//                 style={{ margin: '0 auto' }}
//                 type="submit"
//                 size={EButtonSize.MEDIUM}
//                 position={EButtonPosition.CENTER}
//                 disabled={status === 'loading'}
//             >
//                 Log in
//             </Button>
//             <p className={css.question}>
//                 Don't have an account? <Link to="reg">Sign Up</Link>
//             </p>
//         </Form>
//     );
// };
// export default Login;
