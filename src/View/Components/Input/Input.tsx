// import css from './Input.module.scss';
import { FC, ChangeEvent, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    // type?: string;
    // placeholder?: string;
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
