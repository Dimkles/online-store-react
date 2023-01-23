import React, { FC, ReactNode } from 'react';
import classes from './MyButton.module.scss'
interface MyButtonProps {
    children: ReactNode
    type: 'button' | 'submit'
}
const MyButton: FC<MyButtonProps> = ({ children, type }) => {
    return (
        <button className={classes.button} type={type}>
            {children}
        </button>
    );
};

export default MyButton;