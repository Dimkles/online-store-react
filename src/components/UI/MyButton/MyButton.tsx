import React, { FC, ReactNode } from 'react';
import classes from './MyButton.module.scss'
interface MyButtonProps {
    children: ReactNode
    type: 'button' | 'submit'
    onClick?: any
    mt?: number
    mb?: number
}
const MyButton: FC<MyButtonProps> = ({ children, type, onClick, mt = 0, mb = 0 }) => {
    return (
        <button
            style={{ marginTop: mt, marginBottom: mb }}
            onClick={onClick}
            className={classes.button}
            type={type}
        >
            {children}
        </button>
    );
};

export default MyButton;