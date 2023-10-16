import EyeIconClosed from 'assets/images/icons/EyeIconClosed';
import EyeIconOpened from 'assets/images/icons/EyeIconOpened';

import css from './FormInput.module.scss';

interface EyeButtonProps {
  width: number;
  height: number;
  isVisible: boolean;
  toggleIsVisible: () => void;
}

const EyeButton = ({ width, height, isVisible, toggleIsVisible }: EyeButtonProps) => {
  return (
    <button style={{ width, height }} type="button" onClick={toggleIsVisible} className={css.eyeBtn}>
      {isVisible ? <EyeIconOpened width={width} height={height} /> : <EyeIconClosed width={width} height={height} />}
    </button>
  );
};
export default EyeButton;
