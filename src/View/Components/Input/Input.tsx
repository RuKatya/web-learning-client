import css from './Input.module.scss';
import { FC, useState } from 'react';
import { IInputForm } from '../Forms/types';
import EyeIcon from '../../../assets/images/icons/EyeIcon';

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
        console.log('click');
        setPasswordVisible(visibility => !visibility);
    };
    return (
        <div className={css.inputWrapper}>
            <input
                className={css.input}
                type={passwordVisible ? type : 'text'}
                value={value}
                onChange={handleChange}
                onBlur={handleFocus}
                placeholder={placeholder}
            />
            {type === 'password' && (
                <button
                    type="button"
                    onClick={togglePasswordVisible}
                    className={css.eyeBtn}
                >
                    <EyeIcon width={20} height={20} />

                    {!passwordVisible && <div className={css.eyeClosed}></div>}
                </button>
            )}

            <div className={error ? css.error : `${css.error} ${css.hidden}`}>
                {error}
            </div>
        </div>
    );
};
export default Input;
