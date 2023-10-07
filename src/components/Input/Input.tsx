import classnames from 'classnames';
import { FC, useState } from 'react';

import Tooltip from 'components/Tooltip';

import { IInputForm } from 'config/types';

import EyeButton from './EyeButton';

import css from './Input.module.scss';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

const requirements = [
  { label: 'Password must be minimum 6 symbols' },
  { label: 'Password must be only En' },
  { label: 'Password must be without spaces' },
  { label: 'Password must include numbers' },
  { label: 'Password must include letters' },
  { label: 'Password must include one character like !@#$%^&amp;' },
];

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

  const requirementsList = requirements.map(({ label }, i) => (
    <li key={i} className={css.requirement__item}>
      {label}
    </li>
  ));

  const isNamePassword = name === 'password';
  const inputType = passwordVisible ? 'text' : type;

  const cnError = classnames(css.error, error && css.hidden);

  return (
    <div className={css.inputWrapper}>
      <input
        className={css.input}
        type={inputType}
        name={name}
        value={value}
        onBlur={handleFocus}
        onChange={handleChange}
        onMouseEnter={isNamePassword ? handleMouseEnter : undefined}
        onMouseLeave={isNamePassword ? handleMouseLeave : undefined}
        placeholder={placeholder}
      />
      {isNamePassword && (
        <Tooltip isHover={isHover} position={'bottom'} message={''}>
          <ul className={css.requirement__list}>{requirementsList}</ul>
        </Tooltip>
      )}

      {type === InputType.PASSWORD && (
        <EyeButton
          width={20}
          height={20}
          passwordVisible={passwordVisible}
          togglePasswordVisible={togglePasswordVisible}
        />
      )}

      <div className={cnError}>{error}</div>
    </div>
  );
};
export default Input;
