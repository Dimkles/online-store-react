import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './MenuItem.module.scss'
interface MenuItemProps {
    route: {
        name: string
        to: string
    }
    activeLink: string
}
const MenuItem: FC<MenuItemProps> = ({ route, activeLink }) => {
    return (
        <li>
            <Link
                className={activeLink === route.to
                    ? [classes.link, classes.active].join(' ')
                    : classes.link}
                to={route.to}
            >
                {route.name}</Link>
        </li>
    );
};

export default MenuItem;