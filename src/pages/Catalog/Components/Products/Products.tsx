import React, { FC } from 'react';
import { IProduct } from '../../../../models/IProduct';
import { useFechAllProductsQuery } from '../../../../services/RTK/ProductsService';
import ProductCard from '../ProductCard/ProductCard';
import classes from './Products.module.scss'

interface ProductsProps {
    products: IProduct[] | undefined
}

const Products: FC<ProductsProps> = ({ products }) => {
    return (
        <div className={classes.products}>
            {products?.map(product =>
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    );
};

export default Products;