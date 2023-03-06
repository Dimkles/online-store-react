import React, { FC, ReactNode } from 'react';
import classes from './Sidebar.module.scss'

interface SidebarProps {
    children: ReactNode
}
const Sidebar: FC<SidebarProps> = ({ children }) => {
    return (
        <aside className={classes.sidebar}>
            {children}
        </aside>
    );
};

export default Sidebar;