import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MenuItem.module.scss'
interface MenuItemProps {
    route: {
        name: string
        to: string
    }
}
const MenuItem: FC<MenuItemProps> = ({ route }) => {
    return (
        <li>
            <NavLink
                to={route.to}
                className={({ isActive }) => isActive ? [classes.active, classes.link].join(' ') : classes.link}
            >
                {route.name}</NavLink>
        </li>
    );
};

export default MenuItem;