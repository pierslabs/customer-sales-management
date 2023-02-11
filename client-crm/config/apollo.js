import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4005/',
  fetch,
});

const authLink = setContext((_, { headers }) => {
  // leer storage
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
