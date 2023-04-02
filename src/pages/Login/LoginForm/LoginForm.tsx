import { Form, Formik } from 'formik';
import React, { FC, useState } from 'react';
import * as Yup from 'yup';
import Box from '../../../components/UI/Box/Box';
import MyButton from '../../../components/UI/MyButton/MyButton';
import MyError from '../../../components/UI/MyError/MyError';
import MyTextInput from '../../../components/UI/MyTextInput/MyTextInput';
import { isCustomError } from '../../../services/RTK/service';
import { useLoginMutation } from '../../../services/RTK/UserService';

interface LoginFormProps {
    callback: () => void
}

const LoginForm: FC<LoginFormProps> = ({ callback }) => {
    const [login] = useLoginMutation()
    const [error, setError] = useState('')
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Некорректный email')
                    .required('Поле обязательно'),
                password: Yup.string()
                    .required('Поле обязательно'),
            })}
            onSubmit={async (values, { setSubmitting }) => {

                try {
                    const { token } = await login(values).unwrap()
                    localStorage.setItem('token', token)
                    callback()
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
                    <MyButton type='submit'>Войти</MyButton>
                    {error && <MyError>{error}</MyError>}
                </Box>
            </Form>
        </Formik>
    );
};

export default LoginForm;