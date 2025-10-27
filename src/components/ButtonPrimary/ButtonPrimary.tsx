import type { FC } from 'react';
import { ButtonTypes, type ButtonProps } from '../Button/Button.props';
import Button from '../Button/Button';

export const ButtonPrimary: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <Button
            buttonType={ButtonTypes.Primary}
            {...props}
        >
            {children}
        </Button>
    );
};