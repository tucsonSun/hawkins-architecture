import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortfolioRoutingModule } from "./portfolio-routing.module";
import {AngularMaterialModule} from "../../modules/angular-material.module";
import {DirectivesModule} from "../../directives/directives.module";
import {PortfolioCommunityComponent} from "./portfolio-community/portfolio-community.component";
import {PortfolioServiceFacilitiesComponent} from "./portfolio-service-facilities/portfolio-service-facilities.component";
import {PortfolioSpecialtySchoolsComponent} from "./portfolio-specialty-schools/portfolio-specialty-schools.component";
import {PortfolioTechnicalEducationComponent} from "./portfolio-technical-education/portfolio-technical-education.component";


const components: any[] = [
  PortfolioCommunityComponent,
  PortfolioServiceFacilitiesComponent,
  PortfolioSpecialtySchoolsComponent,
  PortfolioTechnicalEducationComponent,
];

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    DirectivesModule,

    AngularMaterialModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class PortfolioModule {}
