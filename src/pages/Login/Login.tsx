import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '../../components/UI/Box/Box';
import Container from '../../components/UI/Container/Container';
import MyButton from '../../components/UI/MyButton/MyButton';
import { useAppSelector } from '../../hooks/redux';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';

const Login = () => {
    const [isRegistration, setIsRegistration] = useState(false)
    const { isAuth } = useAppSelector(state => state.user)
    const navigate = useNavigate()
    const { state } = useLocation()
    useEffect(() => {
        if (isAuth) {
            navigate(state?.from ? state.from : '/', { replace: true })
        }
    })
    return (
        <div>
            <Container >
                <Box ai='center' jc='center' gap={10} fd='column'>
                    {isRegistration
                        ? <RegistrationForm />
                        : <LoginForm callback={() => navigate(state?.from ? state.from : '/', { replace: true })} />
                    }
                    <MyButton variant='text' type='button' onClick={() => setIsRegistration(prev => !prev)}>{isRegistration ? 'Вход' : 'Регистрация'}</MyButton>
                </Box>

            </Container>

        </div>
    );
};

export default Login;