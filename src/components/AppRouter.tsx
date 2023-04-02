import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import { useAppSelector } from '../hooks/redux';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import Catalog from '../pages/Catalog/Catalog';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import ProductPage from '../pages/ProductPage/ProductPage';
import RequireAuth from '../hoc/RequireAuth';
const AppRouter = () => {
    const { isAuth, user } = useAppSelector(state => state.user)
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='catalog' element={<Catalog />} />
                <Route path='catalog/:id' element={<ProductPage />} />
                <Route path='admin' element={
                    <RequireAuth>
                        <AdminPanel />
                    </RequireAuth>
                } />
                <Route path='login' element={<Login />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;