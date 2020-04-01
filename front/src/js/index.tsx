import React from 'react'
import ReactDOM from 'react-dom'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'

import Books from './Books/index'

const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql/'
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink
})


ReactDOM.render(
    <ApolloProvider client={client}>
        <Books />
    </ApolloProvider>,
    document.getElementById('root')
)