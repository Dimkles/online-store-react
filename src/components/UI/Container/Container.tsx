import React, { FC, ReactNode } from 'react';
import classes from './Container.module.scss'


interface ContainerProps {
    children: ReactNode
    className?: string

}

const Container: FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={className ? classes.container + ' ' + className : classes.container}>
            {children}
        </div>
    );
};

export default Container;