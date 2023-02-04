import React, { FC, ReactNode } from 'react';
import classes from './Box.module.scss'



interface BoxProps {
    gap?: number
    children: ReactNode
    jc?: 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start'
    ai?: 'center' | 'flex-start' | 'flex-end'
    fd?: 'column' | 'row'
    fw?: 'wrap' | 'nowrap'
    padding?: string

}

const Box: FC<BoxProps> = ({ gap = 10, jc = 'start', ai = 'flex-start', fd = 'row', fw = 'nowrap', children, padding = '0' }) => {
    return (
        <div
            style={{
                justifyContent: jc,
                alignItems: ai,
                flexDirection: fd,
                gap: gap,
                flexWrap: fw,
                padding: padding
            }}

            className={classes.box}>
            {children}
        </div>
    );
};

export default Box;