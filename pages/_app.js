import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { GlobalContextProvider } from './../contexts/GlobalContext';

function CfNext({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </ApolloProvider>
  );
}

export default CfNext
