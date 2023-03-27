import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Root from './routes/root';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const router = createHashRouter([
  //A: compatible desplegar en coso.com/micarpeta/ ej gitpages
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'home',
    element: <HomePage />,
  },
  {
    path: '*',
    element: (
      <div>
        No encontre esa url, desplegaste en una subcarpeta? esta bien
        configurado ReactRouter? Mira main.jsx
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
export default router;
