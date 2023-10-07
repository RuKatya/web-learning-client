import { FC } from 'react';

import EyeIconClosed from 'assets/images/icons/EyeIconClosed';
import EyeIconOpened from 'assets/images/icons/EyeIconOpened';

import css from './Input.module.scss';

interface IEyeButtonProps {
  width: number;
  height: number;
  passwordVisible: boolean;
  togglePasswordVisible: () => void;
}

const EyeButton: FC<IEyeButtonProps> = ({ width, height, passwordVisible, togglePasswordVisible }) => {
  return (
    <button type="button" onClick={togglePasswordVisible} className={css.eyeBtn}>
      {passwordVisible ? (
        <EyeIconOpened width={width} height={height} />
      ) : (
        <EyeIconClosed width={width} height={height} />
      )}
    </button>
  );
};
export default EyeButton;
