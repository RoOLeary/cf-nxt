import { ApolloClient, InMemoryCache } from "@apollo/client";
const token = 'xmhW_1_0oLV29dcV7aQsNb_LdygNi5s6';
const client = new ApolloClient({
    
    uri: 'https://cities.thenextweb.com/api',
    ssrMode: typeof window === "undefined",
    cache: new InMemoryCache(),
    credentials: 'same-origin',
    fetchOptions:{
      mode: 'no-cors',
      method:'POST'
    },
    headers: {
      "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : true
    } 
});

export default client;