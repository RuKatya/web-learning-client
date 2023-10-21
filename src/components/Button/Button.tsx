import classnames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { Spinner } from '../Loader';
import { ButtonPosition, ButtonSize } from './types';
import css from './Button.module.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  position: ButtonPosition;
  className?: string;
  isLoading?: boolean;
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
  className,
  ...props
}: IButtonProps) => {
  const cnButton = classnames(css.button, className && className, css[size], css[position]);

  return (
    <button disabled={isLoading} style={style} className={cnButton} {...props}>
      {isLoading ? <Spinner width={spinnerWidth} height={spinnerHeight} /> : children}
    </button>
  );
};
export default Button;
