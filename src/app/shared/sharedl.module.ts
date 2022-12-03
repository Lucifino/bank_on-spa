import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader/loader.component';
import {LottieModule} from "ngx-lottie";
import {NgxUiLoaderModule} from "ngx-ui-loader";
import player from 'lottie-web';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({player: playerFactory}),
    NgxUiLoaderModule
  ]
})
export class SharedlModule { }
