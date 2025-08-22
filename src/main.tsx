import {  
  RouterProvider,
  createBrowserRouter,
 } from 'react-router-dom';

 import { GlobalStyle } from "../src/GlobalStyle";

import { createRoot } from 'react-dom/client'
import Home from './pages/Home';
import PageNotFound from './pages/NotFoundPage';
import Product from './pages/Product';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: ( <Home /> ),
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
])

createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

