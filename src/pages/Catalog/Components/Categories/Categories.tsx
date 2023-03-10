import React, { Dispatch, FC, SetStateAction } from 'react';
import MyButton from '../../../../components/UI/MyButton/MyButton';
import { ICategory } from '../../../../models/ICategory';
import { useFechAllCategoriesQuery } from '../../../../services/RTK/CategoriesService';
import classes from './Categories.module.scss'

interface CategoriesProps {
    categories: ICategory[] | undefined
    currentCategory: ICategory
    setCurrentCategory: Dispatch<SetStateAction<ICategory>>
}

const Categories: FC<CategoriesProps> = ({ categories, currentCategory, setCurrentCategory }) => {
    const clickHandler = (category: ICategory) => {
        console.log(category)
    }
    return (
        <ul>
            {categories?.map(category =>
                <li key={category.id}>
                    <MyButton variant='text' type='button' onClick={() => clickHandler(category)}>
                        {category.name}
                    </MyButton>
                </li>
            )}
        </ul>
    );
};

export default Categories;