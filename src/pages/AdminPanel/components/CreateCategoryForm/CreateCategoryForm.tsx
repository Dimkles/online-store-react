import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import Box from '../../../../components/UI/Box/Box';
import MyTextInput from '../../../../components/UI/MyTextInput/MyTextInput';
import MyButton from '../../../../components/UI/MyButton/MyButton';
import MyError from '../../../../components/UI/MyError/MyError';
import { isCustomError } from '../../../../services/RTK/service';
import { useCreateCategoryMutation } from '../../../../services/RTK/CategoriesService';
const CreateCategoryForm = () => {
    const [createCategory] = useCreateCategoryMutation()
    const [error, setError] = useState('')
    return (
        <Formik
            initialValues={{
                name: 'asdasdasda'
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Введите не менее двух символов')
            })}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const category = await createCategory(values).unwrap()
                    console.log(category)
                } catch (e) {
                    if (isCustomError(e)) {
                        setError(e.data.message)
                    }
                }


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
                    <MyButton type='submit'>Добваить категорию</MyButton>
                    {error && <MyError>{error}</MyError>}
                </Box>
            </Form>
        </Formik>
    );
};

export default CreateCategoryForm;
