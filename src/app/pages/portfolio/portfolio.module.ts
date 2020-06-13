import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortfolioRoutingModule } from "./portfolio-routing.module";
import {AngularMaterialModule} from "../../modules/angular-material.module";
import {DirectivesModule} from "../../directives/directives.module";
import {PortfolioCommunityComponent} from "./Depracated/portfolio-community/portfolio-community.component";
import {PortfolioServiceFacilitiesComponent} from "./Depracated/portfolio-service-facilities/portfolio-service-facilities.component";
import {PortfolioSpecialtySchoolsComponent} from "./Depracated/portfolio-specialty-schools/portfolio-specialty-schools.component";
import {PortfolioTechnicalEducationComponent} from "./Depracated/portfolio-technical-education/portfolio-technical-education.component";
import { PhoenixDaySchoolForTheDeafComponent } from './specialty-schools/phoenix-day-school-for-the-deaf/phoenix-day-school-for-the-deaf.component';
import {LaveenElementarySchoolComponent} from "./specialty-schools/laveen-elementary-school/laveen-elementary-school.component";
import { WestMECCentralCampusComponent } from './career-tech-education/west-meccentral-campus/west-meccentral-campus.component';
import { WestMECNorthwestCampusComponent } from './career-tech-education/west-mecnorthwest-campus/west-mecnorthwest-campus.component';
import { WestMECSouthwestCampusComponent } from './career-tech-education/west-mecsouthwest-campus/west-mecsouthwest-campus.component';
import { BuckeyeElementrayMaintenanceComponent } from './support-service-facilites/buckeye-elementray-maintenance/buckeye-elementray-maintenance.component';
import { DistractOfficeMaintenanceComponent } from './support-service-facilites/distract-office-maintenance/distract-office-maintenance.component';
import { MadisonElementarySchoolDistractComponent } from './support-service-facilites/madison-elementary-school-distract/madison-elementary-school-distract.component';
import { TohonoOodhamMuseumCulturalCenterComponent } from './cultural-community/tohono-oodham-museum-cultural-center/tohono-oodham-museum-cultural-center.component';


const components: any[] = [
  PortfolioCommunityComponent,
  PortfolioServiceFacilitiesComponent,
  PortfolioSpecialtySchoolsComponent,
  PortfolioTechnicalEducationComponent,

  PhoenixDaySchoolForTheDeafComponent,
  LaveenElementarySchoolComponent,
  WestMECCentralCampusComponent,
  WestMECNorthwestCampusComponent,
  WestMECSouthwestCampusComponent,
  BuckeyeElementrayMaintenanceComponent,
  DistractOfficeMaintenanceComponent,
  MadisonElementarySchoolDistractComponent,
  TohonoOodhamMuseumCulturalCenterComponent
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
