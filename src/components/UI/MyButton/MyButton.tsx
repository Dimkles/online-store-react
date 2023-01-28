import React, { FC, ReactNode } from 'react';
import classes from './MyButton.module.scss'
interface MyButtonProps {
    children: ReactNode
    type: 'button' | 'submit'
    onClick?: any
    variant?: 'text' | 'contained' | 'outlined'
}
const MyButton: FC<MyButtonProps> = ({ children, type, onClick, variant = 'contained' }) => {
    return (
        <button
            onClick={onClick}
            className={[classes.button, classes[variant]].join(' ')}
            type={type}
        >
            {children}
        </button>
    );
};

export default MyButton;