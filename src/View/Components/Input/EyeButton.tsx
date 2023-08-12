import css from './Input.module.scss';

import { FC } from 'react';
import EyeIconOpened from '../../../assets/images/icons/EyeIconOpened';
import EyeIconClosed from '../../../assets/images/icons/EyeIconClosed';

interface IEyeButtonProps {
    width: number;
    height: number;
    passwordVisible: boolean;
    togglePasswordVisible: () => void;
}

const EyeButton: FC<IEyeButtonProps> = ({
    width,
    height,
    passwordVisible,
    togglePasswordVisible,
}) => {
    return (
        <button
            type="button"
            onClick={togglePasswordVisible}
            className={css.eyeBtn}
        >
            {!passwordVisible ? (
                <EyeIconOpened width={width} height={height} />
            ) : (
                <EyeIconClosed width={width} height={height} />
            )}
        </button>
    );
};
export default EyeButton;
