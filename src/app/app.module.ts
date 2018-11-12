import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeferredLoaderModule } from 'projects/psmyrdek/ngx-deferred-loader/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DeferredLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
