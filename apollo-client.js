import { ApolloClient, InMemoryCache } from "@apollo/client";
const token = 'xmhW_1_0oLV29dcV7aQsNb_LdygNi5s6';
const client = new ApolloClient({
    
    uri: 'https://cities.local.tnw.dev/api/',
    ssrMode: typeof window === "undefined",
    cache: new InMemoryCache(),
    credentials: 'same-origin',
    fetchOptions:{
      mode: 'no-cors',
      method:'POST'
    },
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    
    } 
});

export default client;