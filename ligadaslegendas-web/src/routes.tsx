import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './pages/landing_page';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { SubtitleUpload } from './pages/subtitle_upload';
import { Movie } from './pages/movie';
import { Synchronize } from './pages/synchronize';
import { Subtitle } from './pages/subtitle';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/upload',
    element: <SubtitleUpload />,
  },
  {
    path: '/filme/:id',
    element: <Movie />,
  },
  {
    path: '/legenda/:id',
    element: <Subtitle />,
  },
  {
    path: '/sincronizar',
    element: <Synchronize />,
  },
]);
