import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import classes from './Menu.module.scss'
const Menu: FC = () => {
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
            <ul className={classes.menu__list}>
                {isAuth
                    ? user.roles.some(e => e.value === 'ADMIN')
                        ? adminRoutes.map((route) =>
                            <li className={classes.menu__item} key={route.name}>
                                <Link
                                    className={activeLink === route.to
                                        ? [classes.menu__link, classes.active].join(' ')
                                        : classes.menu__link}
                                    to={route.to}
                                >
                                    {route.name}</Link>
                            </li>
                        )
                        : authRoutes.map((route) =>
                            <li className={classes.menu__item} key={route.name}>
                                <Link
                                    className={activeLink === route.to
                                        ? [classes.menu__link, classes.active].join(' ')
                                        : classes.menu__link}
                                    to={route.to}
                                >
                                    {route.name}</Link>
                            </li>
                        )
                    : publicRoutes.map((route) =>
                        <li className={classes.menu__item} key={route.name}>
                            <Link
                                className={activeLink === route.to
                                    ? [classes.menu__link, classes.active].join(' ')
                                    : classes.menu__link}
                                to={route.to}
                            >
                                {route.name}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default Menu;