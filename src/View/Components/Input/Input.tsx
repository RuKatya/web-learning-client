import css from './Input.module.scss';

import { FC, useRef, useState } from 'react';

import { IInputForm } from '../Forms/types';

import Tooltip from '../Tooltip/Tooltip';
import EyeButton from './EyeButton';

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
    const [isHover, setIsHover] = useState<boolean>(false);

    const togglePasswordVisible = () => {
        setPasswordVisible(visibility => !visibility);
    };

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const isNamePassword = name === 'password';

    return (
        <div className={css.inputWrapper}>
            <input
                className={css.input}
                name={name}
                value={value}
                onBlur={handleFocus}
                onChange={handleChange}
                onMouseEnter={isNamePassword ? handleMouseEnter : undefined}
                onMouseLeave={isNamePassword ? handleMouseLeave : undefined}
                placeholder={placeholder}
                type={passwordVisible ? InputE.TEXT : type}
            />
            {isNamePassword && !error && (
                <Tooltip isHover={isHover} position={'bottom'} message={''}>
                    <ul>
                        <li>* Password must be minimum 6 symbols</li>
                        <li>* Password must be only En</li>
                        <li>* Password must be without spaces</li>
                        <li>* Password must include numbers</li>
                        <li>* Password must include letters</li>
                        <li>
                            * Password must include one character like
                            !@#$%^&amp;*'
                        </li>
                    </ul>
                </Tooltip>
            )}

            {type === InputE.PASSWORD && (
                <EyeButton
                    width={20}
                    height={20}
                    passwordVisible={passwordVisible}
                    togglePasswordVisible={togglePasswordVisible}
                />
            )}

            <div className={error ? css.error : `${css.error} ${css.hidden}`}>
                {error}
            </div>
        </div>
    );
};
export default Input;
