import * as React from "react";
import { ApolloClient, ApolloProvider,HttpLink,InMemoryCache } from '@apollo/client';
import App from './test';
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
    uri: 'https://probah-env.herokuapp.com',
});
const authLink = setContext(() => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)
