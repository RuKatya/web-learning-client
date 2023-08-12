import css from './Tooltip.module.scss';

import { FC, ReactNode } from 'react';

interface ITooltipProps {
    message?: ReactNode;
    children?: ReactNode;
    isHover: boolean;
    position: 'left' | 'top' | 'right' | 'bottom';
}

const Tooltip: FC<ITooltipProps> = ({ message = '', position, children, isHover }) => {
  const hover = isHover ? css.active: undefined
    const classes = `${css.tooltip} ${hover} ${css[position]}`;
    return (
        <div className={classes}>
            {children}
            <span className={css.tooltipText}>{message}</span>
        </div>
    );
};
export default Tooltip;
