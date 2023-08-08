import css from './Button.module.scss';

import { ButtonHTMLAttributes, FC } from 'react';

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
}

const Button: FC<IButtonProps> = ({
    size = EButtonSize.SMALL,
    children,
    position,
    style = {},
}) => {
    const classes = `${css.button} ${css[size]} ${css[position]}`;

    return (
        <button style={style} className={classes}>
            {children}
        </button>
    );
};
export default Button;
