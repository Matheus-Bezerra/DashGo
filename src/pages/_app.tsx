import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { theme } from '../../styles/theme';
// @ts-ignore
import { SidebarDrawerProvider } from '../../contexts/SideBarDrawerContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
