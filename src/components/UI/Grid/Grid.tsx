import React, { FC, ReactNode } from 'react';
import classes from './Grid.module.scss'

interface GridProps {
    children: ReactNode
    gap?: number
    gtc?: string
}

const Grid: FC<GridProps> = ({ children, gap = 0, gtc = '1fr' }) => {
    return (
        <div
            className={classes.grid}
            style={{
                gap: gap,
                gridTemplateColumns: gtc
            }}
        >
            {children}
        </div>
    );
};

export default Grid;