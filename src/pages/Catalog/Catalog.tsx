import { FC, useState } from 'react';
import Container from '../../components/UI/Container/Container';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import { ICategory } from '../../models/ICategory';
import { useFechAllCategoriesQuery } from '../../services/RTK/CategoriesService';
import { useFechAllProductsQuery } from '../../services/RTK/ProductsService';
import classes from './Catalog.module.scss'
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';

const Catalog: FC = () => {
    const [currentCategory, setCurrentCategory] = useState({} as ICategory)
    const { data } = useFechAllProductsQuery({ limit: 10, page: 1 })
    const { data: categories } = useFechAllCategoriesQuery('')
    return (
        <section className={classes.catalog}>
            <Container className={classes.content}>
                <Sidebar>
                    <Categories
                        currentCategory={currentCategory}
                        setCurrentCategory={setCurrentCategory}
                        categories={categories}
                    />
                </Sidebar>
                <Products products={data?.products} />
            </Container>
        </section>
    );
};

export default Catalog;