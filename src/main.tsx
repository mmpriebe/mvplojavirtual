import {  
  RouterProvider,
  createBrowserRouter,
 } from 'react-router-dom';

 import { GlobalStyle } from "../src/GlobalStyle";

import { createRoot } from 'react-dom/client'

import Cookies from 'js-cookie';

import Home from './pages/Home';
import PageNotFound from './pages/NotFoundPage';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Invoices from './pages/Invoices';

const token = Cookies.get('token');

const arrayRoutes = [
  {
    path: '/',
    element: ( <Home /> ),
  },
  {
    path: '/login',
    element: (<Login/>)
  },
  {
    path: '/register',
    element: (<Register/>)
  },
  {
    path: '*',
    element: ( <PageNotFound /> ),
  },
  {
    path: '/product/:id',
    element: (<Product />)
  },
  {
    path: '/cart',
    element: ( <Cart /> ),
  },
]

if(token) {
  arrayRoutes.push(
    {
      path: '/invoices',
      element: ( <Invoices /> ),
    },
  )
}

const router = createBrowserRouter(arrayRoutes);

createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

