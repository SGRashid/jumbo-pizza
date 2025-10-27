import { type JSX } from 'react';
import classNames from 'classnames/bind';
import { ButtonTypes, type ButtonProps } from './Button.props';
import styles from './Button.module.css';

const Button = ({ children, buttonType, ...props}: ButtonProps): JSX.Element => {
    const cx = classNames.bind(styles);
    
    const btnClasses = cx({
        button: true,
        primary: buttonType === ButtonTypes.Primary,
        secondary: buttonType === ButtonTypes.Secondary,
        accent: buttonType === ButtonTypes.Accent,
    });

    return (
        <button
            className={ btnClasses }
            { ...props }
        >
            { children }
        </button>
    );
};

export default Button;