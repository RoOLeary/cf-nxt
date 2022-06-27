import { ApolloClient, InMemoryCache } from "@apollo/client";
const token = '8YjnkaiY0aJ6rJQjwbT2wawiJPAC2PGE';
const client = new ApolloClient({
    
    uri: 'https://cities.local.tnw.dev/api',
    ssrMode: typeof window === "undefined",
    cache: new InMemoryCache(),
    credentials: 'same-origin',
    fetchOptions:{
      mode: 'no-cors',
      method:'POST'
    },
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : true
    } 
});

export default client;