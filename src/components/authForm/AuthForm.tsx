import React, { FC, FormEvent, Fragment, useState } from 'react';
import { isCustomError } from '../../services/RTK/service';
import { useLoginMutation, useRegistrationMutation } from '../../services/RTK/UserService';
import MyError from '../myError/MyError';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import classes from './AuthForm.module.scss'

interface AuthFormProps {
    onSubmit?: any
}
const AuthForm: FC<AuthFormProps> = ({ onSubmit }) => {
    const [isRegistration, setIsRegistration] = useState(false)
    const [error, setError] = useState('')
    const [login] = useLoginMutation()
    const [registration] = useRegistrationMutation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        if (isRegistration) {
            try {
                const { token } = await registration({ email, password, name, address }).unwrap()
                localStorage.setItem('token', token)
                onSubmit()
            } catch (error) {
                console.log(error)
                if ((isCustomError(error))) {
                    setError(error.data.message)
                }
            }
        } else {
            try {
                const { token } = await login({ email, password }).unwrap()
                localStorage.setItem('token', token)
                onSubmit()
            } catch (error) {
                console.log(error)
                if ((isCustomError(error))) {
                    setError(error.data.message)
                }
            }
        }


    }
    return (
        <Fragment>
            {isRegistration
                ? <form onChange={() => setError('')} onSubmit={submitHandler} className={classes.form}>
                    <MyInput value={email} name='Email' placeholder='Введите email' setValue={setEmail} type='email' />
                    <MyInput value={name} name='Имя' placeholder='Введите имя' setValue={setName} type='text' />
                    <MyInput value={address} name='Адрес' placeholder='Введите адрес доставки' setValue={setAddress} type='text' />
                    <MyInput value={password} name='Пароль' placeholder='Введите пароль' setValue={setPassword} type='password' />
                    <MyButton type='submit'>Зарегистрироваться</MyButton>
                    {error && <MyError>{error}</MyError>}
                </form>
                : <form onChange={() => setError('')} onSubmit={submitHandler} className={classes.form}>
                    <MyInput value={email} name='Email' placeholder='Введите email' setValue={setEmail} type='email' />
                    <MyInput value={password} name='Пароль' placeholder='Введите пароль' setValue={setPassword} type='password' />
                    <MyButton type='submit'>Войти</MyButton>
                    {error && <MyError>{error}</MyError>}
                </form>
            }
            <span onClick={() => setIsRegistration((prev) => !prev)} className={classes.toggle}>{isRegistration ? 'Войти' : 'Зарегистрироваться'}</span>
        </Fragment>

    );
};

export default AuthForm;