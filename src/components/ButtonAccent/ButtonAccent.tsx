import type { FC } from 'react';
import { ButtonTypes, type ButtonProps } from '../Button/Button.props';
import Button from '../Button/Button';

export const ButtonAccent: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <Button
            buttonType={ButtonTypes.Accent}
            {...props}
        >
            {children}
        </Button>
    );
};