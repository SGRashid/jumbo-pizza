import {
    type ButtonHTMLAttributes,
    type ReactNode
} from 'react';

export enum ButtonTypes {
    Primary,
    Secondary,
    Accent,
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    buttonType?: ButtonTypes
}