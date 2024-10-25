import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Toaster } from 'sonner';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | LibreSubtitles" />
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <Toaster
              richColors
              position="top-right"
              toastOptions={{
                style: {
                  padding: '1.6rem',
                  fontSize: '1.6rem',
                  fontWeight: '700',
                },
                duration: 3000,
                closeButton: true,
              }}
            />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}
