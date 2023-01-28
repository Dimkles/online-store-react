import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useLogoutMutation } from '../../services/RTK/UserService';
import LoginForm from '../LoginForm/LoginForm';
import MyModal from '../MyModal/MyModal';
import Box from '../UI/Box/Box';
import MyButton from '../UI/MyButton/MyButton';
import classes from './AuthWidget.module.scss'
const AuthWidget = () => {
    const { isAuth, user } = useAppSelector(state => state.user)
    const [isRegistration, setIsRegistration] = useState(false)
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
                <div>{user.name}</div>
                <MyButton onClick={logoutHandler} type='button'>Выйти</MyButton>
            </div>
            :
            <div className={classes.content}>
                <MyButton onClick={() => setModalActive(true)} type='button'>Войти</MyButton>
                <MyModal active={modalActive} setActive={setModalActive}>
                    <Box
                        gap={15}
                        fd='column'
                    >
                        {isRegistration
                            ? <LoginForm submitHandler={hideModal} />
                            : <LoginForm submitHandler={hideModal} />
                        }
                        <MyButton type='button' onClick={() => setIsRegistration(prev => !prev)}>{isRegistration ? 'Вход' : 'Регистрация'}</MyButton>
                    </Box>
                </MyModal>
            </div>


    );
};

export default AuthWidget;
