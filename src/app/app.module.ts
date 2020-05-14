import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AngularMaterialModule } from "./modules/angular-material.module";
import { ServicesComponent } from './pages/home/components/services/services.component';
import { ContactMeComponent } from './pages/home/components/contact-me/contact-me.component';
import { StrengthsComponent } from './pages/home/components/strengths/strengths.component';
import {ProfileComponent} from "./pages/home/components/profile/profile.component";
import { EgrScrollToDirective } from './directives/egr-scroll-to.directive';
import { EgrStickyMenuDirective } from './directives/egr-sticky-menu.directive';
// import { PortfolioSpecialtySchoolsComponent } from './pages/portfolio/components/portfolio-specialty-schools/portfolio-specialty-schools.component';
// import { PortfolioHigherEducationComponent } from './pages/portfolio/components/portfolio-higher-education/portfolio-higher-education.component';
// import { PortfolioSupportFacilitesComponent } from './pages/portfolio/components/portfolio-support-facilites/portfolio-support-facilites.component';
// import { PortfolioCommunityComponent } from './pages/portfolio/components/portfolio-community/portfolio-community.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {DirectivesModule} from "./directives/directives.module";
import {ComponentsModule} from "./components/components.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    PortfolioComponent,
    ServicesComponent,
    ContactMeComponent,
    StrengthsComponent,
    // PortfolioSpecialtySchoolsComponent,
    // PortfolioHigherEducationComponent,
    // PortfolioSupportFacilitesComponent,
    // PortfolioCommunityComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    DirectivesModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
