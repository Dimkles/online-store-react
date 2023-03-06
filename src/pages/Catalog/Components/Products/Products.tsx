import React from 'react';
import { useFechAllProductsQuery } from '../../../../services/RTK/ProductsService';
import ProductCard from '../ProductCard/ProductCard';
import classes from './Products.module.scss'
const Products = () => {
    const { data: products } = useFechAllProductsQuery({ limit: 10, page: 1 })
    return (
        <div className={classes.products}>
            {products?.products.map(product =>
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    );
};

export default Products;