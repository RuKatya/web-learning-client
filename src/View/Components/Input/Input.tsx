import css from './Input.module.scss';
import { FC } from 'react';
import { IInputForm } from '../Forms/types';

const Input: FC<IInputForm> = ({
    value = '',
    error = '',
    type = 'text',
    placeholder = 'Type here...',
    handleChange = () => {},
    handleFocus = () => {},
}) => {
    return (
        <>
            <input
                className={css.input}
                type={type}
                value={value}
                onChange={handleChange}
                onBlur={handleFocus}
                placeholder={placeholder}
            />
            <div className={error ? css.error : `${css.error} ${css.hidden}`}>
                {error}
            </div>
        </>
    );
};
export default Input;
