import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioSpecialtySchoolsComponent} from './Depracated/portfolio-specialty-schools/portfolio-specialty-schools.component';
import {PortfolioServiceFacilitiesComponent} from './Depracated/portfolio-service-facilities/portfolio-service-facilities.component';
import {PortfolioTechnicalEducationComponent} from './Depracated/portfolio-technical-education/portfolio-technical-education.component';
import {PortfolioCommunityComponent} from './Depracated/portfolio-community/portfolio-community.component';
import {TohonoOodhamMuseumCulturalCenterComponent} from './cultural-community/tohono-oodham-museum-cultural-center/tohono-oodham-museum-cultural-center.component';
import {LaveenElementarySchoolComponent} from './specialty-schools/laveen-elementary-school/laveen-elementary-school.component';
import {PhoenixDaySchoolForTheDeafComponent} from './specialty-schools/phoenix-day-school-for-the-deaf/phoenix-day-school-for-the-deaf.component';
import {WestMECCentralCampusComponent} from './career-tech-education/west-meccentral-campus/west-meccentral-campus.component';
import {WestMECNorthwestCampusComponent} from './career-tech-education/west-mecnorthwest-campus/west-mecnorthwest-campus.component';
import {WestMECSouthwestCampusComponent} from './career-tech-education/west-mecsouthwest-campus/west-mecsouthwest-campus.component';
import {BuckeyeElementaryMaintenanceComponent} from './support-service-facilities/buckeye-elementary-maintenance/buckeye-elementary-maintenance.component';
import {DistractOfficeMaintenanceComponent} from './support-service-facilities/distract-office-maintenance/distract-office-maintenance.component';
import {MadisonElementarySchoolDistractComponent} from './support-service-facilities/madison-elementary-school-distract/madison-elementary-school-distract.component';


export const PORFILE_PATHS = {
  PORTFOLIO: 'portfolio',
  // CHILD_PORTFOLIO_SPECIALITY: 'specialty-schools',
  // CHILD_PORTFOLIO_TECH_EDUCATION: 'technical-education',
  // CHILD_PORTFOLIO_FACILITIES: 'service-facilities',
  // CHILD_PORTFOLIO_COMMUNITY: 'cultural-community',


  CHILD_COMMUNITY_TOHONO: 'tohono-ooham-museum',
  CHILD_SPECIALTY_SCHOOLS_LAVEEN: 'laveen-elementary-for-the-deaf',
  CHILD_SPECIALTY_SCHOOLS_PHOENIX: 'phoenix-day-school-for-the-deaf',
  CHILD_CAREER_TECH_EDUCATION_WMC: 'west-mec-central-campus',
  CHILD_CAREER_TECH_EDUCATION_WMNW: 'west-mec-northwest-campus',
  CHILD_CAREER_TECH_EDUCATION_WMSW: 'west-mec-southwest-campus',
  CHILD_SUPPORT_SERVICE_FACILITIES_BEM: 'buckeye-elementary-maintenance',
  CHILD_SUPPORT_SERVICE_FACILITIES_DOM: 'distract-office',
  CHILD_SUPPORT_SERVICE_FACILITIES_MESD: 'madison-elementary-school',
};


// todo: THIS ROUTE SETup FOR CHILDREN IS NOT RIGHT BUT GOT TI TO WORK FOR NOW....
const routes: Routes = [
  {
    path: 'undefined',
    redirectTo: ''
  },
  // {
  //   path: PORFILE_PATHS.CHILD_PORTFOLIO_SPECIALITY,
  //   component: PortfolioSpecialtySchoolsComponent
  // },
  // {
  //   path: PORFILE_PATHS.CHILD_PORTFOLIO_TECH_EDUCATION,
  //   component: PortfolioTechnicalEducationComponent
  // },
  // {
  //   path: PORFILE_PATHS.CHILD_PORTFOLIO_FACILITIES,
  //   component: PortfolioServiceFacilitiesComponent
  // },



  {
    path:  PORFILE_PATHS.CHILD_SUPPORT_SERVICE_FACILITIES_BEM,
    component:  BuckeyeElementaryMaintenanceComponent
  },
  {
    path:  PORFILE_PATHS.CHILD_SUPPORT_SERVICE_FACILITIES_DOM,
    component:  DistractOfficeMaintenanceComponent
  },
  {
    path:  PORFILE_PATHS.CHILD_SUPPORT_SERVICE_FACILITIES_MESD,
    component:  MadisonElementarySchoolDistractComponent
  },
  {
    path:  PORFILE_PATHS.CHILD_CAREER_TECH_EDUCATION_WMC,
    component:  WestMECCentralCampusComponent
  },
  {
    path:  PORFILE_PATHS.CHILD_CAREER_TECH_EDUCATION_WMNW,
    component:  WestMECNorthwestCampusComponent
  },
  {
    path:  PORFILE_PATHS.CHILD_CAREER_TECH_EDUCATION_WMSW,
    component:  WestMECSouthwestCampusComponent
  },
  {
    path:  PORFILE_PATHS.CHILD_SPECIALTY_SCHOOLS_LAVEEN,
    component:  LaveenElementarySchoolComponent
  },
  {
    path:  PORFILE_PATHS.CHILD_SPECIALTY_SCHOOLS_PHOENIX,
    component:  PhoenixDaySchoolForTheDeafComponent
  },
  {
    path:  PORFILE_PATHS.CHILD_COMMUNITY_TOHONO,
    component:  TohonoOodhamMuseumCulturalCenterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
