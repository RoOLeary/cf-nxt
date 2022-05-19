
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://thenextweb.com/dublin/api",
    cache: new InMemoryCache(),
});

export default client;