import React from 'react';
import Container from '../../components/Container/Container';
import classes from './AdminPanel.module.scss'
const AdminPanel = () => {
    return (
        <section className={classes.adminPanel}>
            <Container>
                Admin Panel
            </Container>
        </section>
    );
};

export default AdminPanel;