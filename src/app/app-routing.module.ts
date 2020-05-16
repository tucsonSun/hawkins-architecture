import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';



export const paths = {
    HOME: 'home',
    PORTFOLIO: 'portfolio',
    BOOKS: 'books',
}


const routes: Routes = [
    { path: paths.HOME, loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: paths.PORTFOLIO, loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule) },
    { path: paths.BOOKS, loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule) },

    //defaults
    { path: '', redirectTo: paths.HOME, pathMatch: 'full'}, // redirect to `first-component`
   // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
