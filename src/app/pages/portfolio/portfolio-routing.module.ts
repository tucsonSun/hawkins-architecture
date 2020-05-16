import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from "./portfolio.component";
import {PortfolioSpecialtySchoolsComponent} from "./portfolio-specialty-schools/portfolio-specialty-schools.component";
import {PortfolioServiceFacilitiesComponent} from "./portfolio-service-facilities/portfolio-service-facilities.component";
import {PortfolioTechnicalEducationComponent} from "./portfolio-technical-education/portfolio-technical-education.component";
import {PortfolioCommunityComponent} from "./portfolio-community/portfolio-community.component";


export const PORFILE_PATHS = {
  PORTFOLIO: 'portfolio',
  CHILD_PORTFOLIO_SPECIALITY: 'specialty-schools',
  CHILD_PORTFOLIO_TECH_EDUCATION: 'technical-education',
  CHILD_PORTFOLIO_FACILITIES: 'service-facilities',
  CHILD_PORTFOLIO_COMMUNITY: 'cultural-community',
}


const routes: Routes = [
  // Parent component
  {
    path: '', component: PortfolioComponent,
  },
    // Child component
  {
    path: PORFILE_PATHS.CHILD_PORTFOLIO_SPECIALITY,
    component: PortfolioSpecialtySchoolsComponent
  },
  // Child component
  {
    path: PORFILE_PATHS.CHILD_PORTFOLIO_TECH_EDUCATION,
    component: PortfolioTechnicalEducationComponent
  },
  // Child component
  {
    path: PORFILE_PATHS.CHILD_PORTFOLIO_FACILITIES,
    component: PortfolioServiceFacilitiesComponent
  },
  // Child component
  {
    path: PORFILE_PATHS.CHILD_PORTFOLIO_COMMUNITY,
    component: PortfolioCommunityComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
