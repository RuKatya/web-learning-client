import classnames from 'classnames';
import { FC, ReactNode } from 'react';

import css from './Tooltip.module.scss';

interface ITooltipProps {
  message?: ReactNode;
  children?: ReactNode;
  isHover: boolean;
  position: 'left' | 'top' | 'right' | 'bottom';
}

const Tooltip: FC<ITooltipProps> = ({ message = '', position, children, isHover }) => {
  const cnTooltop = classnames(css.tooltip, isHover && css.active, css[position]);

  return (
    <div className={cnTooltop}>
      {children}
      <span className={css.tooltipText}>{message}</span>
    </div>
  );
};
export default Tooltip;
