import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';



export const paths = {
    HOME: 'home',
    PORTFOLIO: 'portfolio',
    BOOKS: 'books',
    ROUTE404: '404',
};


const routes: Routes = [
    { path: paths.HOME, loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: `${paths.HOME}/:sectionId`, loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: paths.PORTFOLIO, loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule) },

    // defaults
    { path: '', redirectTo: paths.HOME, pathMatch: 'full'},    // redirect to `first-component`
    { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
