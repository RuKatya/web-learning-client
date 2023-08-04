import css from './Loader.module.scss';

import { FC } from 'react';

interface ILoaderProps {
    width: number | string;
    height: number | string;
    barColor: string;
    borderWidth: number;
    borderColor: string;
    barStyle: object;
    wrapperStyle: object;
}

const ProgressBar: FC<Partial<ILoaderProps>> = ({
    width,
    height,
    wrapperStyle,
    barColor,
    barStyle,
    borderWidth,
    borderColor,
}) => {
    return (
        <div
            style={{
                ...wrapperStyle,
                width,
                height,
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
