import { ApolloClient, InMemoryCache } from '@apollo/client';
import { FANOUT_SERVER_ADDRESS } from './globalEnv';

export const apolloClient = new ApolloClient({
    uri: FANOUT_SERVER_ADDRESS,
    cache: new InMemoryCache(),
  });