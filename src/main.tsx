import {  
  RouterProvider,
  createBrowserRouter,
 } from 'react-router-dom';

 import { GlobalStyle } from "../src/GlobalStyle";

import { createRoot } from 'react-dom/client'
import Home from './pages/Home';
import PageNotFound from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: ( <Home /> ),
  },
  {
    path: '*',
    element: ( <PageNotFound /> ),
  }
])

createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

