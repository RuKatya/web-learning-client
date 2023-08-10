import css from './Button.module.scss';

import { ButtonHTMLAttributes, FC } from 'react';
import { Spinner } from '../Loader';

// sizes for button in css
export enum EButtonSize {
    SMALL = 's',
    MEDIUM = 'm',
    LARGE = 'l',
}
export enum EButtonPosition {
    CENTER = 'center',
    RIGHT = 'right',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: EButtonSize;
    children: string;
    position: EButtonPosition;
    style?: object;
    isLoading?: boolean;
    spinnerWidth?: number;
    spinnerHeight?: number;
    borderColor?: string;
    borderWidth?: number;
}

const Button: FC<IButtonProps> = ({
    size = EButtonSize.SMALL,
    children,
    position,
    style = {},
    isLoading = false,
    spinnerWidth,
    spinnerHeight,
}) => {
    const classes = `${css.button} ${css[size]} ${css[position]}`;

    return (
        <button disabled={isLoading} style={style} className={classes}>
            {isLoading ? (
                <Spinner width={spinnerWidth} height={spinnerHeight} />
            ) : (
                children
            )}
        </button>
    );
};
export default Button;
