import { FC } from 'react';

import { ILoaderProps1 } from '../types';

import css from './Spinner.module.scss';

// PARTIAL MAYBE NO NEED
const Spinner: FC<Partial<ILoaderProps1>> = ({ width, height, wrapperStyles, borderColor = 20, borderWidth = 20 }) => {
  return (
    <div
      style={{
        ...wrapperStyles,
        width,
        height,
        borderLeftColor: `${borderWidth} solid ${borderColor}`,
        borderRightColor: `${borderWidth} solid ${borderColor}`,
      }}
      className={css.loaderWrapper}
    />
  );
};
export default Spinner;
