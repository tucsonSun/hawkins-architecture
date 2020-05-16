import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { BookTreeComponent } from './book-tree.component';
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [BookTreeComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  exports: [BookTreeComponent]
})
export class BookTreeModule {}
