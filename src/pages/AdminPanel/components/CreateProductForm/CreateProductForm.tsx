import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import Box from '../../../../components/UI/Box/Box';
import MyTextInput from '../../../../components/UI/MyTextInput/MyTextInput';
import MyButton from '../../../../components/UI/MyButton/MyButton';
import MyError from '../../../../components/UI/MyError/MyError';
import MySelect from '../../../../components/UI/MySelect/MySelect';
import MyFileInput from '../../../../components/UI/MyFileInput/MyFileInput';
import { useCreateProductMutation } from '../../../../services/RTK/ProductsService';
const CreateProductForm = () => {
    const [createProduct] = useCreateProductMutation()
    const [error, setError] = useState('')
    return (
        <Formik
            initialValues={{
                name: 'asdasdasda',
                description: 'asdasdasdasd',
                price: '2',
                quantity: '2',
                image: {} as File,
                categories: [1, 2]

            }}
            validationSchema={Yup.object({
            })}
            onSubmit={async ({ categories, description, image, name, price, quantity }, { setSubmitting }) => {
                const body = new FormData()
                body.append('image', image)
                body.append('description', description)
                body.append('name', name)
                body.append('price', price)
                body.append('quantity', quantity)
                body.append('categories', categories.toString())
                const product = await createProduct(body).unwrap()
                console.log(product)
            }}
        >
            <Form onChange={() => setError('')}>
                <Box
                    gap={15}
                    fd='column'
                >
                    <MyTextInput
                        label="Название"
                        name="name"
                        id='name'
                        type="text"
                        placeholder="Драцена"
                    />
                    <MyTextInput
                        label="Название"
                        name="price"
                        id='price'
                        type="text"
                        placeholder="Драцена"
                    />
                    <MyTextInput
                        label="Название"
                        name="quantity"
                        id='quantity'
                        type="text"
                        placeholder="Драцена"
                    />
                    <MySelect multiple={true} id='1' label="Job Type" name="categories">
                        <option value="">Select a job type</option>
                        <option value="1">Designer</option>
                        <option value="2">Developer</option>
                        <option value="3">Product Manager</option>
                        <option value="4">Other</option>
                    </MySelect>
                    <MyFileInput
                        label="Название"
                        name="image"
                        id='image'
                    />
                    <MyButton type='submit'>Добваить товар</MyButton>
                    {error && <MyError>{error}</MyError>}
                </Box>
            </Form>
        </Formik>
    );
};

export default CreateProductForm;