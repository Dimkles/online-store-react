import React from 'react';
import AuthWidget from '../authWidget/AuthWidget';
import Container from '../UI/Container/Container';
import Menu from '../UI/Menu/Menu';
import classes from './Header.module.scss'
const Header = () => {
    return (
        <div className={classes.header}>
            <Container>
                <div className={classes.content}>
                    <Menu />
                    <AuthWidget />
                </div>
            </Container>
        </div>
    );
};

export default Header;