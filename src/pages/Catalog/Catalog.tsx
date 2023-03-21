import { FC, useEffect, useState } from 'react';
import Container from '../../components/UI/Container/Container';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import { IProduct } from '../../models/IProduct';
import { useFechAllCategoriesQuery } from '../../services/RTK/CategoriesService';
import { useFechAllProductsQuery } from '../../services/RTK/ProductsService';
import classes from './Catalog.module.scss'
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';

const Catalog: FC = () => {
    const [currentCategory, setCurrentCategory] = useState(0)
    const [products, setProducts] = useState<IProduct[] | undefined>([])
    const { data: categories } = useFechAllCategoriesQuery('')
    const { data, refetch: refetchProducts } = useFechAllProductsQuery({ limit: 10, page: 1, categoryId: currentCategory })
    useEffect(() => {
        setProducts(data?.products)
    }, [data])
    useEffect(() => {
        refetchProducts()
        setProducts(data?.products)
    }, [currentCategory, data, refetchProducts])
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
                <Products products={products} />
            </Container>
        </section>
    );
};

export default Catalog;