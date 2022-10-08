import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';

import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { myServer } from '../services/mirage';
import { queryClient } from '../services/queryClient';
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SidebarDrawerProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </SidebarDrawerProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
