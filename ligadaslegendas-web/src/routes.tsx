import { createBrowserRouter } from 'react-router-dom';
import { Auth } from './pages/auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
]);
