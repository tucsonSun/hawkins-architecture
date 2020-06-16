import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    BookListRoutingModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatToolbarModule
  ]
})
export class BookListModule {}
