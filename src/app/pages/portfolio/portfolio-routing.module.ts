import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from "./portfolio.component";
import {PortfolioSpecialtySchoolsComponent} from "./portfolio-specialty-schools/portfolio-specialty-schools.component";
import {PortfolioServiceFacilitiesComponent} from "./portfolio-service-facilities/portfolio-service-facilities.component";


export const paths = {
  PORTFOLIO: 'portfolio',
  CHILD_PORTFOLIO_SPECIALITY: 'specialty-schools',
  CHILD_PORTFOLIO_FACILITIES: 'service-facilities',
}


const routes: Routes = [
  // Parent component
  {
    path: '', component: PortfolioComponent,
  },
    // Child component
  {
    path: paths.CHILD_PORTFOLIO_SPECIALITY,
    component: PortfolioSpecialtySchoolsComponent
  },
  // Child component
  {
    path: paths.CHILD_PORTFOLIO_FACILITIES,
    component: PortfolioServiceFacilitiesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
