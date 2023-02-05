import React, { FC } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Container from '../../components/UI/Container/Container';
import { useFechAllProductsQuery } from '../../services/RTK/ProductsService';
import classes from './Catalog.module.scss'

const Catalog: FC = () => {
    const { data } = useFechAllProductsQuery({ limit: 10, page: 1 })
    return (
        <section className={classes.catalog}>
            <Container>
                <div className={classes.content}>
                    {data?.products.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Catalog;