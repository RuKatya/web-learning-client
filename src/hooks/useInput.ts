import { ChangeEvent, FocusEvent, useState } from 'react';
import { IInputForm } from '../View/Components/Forms/types';

const useInput = (
    initValue: string,
    validate?: (arg: string) => string
): IInputForm => {
    const [value, setValue] = useState<string>(initValue);
    const [error, setError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        if (validate) {
            const validRes = validate(e.target.value);
            setError(validRes);
        }
    };

    return {
        value,
        error,
        handleFocus,
        handleChange,
    };
};

export default useInput;
