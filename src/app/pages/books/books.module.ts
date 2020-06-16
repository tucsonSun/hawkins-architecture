import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    RouterModule,
    BooksRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class BooksModule {}
