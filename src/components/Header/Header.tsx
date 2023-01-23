import React from 'react';
import Container from '../Container/Container';
import Menu from '../UI/Menu/Menu';
import classes from './Header.module.scss'
const Header = () => {
    return (
        <div className={classes.header}>
            <Container>
                <div className={classes.content}>
                    <Menu />
                </div>
            </Container>
        </div>
    );
};

export default Header;