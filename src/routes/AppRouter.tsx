import React from 'react';
import { Route, Routes } from 'react-router';
import { useAppSelector } from '../hooks/redux';
import { adminRoutes, AuthRoutes, publicRoutes } from './routes'
const AppRouter = () => {
    const { isAuth, user } = useAppSelector(state => state.user)
    return (
        <Routes>
            {isAuth ?
                user.roles.some(e => e.value === 'ADMIN')
                    ? adminRoutes.map(route =>
                        <Route key={route.path} path={route.path} element={<route.element />} />
                    )
                    : AuthRoutes.map(route =>
                        <Route key={route.path} path={route.path} element={<route.element />} />
                    )

                : publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.element />} />
                )
            }
        </Routes>
    );
};

export default AppRouter;