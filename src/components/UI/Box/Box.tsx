import React, { FC, ReactNode } from 'react';
import classes from './Box.module.scss'



interface BoxProps {
    gap?: number
    children: ReactNode
    jc?: 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start'
    ai?: 'center' | 'flex-start' | 'flex-end'
    fd?: 'column' | 'row'

}

const Box: FC<BoxProps> = ({ gap = 10, jc = 'start', ai = 'flex-start', fd = 'row', children }) => {
    return (
        <div
            style={{
                justifyContent: jc,
                alignItems: ai,
                flexDirection: fd,
                gap: gap
            }}

            className={classes.box}>
            {children}
        </div>
    );
};

export default Box;