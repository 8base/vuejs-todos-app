import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

/**
 * Here we need to collect the authentication token
 * from the auth module to add required bearer token
 * to the headers.
 */
export default new ApolloClient({
  // Provide the URL to the API server.
  link: new HttpLink({ uri: "http://localhost:3000/graphql" }),
  // Using a cache for blazingly
  // fast subsequent queries.
  cache: new InMemoryCache()
});
