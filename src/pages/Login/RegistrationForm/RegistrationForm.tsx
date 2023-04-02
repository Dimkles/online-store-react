import { Form, Formik } from 'formik';
import React, { FC, useState } from 'react';
import * as Yup from 'yup';
import Box from '../../../components/UI/Box/Box';
import MyButton from '../../../components/UI/MyButton/MyButton';
import MyError from '../../../components/UI/MyError/MyError';
import MyTextInput from '../../../components/UI/MyTextInput/MyTextInput';
import { isCustomError } from '../../../services/RTK/service';
import { useRegistrationMutation } from '../../../services/RTK/UserService';

interface RegistrationFormProps {
}

const RegistrationForm: FC<RegistrationFormProps> = () => {
    const [registration] = useRegistrationMutation()
    const [error, setError] = useState('')
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                name: '',
                address: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Некорректный email')
                    .required('Поле обязательно'),
                password: Yup.string()
                    .required('Поле обязательно'),
                name: Yup.string()
                    .min(2, 'Не менее 2 символов')
                    .max(16, 'Не более 16 символов')
                    .required('Поле обязательно'),
                address: Yup.string()
                    .min(2, 'Не менее 5 символов')
                    .max(16, 'Не более 70 символов')
                    .required('Поле обязательно'),
            })}
            onSubmit={async (values, { setSubmitting }) => {

                try {
                    const { token } = await registration(values).unwrap()
                    localStorage.setItem('token', token)
                    setSubmitting(false);
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
                        label="Имя"
                        name="name"
                        id='name'
                        type="text"
                        placeholder="Дмитрий"
                    />
                    <MyTextInput
                        label="Адрес"
                        name="address"
                        id='address'
                        type="address"
                        placeholder="Челябинск, Ленина 45-28"
                    />
                    <MyTextInput
                        label="Email"
                        name="email"
                        id='email'
                        type="email"
                        placeholder="dimkless@mail.ru"
                    />
                    <MyTextInput
                        label="Пароль"
                        name="password"
                        id='password'
                        type="password"
                        placeholder="********"
                    />
                    <MyButton type='submit'>Зарегистрироваться</MyButton>
                    {error && <MyError>{error}</MyError>}
                </Box>
            </Form>
        </Formik>
    );
};

export default RegistrationForm;