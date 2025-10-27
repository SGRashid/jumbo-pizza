import { type JSX } from 'react';
import classNames from 'classnames/bind';
import { type ButtonProps } from './Button.props';
import styles from './Button.module.css';

const Button = ({ children, ...props}: ButtonProps): JSX.Element => {
    const cx = classNames.bind(styles);
    const btnClasses = cx({
        button: true,
        primary: true
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