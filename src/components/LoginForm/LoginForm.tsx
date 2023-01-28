import { Form, Formik } from 'formik';
import React, { FC, useState } from 'react';
import * as Yup from 'yup';
import { isCustomError } from '../../services/RTK/service';
import { useLoginMutation, useRegistrationMutation } from '../../services/RTK/UserService';
import MyButton from '../UI/MyButton/MyButton';
import MyTextInput from '../UI/MyTextInput/MyTextInput';


interface LoginFormProps {
    submitHandler: () => void
}


const LoginForm: FC<LoginFormProps> = ({ submitHandler }) => {
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
                setError('')
                try {
                    const { token } = await login(values).unwrap()
                    localStorage.setItem('token', token)
                    submitHandler()
                    setSubmitting(false);
                } catch (e) {
                    if (isCustomError(e)) {
                        setError(e.data.message)
                    }
                }
            }}

        >
            <Form>
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
                {error && <span>{error}</span>}
            </Form>
        </Formik>
    );
};

export default LoginForm;