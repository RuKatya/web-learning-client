// import css from './Input.module.scss';
import { FC, ChangeEvent, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    value: string;
    placeholder?: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInputProps> = ({
    value = '',
    type = 'text',
    placeholder = 'Type here...',
    handleChange = () => {},
}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};
export default Input;
