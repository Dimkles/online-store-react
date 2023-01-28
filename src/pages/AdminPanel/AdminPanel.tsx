import React from 'react';
import Container from '../../components/UI/Container/Container';
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