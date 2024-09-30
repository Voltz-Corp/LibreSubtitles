import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Toaster } from 'sonner';

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
