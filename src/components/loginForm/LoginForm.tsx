import React, { FC, FormEvent, useState } from 'react';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import classes from './LoginForm.module.scss'

interface LoginFormProps {
    onSubmit?: any
}
const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        onSubmit()
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <MyInput value={email} name='Email' placeholder='Введите email' setValue={setEmail} type='email' />
            <MyInput value={password} name='Пароль' placeholder='Введите пароль' setValue={setPassword} type='password' />
            <MyButton type='submit'>Войти</MyButton>
        </form>
    );
};

export default LoginForm;