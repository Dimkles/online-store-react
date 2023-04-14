import React, { FC, useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import classes from './Menu.module.scss'
import MenuItem from './menuItem/MenuItem';
const Menu: FC = () => {
    const [menuActive, setMenuActive] = useState(false)
    const { isAuth, user } = useAppSelector(state => state.user)
    const adminRoutes = [
        { name: 'Главная', to: '/' },
        { name: 'Каталог', to: '/catalog' },
        { name: 'Админка', to: '/admin' },
    ]
    const authRoutes = [
        { name: 'Главная', to: '/' },
        { name: 'Каталог', to: '/catalog' },

    ]
    const publicRoutes = [
        { name: 'Главная', to: '/' },
        { name: 'Каталог', to: '/catalog' },
    ]
    return (
        <nav className={classes.menu}>
            <div className={classes.burger}>
                <button
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <span></span>
                </button>
            </div>
            <div
                className={menuActive ? [classes.layer, classes.active].join(' ') : classes.layer}
                onClick={() => setMenuActive(false)}
            ></div>
            <ul className={menuActive ? [classes.menu__list, classes.active].join(' ') : classes.menu__list}>
                {isAuth
                    ? user.roles.some(e => e.value === 'ADMIN')
                        ? adminRoutes.map((route) =>
                            <MenuItem route={route} key={route.name} />
                        )
                        : authRoutes.map((route) =>
                            <MenuItem route={route} key={route.name} />
                        )
                    : publicRoutes.map((route) =>
                        <MenuItem route={route} key={route.name} />
                    )
                }
            </ul>
        </nav>
    );
};

export default Menu;