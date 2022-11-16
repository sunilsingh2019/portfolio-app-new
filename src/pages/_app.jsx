import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'next-themes';
import client from '../apollo/client';
import AppProvider from '../context/AppContext';
import '../index.scss';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider  client={client}>
      <ThemeProvider defaultTheme='light'>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </ApolloProvider>
    
  )
}

export default MyApp
