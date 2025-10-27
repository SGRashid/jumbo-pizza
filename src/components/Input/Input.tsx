import { useState, type FC } from 'react';
import {
    type InputProps,
    type validationError,
} from './Input.types';

export const Input: FC<InputProps> = ({ validator, ...props }) => {
    const [ value, setValue ] = useState<string>('');
    const [ error, setError ] = useState<validationError>(null);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (props.onBlur) props.onBlur(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (props.onChange) props.onChange(e);
        if (error) setError(null); // очистка ошибки при начале ввода.
    };
    return(
        <input
            value={value}
            onBlur={handleBlur}
            onChange={handleChange}
            { ...props }
        />
    );
};