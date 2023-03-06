import React, { FC } from 'react';
import Container from '../../components/UI/Container/Container';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import classes from './Catalog.module.scss'
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';

const Catalog: FC = () => {
    return (
        <section className={classes.catalog}>
            <Container className={classes.content}>
                <Sidebar>
                    <Categories />
                </Sidebar>
                <Products />
            </Container>
        </section>
    );
};

export default Catalog;