import * as React from "react";
import { ApolloClient, ApolloProvider,HttpLink,InMemoryCache } from '@apollo/client';
import App from './test';

const httpLink = new HttpLink({
    uri: 'https://probah-env.herokuapp.com',
});
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)
