import type { InputHTMLAttributes } from 'react';

export type validationError = string | null;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    validator?: (value: string) => validationError;
    // validationOn: blur, change, submit прочее. реализовать позже
}