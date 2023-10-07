import { FC, useState } from 'react';

import { IInputForm } from '../Forms/types';

import Tooltip from '../Tooltip/Tooltip';
import EyeButton from './EyeButton';
import css from './Input.module.scss';

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
  handleFocus,
  handleChange,
}) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const togglePasswordVisible = () => {
    setPasswordVisible((visibility) => !visibility);
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
        type={passwordVisible ? InputE.TEXT : type}
        name={name}
        value={value}
        onBlur={handleFocus}
        onChange={handleChange}
        onMouseEnter={isNamePassword ? handleMouseEnter : undefined}
        onMouseLeave={isNamePassword ? handleMouseLeave : undefined}
        placeholder={placeholder}
      />
      {isNamePassword && (
        //
        // TO do list id items
        //
        <Tooltip isHover={isHover} position={'bottom'} message={''}>
          <ul className={css.requirement__list}>
            <li className={css.requirement__item}>* Password must be minimum 6 symbols</li>
            <li className={css.requirement__item}>* Password must be only En</li>
            <li className={css.requirement__item}>* Password must be without spaces</li>
            <li className={css.requirement__item}>* Password must include numbers</li>
            <li className={css.requirement__item}>* Password must include letters</li>
            <li className={css.requirement__item}>* Password must include one character like !@#$%^&amp;</li>
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

      <div className={error ? css.error : `${css.error} ${css.hidden}`}>{error}</div>
    </div>
  );
};
export default Input;
