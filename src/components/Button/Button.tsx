import classnames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { Spinner } from '../Loader';
import css from './Button.module.scss';

// sizes for button in css
// sizes refactor
// classnames
export enum ButtonSizeEnum {
  SMALL = 's',
  MEDIUM = 'm',
  LARGE = 'l',
}
export enum ButtonPositionEnum {
  CENTER = 'center',
  RIGHT = 'right',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSizeEnum;
  children: string;
  position: ButtonPositionEnum;
  style?: object;
  isLoading?: boolean;
  spinnerWidth?: number;
  spinnerHeight?: number;
  borderColor?: string;
  borderWidth?: number;
}

const Button: FC<IButtonProps> = ({
  size = ButtonSizeEnum.SMALL,
  children,
  position,
  style = {},
  isLoading = false,
  spinnerWidth,
  spinnerHeight,
}) => {
  const cnButton = classnames(css.button);
  const classes = `${css.button} ${css[size]} ${css[position]}`;

  return (
    <button disabled={isLoading} style={style} className={classes}>
      {isLoading ? <Spinner width={spinnerWidth} height={spinnerHeight} /> : children}
    </button>
  );
};
export default Button;
