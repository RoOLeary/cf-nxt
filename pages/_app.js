import '../styles/globals.css'

import { GlobalContextProvider } from './../contexts/GlobalContext';

function CfNext({ Component, pageProps }) {
  return (
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    
  );
}

export default CfNext
