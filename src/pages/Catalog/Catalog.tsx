import React, { FC } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Container from '../../components/UI/Container/Container';
import classes from './Catalog.module.scss'

const Catalog: FC = () => {
    const products = [
        {
            id: 1,
            name: 'Растение',
            description: 'React is all about composition, and while we’ve cut down on a lot of the prop-drilling, we’re still repeating ourselves with a label, <Field>, and <ErrorMessage> for each of our inputs. We can do better with an abstraction! With Formik, you can and should build reusable input primitive components that you ',
            price: 1220,
            quantity: 4,
            imagejpg: 'https://gruenstadt.ru/wp-content/uploads/0/f/a/0fad4930811c8f891333323552540b41.jpeg',
            categories: [
                { name: 'трава', id: 1 },
                { name: 'травrа]', id: 1 },
            ]

        },
        {
            id: 1,
            name: 'Растение',
            description: 'опиисане',
            price: 1220,
            quantity: 4,
            imagejpg: 'https://gruenstadt.ru/wp-content/uploads/0/f/a/0fad4930811c8f891333323552540b41.jpeg',
            categories: [
                { name: 'трава', id: 1 },
                { name: 'травrа]', id: 1 },
            ]

        },
        {
            id: 1,
            name: 'Растение',
            description: 'опиисане',
            price: 1220,
            quantity: 4,
            imagejpg: 'https://gruenstadt.ru/wp-content/uploads/0/f/a/0fad4930811c8f891333323552540b41.jpeg',
            categories: [
                { name: 'трава', id: 1 },
                { name: 'травrа]', id: 1 },
            ]

        }
    ]
    return (
        <section className={classes.catalog}>
            <Container>
                <div className={classes.content}>
                    {products.map(product =>
                        <ProductCard product={product} />
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Catalog;