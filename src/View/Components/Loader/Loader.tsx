import css from './Loader.module.scss';

import { FC } from 'react';

interface ILoaderProps {
    width: number | string;
    height: number | string;
    barColor: string;
    borderWidth: number;
    borderColor: string;
    barStyle: object;
    wrapperStyles: object;
    wrapperColor: string;
    wrapperWidth: number;
}

const ProgressBar: FC<Partial<ILoaderProps>> = ({
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
            <div
                style={{ ...barStyle, backgroundColor: barColor }}
                className={css.loader}
            ></div>
        </div>
    );
};
export default ProgressBar;
