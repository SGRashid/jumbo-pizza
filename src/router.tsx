import { createBrowserRouter } from 'react-router-dom';
import { Menu } from './components/pages/Menu/Menu';
import { Cart } from './components/pages/Cart/Cart';
import { Error } from './components/pages/Error/Error';
import { Layout } from './components/Layout/Lauout';

export const router = createBrowserRouter([
    {   
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Menu /> },
            { path: '/cart', element: <Cart /> },
            { path: '*', element: <Error />},
        ]
    },
]);