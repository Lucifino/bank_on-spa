import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {environment} from "../environments/environment";
// // @ts-ignore
// import extractFiles from 'extract-files/extractFiles.mjs';
// // @ts-ignore
// import isExtractableFile from 'extract-files/isExtractableFile.mjs';
import {extractFiles, isExtractableFile} from 'extract-files';


const uri = environment.graphql_url; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri, extractFiles}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  imports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
