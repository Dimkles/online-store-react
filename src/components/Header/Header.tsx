import React from 'react';
import Container from '../Container/Container';
import classes from './Header.module.scss'
const Header = () => {
    return (
        <div className={classes.header}>
            <Container>
                Header
            </Container>
        </div>
    );
};

export default Header;