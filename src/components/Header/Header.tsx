import React from 'react';
import Container from '../Container/Container';
import Menu from '../Menu/Menu';
import classes from './Header.module.scss'
const Header = () => {
    return (
        <div className={classes.header}>
            <Container>
                <Menu />
            </Container>
        </div>
    );
};

export default Header;