import { useState, useLayoutEffect } from 'react';

const queries = [
    '(max-width: 766px)',
    '(min-width: 767px) and (max-width: 1199px)',
    '(min-width: 1200px)',
];

const devices = ['isMobile', 'isTablet', 'isDesktop'];

const useMatchMedia = (): { [key: string]: boolean } => {
    const matchMediaQuery = queries.map(query => matchMedia(query));

    const getValues = () => {
        return matchMediaQuery.map(mmq => mmq.matches);
    };

    const [values, setValues] = useState<boolean[]>(getValues);

    useLayoutEffect(() => {
        const changeValues = () => {
            setValues(getValues);
        };

        matchMediaQuery.forEach(mq =>
            mq.addEventListener('change', changeValues)
        );

        return () =>
            matchMediaQuery.forEach(mq =>
                mq.removeEventListener('change', changeValues)
            );
    });

    return devices.reduce(
        (acc, screen, i) => ({
            ...acc,
            [screen]: values[i],
        }),
        {}
    );
};
export default useMatchMedia;
