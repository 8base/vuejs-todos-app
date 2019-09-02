import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { onError } from "apollo-link-error";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: "https://api.8base.com/cjz1n2qrk00f901jt2utcc3m0"
});

// Error Handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

/**
 * Here we need to collect the authentication token
 * from the auth module to add required bearer token
 * to the headers.
 */
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

//Create the apollo client
export default new ApolloClient({
  // Provide the URL to the API server.
  link: errorLink.concat(authLink.concat(httpLink)),
  // Using a cache for blazingly fast subsequent queries.
  cache: new InMemoryCache(),
  connectToDevTools: true
});
