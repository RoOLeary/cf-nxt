import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://cities.thenextweb.com/',
    cache: new InMemoryCache(),
    ssrMode: true,
    assumeImmutableResults: true,
    // useGETForQueries: true,
    // headers: {
    //     Authorization: `Bearer xmhW_1_0oLV29dcV7aQsNb_LdygNi5s6`,
    // },
});

export default client;