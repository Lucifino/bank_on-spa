import {NgModule} from '@angular/core';
import { APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, DefaultOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {environment} from "../environments/environment";
import {onError} from "@apollo/client/link/error";
// // @ts-ignore
// import extractFiles from 'extract-files/extractFiles.mjs';
// // @ts-ignore
// import isExtractableFile from 'extract-files/isExtractableFile.mjs';


const uri = environment.graphql_url; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {

    }
    if (networkError) {
    }
  });
  const link = ApolloLink.from([errorLink, httpLink.create({uri})]);

  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    mutate: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    }
  };


  return {
    // link: httpLink.create({uri}),
    link,
    cache: new InMemoryCache({
      addTypename: false
    }),
    connectToDevTools: true,
    defaultOptions,
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
