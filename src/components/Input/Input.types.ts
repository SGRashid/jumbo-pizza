import type { InputHTMLAttributes } from 'react';

export type validationError = string | null;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    validator?: (value: string) => validationError;
    handleChange?: (value: string) => void;
    handleBlur?: (value: string) => void;
    // validationOn: blur, change, submit прочее. реализовать позже
}