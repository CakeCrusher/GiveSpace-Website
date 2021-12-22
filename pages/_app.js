import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#c9042c',
    800: '#d95f78',
    700: '#fc839c',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    xl: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
  },
};

const theme = extendTheme({
  colors,
  components: {
    Text: {
      baseStyle: {
        fontFamily: 'Source Sans Pro',
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
