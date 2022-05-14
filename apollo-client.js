
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://cities.local.tnw.dev/api",
    cache: new InMemoryCache(),
});

export default client;