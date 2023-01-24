import AdminPanel from "../pages/AdminPanel/AdminPanel";
import Catalog from "../pages/Catalog/Catalog";
import Home from "../pages/Home/Home";
import ProductPage from "../pages/ProductPage/ProductPage";

export const publicRoutes = [
    { path: '/', element: Home },
    { path: '/catalog', element: Catalog },
    { path: '/catalog/:id', element: ProductPage },
]
export const adminRoutes = [
    { path: '/', element: Home },
    { path: '/catalog', element: Catalog },
    { path: '/catalog/:id', element: ProductPage },
    { path: '/admin', element: AdminPanel },
]
export const AuthRoutes = [
    { path: '/', element: Home },
    { path: '/catalog', element: Catalog },
    { path: '/catalog/:id', element: ProductPage }
]