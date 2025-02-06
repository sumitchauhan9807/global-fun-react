import { ApolloClient, InMemoryCache } from '@apollo/client';
const PRODUCTION = true
const url = PRODUCTION ? 'https://sfu.globalfun.cam/graphql' : 'http://localhost:4001/graphql'
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

export default client