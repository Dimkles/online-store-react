import React, { FC, ReactNode } from 'react';
import classes from './MyButton.module.scss'
interface MyButtonProps {
    children: ReactNode
    type: 'button' | 'submit'
    onClick?: any
}
const MyButton: FC<MyButtonProps> = ({ children, type, onClick }) => {
    return (
        <button onClick={onClick} className={classes.button} type={type}>
            {children}
        </button>
    );
};

export default MyButton;