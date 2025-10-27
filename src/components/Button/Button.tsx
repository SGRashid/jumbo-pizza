import { type JSX } from 'react';
import { type ButtonProps } from './Button.props';
import './Button.css';

const Button = ({ children, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            className='button primary'
            { ...props }
        >
            { children }
        </button>
    );
};

export default Button;