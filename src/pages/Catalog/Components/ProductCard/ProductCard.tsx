import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../../../../components/UI/MyButton/MyButton';
import MyImage from '../../../../components/UI/MyImage/MyImage';
import { BACKEND_URL } from '../../../../consts/store';
import { IProduct } from '../../../../models/IProduct';
import classes from './ProductCard.module.scss'


interface ProductCardProps {
    product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <Link to={`/catalog/${product.id}`} className={classes.card}>
            <MyImage webp={`${BACKEND_URL}/${product.imagewebp}`} jpg={`${BACKEND_URL}/${product.imagejpg}`} height={300} />
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
                        <span key={category.id} className={classes.category}>
                            {category.name}
                        </span>
                    )}
                </div>
            </div>
            <MyButton type='button'>
                Добавить в корзину
            </MyButton>
        </Link>
    );
};

export default ProductCard;