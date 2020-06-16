import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {PageNotFoundComponent} from './page-not-found.component';

const components: any[] = [
  PageNotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [...components],
  exports: [...components],
})
export class PageNotFoundModule { }
