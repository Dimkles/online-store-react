import React, { FC } from 'react';
import { ICategory } from '../../../../models/ICategory';

interface CategoryItemProps {
    category: ICategory
    currentCategory: number
    onClick: (categoryId: number) => void
}

const CategoryItem: FC<CategoryItemProps> = ({ category, currentCategory, onClick }) => {
    return (
        <button onClick={() => onClick(category.id)}>
            {category.name}
        </button>
    );
};

export default CategoryItem;