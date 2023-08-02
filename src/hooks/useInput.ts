import { ChangeEvent, useState } from 'react';

const useInput = (initValue: string) => {
    const [value, setValue] = useState<string>(initValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return { value, handleChange };
};

export default useInput;
