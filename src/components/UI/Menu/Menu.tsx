import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Menu.module.scss'
const Menu = () => {
    const location = useLocation();
    useEffect(() => {
        setActiveLink(location.pathname)
        console.log(location.pathname)
    }, [location])
    const [activeLink, setActiveLink] = useState('/')
    const routes = [
        { name: 'Главная', to: '/' },
        { name: 'Каталог', to: '/catalog' },
        { name: 'Админка', to: '/admin' },
    ]
    return (
        <nav className={classes.menu}>
            <ul className={classes.menu__list}>
                {routes.map((route) =>
                    <li className={classes.menu__item} key={route.name}>
                        <Link
                            className={activeLink === route.to
                                ? [classes.menu__link, classes.active].join(' ')
                                : classes.menu__link}
                            to={route.to}
                        >
                            {route.name}</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Menu;