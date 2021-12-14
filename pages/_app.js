import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#c9042c',
    800: '#d95f78',
    700: '#fc839c'
  }
}

const theme = extendTheme({colors})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
