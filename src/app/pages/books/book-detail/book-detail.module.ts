import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { BookDrawerModule } from './../book-drawer/book-drawer.module';
import { BookDetailRoutingModule } from './book-detail-routing.module';
import { BookDetailComponent } from './book-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [BookDetailComponent],
  imports: [
    CommonModule,
    BookDetailRoutingModule,
    BookDrawerModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class BookDetailModule {}
