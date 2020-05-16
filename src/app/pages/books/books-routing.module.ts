import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      { path: '', loadChildren: () => import('./book-list/book-list.module').then(m => m.BookListModule) },
      // { path: 'undefined', redirectTo: '' },
      // { path: 'new', redirectTo: 'undefined/edit' },
      // { path: ':bookId', loadChildren: () => import('./book-detail/book-detail.module').then(m => m.BookDetailModule) },
      // { path: ':bookId/edit', loadChildren: () => import('./book-edit/book-edit.module').then(m => m.BookEditModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
