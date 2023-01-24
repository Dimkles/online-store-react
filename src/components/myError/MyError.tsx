import React, { FC, ReactNode } from 'react';
import classes from './MyError.module.scss'

interface MyErrorProps {
    children: ReactNode
}

const MyError: FC<MyErrorProps> = ({ children }) => {
    return (
        <span className={classes.error}>
            {children}
        </span>
    );
};

export default MyError;