import React from 'react';
import { useFechAllCategoriesQuery } from '../../../../services/RTK/CategoriesService';
import classes from './Categories.module.scss'
const Categories = () => {
    const { data: categories } = useFechAllCategoriesQuery('')
    return (
        <ul>
            {categories?.map(category =>
                <li key={category.id}>
                    {category.name}
                </li>
            )}
        </ul>
    );
};

export default Categories;