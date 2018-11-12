import { NgModule } from '@angular/core';
import { NgxDeferredLoaderDirective } from './ngx-deferred-loader.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxDeferredLoaderDirective],
  imports: [
    CommonModule
  ],
  exports: [NgxDeferredLoaderDirective]
})
export class DeferredLoaderModule { }
