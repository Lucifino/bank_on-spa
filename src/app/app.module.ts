import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { GraphQLModule } from './graphql.module';
import { HttpClientModule} from '@angular/common/http';
import {ApiModule} from "./api/api.module";
import {LottieModule} from "ngx-lottie";
import player from "lottie-web";
import { NgxUiLoaderModule, NgxUiLoaderRouterModule} from "ngx-ui-loader";
import {SharedlModule} from "./shared/sharedl.module";

export function playerFactory(): any {
  return player;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    AppRoutingModule,
    LottieModule.forRoot({player: playerFactory}),
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    ApiModule.forRoot({rootUrl: environment.api_url}),
    SharedlModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
