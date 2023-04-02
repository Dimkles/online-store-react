import React, { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

interface RequireAuthProps {
    children: any
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const location = useLocation()
    const { isAuth } = useAppSelector(state => state.user)
    if (!isAuth) {
        return <Navigate to={'/login'} state={{ from: location.pathname }} />
    }
    return children
};

export default RequireAuth;