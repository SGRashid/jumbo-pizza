import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
// import { myOwnLazyLoad } from './helpers/MyOwnLazyLoad';
import { Menu } from './components/pages/Menu/Menu';
import { Cart } from './components/pages/Cart/Cart';
import { Error } from './components/pages/Error/Error';
// import { Layout } from './components/Layout/Lauout';
// import { Product } from './components/pages/Product/Product';
const Product = lazy(() => import('./components/pages/Product/Product'));
const Layout = lazy(() => import('./components/Layout/Lauout').then(m => ({ default: m.Layout })));
// const Cart = myOwnLazyLoad('./components/pages/Cart/Cart', 'Cart');

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Menu /> },
            { path: '/cart', element: <Cart /> },
            { path: '*', element: <Error /> },
            { path: '/menu/:id', element: <Product /> }
        ]
    },
]);