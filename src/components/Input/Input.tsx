import { forwardRef, useState } from 'react';
import {
    type InputProps,
    type validationError,
} from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(({ value, ...props }, ref) => {
    const [ error, setError ] = useState<validationError>(null);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        // здесь добавим валидацию
        if (props?.onBlur) props.onBlur(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props?.onChange) props.onChange(e);
        if (error) setError(null); // очистка ошибки при начале ввода.
    };
    return(
        <input
            value={value}
            onBlur={handleBlur}
            onChange={handleChange}
            ref={ref}
            { ...props }
        />
    );
});