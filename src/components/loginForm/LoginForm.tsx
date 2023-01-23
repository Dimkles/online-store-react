import React, { useState } from 'react';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import classes from './LoginForm.module.scss'
const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <form className={classes.form}>
            <MyInput value={email} name='Email' placeholder='Введите email' setValue={setEmail} type='email' />
            <MyInput value={password} name='Пароль' placeholder='Введите пароль' setValue={setPassword} type='password' />
            <MyButton type='submit'>Войти</MyButton>
        </form>
    );
};

export default LoginForm;