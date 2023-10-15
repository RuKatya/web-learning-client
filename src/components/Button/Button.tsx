import classnames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { Spinner } from '../Loader';
import { ButtonPosition, ButtonSize } from './types';
import css from './Button.module.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  position: ButtonPosition;
  isLoading?: boolean;
  borderColor?: string;
  borderWidth?: number;
  spinnerWidth?: number;
  spinnerHeight?: number;
}

const Button = ({
  size = 's',
  children,
  position,
  style = {},
  isLoading = false,
  spinnerWidth,
  spinnerHeight,
  ...props
}: IButtonProps) => {
  const cnButton = classnames(css.button, css[size], css[position]);

  return (
    <button disabled={isLoading} style={style} className={cnButton} {...props}>
      {isLoading ? <Spinner width={spinnerWidth} height={spinnerHeight} /> : children}
    </button>
  );
};
export default Button;
