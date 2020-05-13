import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";


export const paths = {
    HOME: 'home',
    PORTFOLIO: 'portfolio',
}


const routes: Routes = [
    { path: paths.HOME, component: HomeComponent},
    { path: paths.PORTFOLIO, component: PortfolioComponent},

    //defaults
    { path: '', redirectTo: paths.HOME, pathMatch: 'full'}, // redirect to `first-component`
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
