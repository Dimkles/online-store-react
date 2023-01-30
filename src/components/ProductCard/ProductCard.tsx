import React, { FC } from 'react';
import classes from 'ProductCard.module.scss'
import Box from '../UI/Box/Box';
import { IProduct } from '../../models/IProduct';



const ProductCard: FC<IProduct> = ({ categories, description, imagejpg, imagewebp, name, price, quantity }) => {
    return (
        <div className={classes.card}>
            <Box>
                <span className={classes.name}>
                    {name}
                </span>
            </Box>
        </div>
    );
};

export default ProductCard;