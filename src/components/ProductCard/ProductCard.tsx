import React, { FC } from 'react';
import classes from './ProductCard.module.scss'
import { IProduct } from '../../models/IProduct';
import MyImage from '../UI/MyImage/MyImage';
import MyButton from '../UI/MyButton/MyButton';

interface ProductCardProps {
    product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={classes.card}>
            <MyImage jpg={product.imagejpg} height={300} />
            <div className={classes.info}>
                <span className={classes.name}>
                    {product.name}
                </span>
                <p className={classes.description}>
                    {product.description}
                </p>
                <div className={classes.price}>
                    {product.price}
                </div>
                <div className={classes.categories}>
                    {product.categories.map(category =>
                        <span className={classes.category}>
                            {category.name}
                        </span>
                    )}
                </div>
            </div>
            <MyButton type='button'>
                Добавить в корзину
            </MyButton>
        </div>
    );
};

export default ProductCard;