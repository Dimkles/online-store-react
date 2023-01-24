import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useLogoutMutation } from '../../services/RTK/UserService';
import AuthForm from '../authForm/AuthForm';
import MyModal from '../MyModal/MyModal';
import MyButton from '../UI/MyButton/MyButton';
import classes from './AuthWidget.module.scss'
const AuthWidget = () => {
    const { isAuth, user } = useAppSelector(state => state.user)
    const [modalActive, setModalActive] = useState(false)
    const [logout] = useLogoutMutation()
    const logoutHandler = async () => {
        await logout('').unwrap()
        localStorage.removeItem('token')
    }
    const hideModal = () => {
        setModalActive(false)
    }
    return (
        isAuth
            ?
            <div className={classes.content}>
                <div>{user.email}</div>
                <MyButton onClick={logoutHandler} type='button'>Выйти</MyButton>
            </div>
            :
            <div className={classes.content}>
                <MyButton onClick={() => setModalActive(true)} type='button'>Войти</MyButton>
                <MyModal active={modalActive} setActive={setModalActive}>
                    <AuthForm onSubmit={hideModal} />
                </MyModal>
            </div>


    );
};

export default AuthWidget;
