import React, { Dispatch, FC, SetStateAction } from 'react';
import MyButton from '../../../../components/UI/MyButton/MyButton';
import { ICategory } from '../../../../models/ICategory';
import CategoryItem from '../CategoryItem/CategoryItem';

interface CategoriesProps {
    categories: ICategory[] | undefined
    currentCategory: number
    setCurrentCategory: Dispatch<SetStateAction<number>>
}

const Categories: FC<CategoriesProps> = ({ categories, currentCategory, setCurrentCategory }) => {
    const clickHandler = (categoryId: number) => {
        setCurrentCategory(categoryId)
    }
    return (
        <ul>
            {categories?.map(category =>
                <li key={category.id}>
                    <CategoryItem currentCategory={currentCategory} category={category} onClick={clickHandler} />
                </li>
            )}
        </ul>
    );
};

export default Categories;