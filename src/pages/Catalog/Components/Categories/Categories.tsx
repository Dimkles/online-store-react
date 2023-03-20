import React, { Dispatch, FC, SetStateAction } from 'react';
import MyButton from '../../../../components/UI/MyButton/MyButton';
import { ICategory } from '../../../../models/ICategory';

interface CategoriesProps {
    categories: ICategory[] | undefined
    currentCategory: number
    setCurrentCategory: Dispatch<SetStateAction<number>>
}

const Categories: FC<CategoriesProps> = ({ categories, currentCategory, setCurrentCategory }) => {
    const clickHandler = (category: ICategory) => {
        setCurrentCategory(category.id)
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