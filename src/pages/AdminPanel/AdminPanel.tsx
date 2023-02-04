import React from 'react';
import Container from '../../components/UI/Container/Container';
import classes from './AdminPanel.module.scss'
import CreateProductForm from './components/CreateProductForm/CreateProductForm';
const AdminPanel = () => {
    return (
        <section className={classes.adminPanel}>
            <Container>
                Admin Panel
                <CreateProductForm />
            </Container>
        </section>
    );
};

export default AdminPanel;