import css from './Input.module.scss';

import { FC, useState } from 'react';

import { IInputForm } from '../Forms/types';

import EyeIconOpened from '../../../assets/images/icons/EyeIconOpened';
import EyeIconClosed from '../../../assets/images/icons/EyeIconClosed';

export enum InputE {
    TEXT = 'text',
    PASSWORD = 'password',
}

const Input: FC<IInputForm> = ({
    name,
    type = 'text',
    error,
    value,
    placeholder = 'Type here...',
    handleFocus = () => {},
    handleChange = () => {},
}) => {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const togglePasswordVisible = () => {
        setPasswordVisible(visibility => !visibility);
    };

    return (
        <div className={css.inputWrapper}>
            <input
                name={name}
                className={css.input}
                type={passwordVisible ? InputE.TEXT : type}
                value={value}
                onChange={handleChange}
                onBlur={handleFocus}
                placeholder={placeholder}
            />
            {type === InputE.PASSWORD && (
                <button
                    type="button"
                    onClick={togglePasswordVisible}
                    className={css.eyeBtn}
                >
                    {!passwordVisible ? (
                        <EyeIconOpened width={20} height={20} />
                    ) : (
                        <EyeIconClosed width={20} height={20} />
                    )}
                </button>
            )}

            <div className={error ? css.error : `${css.error} ${css.hidden}`}>
                {error}
            </div>
        </div>
    );
};
export default Input;
