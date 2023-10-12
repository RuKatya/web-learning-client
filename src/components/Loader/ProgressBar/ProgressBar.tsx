import { FC } from 'react';

import { ILoaderProps1 } from '../types';

import css from './ProgressBar.module.scss';

const ProgressBar: FC<Partial<ILoaderProps1>> = ({
  width,
  height,
  wrapperStyles,
  barColor,
  barStyle,
  borderWidth,
  wrapperColor,
  borderColor,
  wrapperWidth,
}) => {
  return (
    <div
      style={{
        ...wrapperStyles,
        width,
        height,
        boxShadow: `0 0 0px ${wrapperWidth}px ${wrapperColor}`,
        borderColor: `${borderWidth} solid ${borderColor}`,
      }}
      className={css.loaderWrapper}
    >
      <div style={{ ...barStyle, backgroundColor: barColor }} className={css.loader}></div>
    </div>
  );
};
export default ProgressBar;
