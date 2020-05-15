import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";


export const paths = {
    HOME: 'home',
    PORTFOLIO: 'portfolio',
}


const routes: Routes = [
    { path: paths.HOME, loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: paths.PORTFOLIO, loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule) },

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
