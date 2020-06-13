import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortfolioRoutingModule } from "./portfolio-routing.module";
import {AngularMaterialModule} from "../../modules/angular-material.module";
import {DirectivesModule} from "../../directives/directives.module";
import {PortfolioCommunityComponent} from "./portfolio-community/portfolio-community.component";
import {PortfolioServiceFacilitiesComponent} from "./portfolio-service-facilities/portfolio-service-facilities.component";
import {PortfolioSpecialtySchoolsComponent} from "./portfolio-specialty-schools/portfolio-specialty-schools.component";
import {PortfolioTechnicalEducationComponent} from "./portfolio-technical-education/portfolio-technical-education.component";
import { PhoenixDaySchoolForTheDeafComponent } from './specialty-schools/phoenix-day-school-for-the-deaf/phoenix-day-school-for-the-deaf.component';
import { LaveenElementarySchoolComponent } from './specialty-school/laveen-elementary-school/laveen-elementary-school.component';


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
  declarations: [...components, PhoenixDaySchoolForTheDeafComponent, LaveenElementarySchoolComponent],
  exports: [...components],
})
export class PortfolioModule {}
