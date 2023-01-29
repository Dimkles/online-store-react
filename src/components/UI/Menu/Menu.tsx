import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import classes from './Menu.module.scss'
import MenuItem from './menuItem/MenuItem';
const Menu: FC = () => {
    const [menuACtive, setMenuActive] = useState(false)
    const { isAuth, user } = useAppSelector(state => state.user)
    const location = useLocation();
    useEffect(() => {
        setActiveLink(location.pathname)
    }, [location])
    const [activeLink, setActiveLink] = useState('/')
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
                    onClick={() => setMenuActive(!menuACtive)}
                >
                    <span></span>
                </button>
            </div>
            <div
                className={menuACtive ? [classes.layer, classes.active].join(' ') : classes.layer}
                onClick={() => setMenuActive(false)}
            ></div>
            <ul className={menuACtive ? [classes.menu__list, classes.active].join(' ') : classes.menu__list}>
                {isAuth
                    ? user.roles.some(e => e.value === 'ADMIN')
                        ? adminRoutes.map((route) =>
                            <MenuItem activeLink={activeLink} route={route} key={route.name} />
                        )
                        : authRoutes.map((route) =>
                            <MenuItem activeLink={activeLink} route={route} key={route.name} />
                        )
                    : publicRoutes.map((route) =>
                        <MenuItem activeLink={activeLink} route={route} key={route.name} />
                    )
                }
            </ul>
        </nav>
    );
};

export default Menu;