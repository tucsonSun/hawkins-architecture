import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { PortfolioSpecialtySchoolsComponent } from './pages/portfolio/components/portfolio-specialty-schools/portfolio-specialty-schools.component';
// import { PortfolioHigherEducationComponent } from './pages/portfolio/components/portfolio-higher-education/portfolio-higher-education.component';
// import { PortfolioSupportFacilitesComponent } from './pages/portfolio/components/portfolio-support-facilites/portfolio-support-facilites.component';
// import { PortfolioCommunityComponent } from './pages/portfolio/components/portfolio-community/portfolio-community.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {DirectivesModule} from "./directives/directives.module";
import {ComponentsModule} from "./components/components.module";
import {MatSliderModule} from "@angular/material/slider";
import {SidenavModule} from "./pages/sidenav/sidenav.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule, // This is a weird but for hammerjs I think
    SidenavModule,
    DirectivesModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
