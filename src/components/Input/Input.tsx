import classnames from 'classnames';
import { useState } from 'react';

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

const Input = ({
  name,
  type = 'text',
  error,
  value,
  placeholder = 'Type here...',
  handleFocus,
  handleChange,
  afterSlot,
}: IInputForm) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const toggleIsVisible = () => {
    setIsVisible((visibility) => !visibility);
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
  const inputType = isVisible ? 'text' : type;

  const cnError = classnames(css.error, error && css.hidden);

  return (
    <>
      <div className={css.input__wrapper}>
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

        {type === InputType.PASSWORD && (
          <EyeButton width={20} height={20} isVisible={isVisible} toggleIsVisible={toggleIsVisible} />
        )}
      </div>
      {isNamePassword && (
        <Tooltip isHover={isHover} position={'bottom'} message={''}>
          <ul className={css.requirement__list}>{requirementsList}</ul>
        </Tooltip>
      )}
      <div className={cnError}>{error}</div>
    </>
  );
};
export default Input;
