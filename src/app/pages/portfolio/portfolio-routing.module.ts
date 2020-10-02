import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TohonoOodhamMuseumCulturalCenterComponent} from './cultural-community/tohono-oodham-museum-cultural-center/tohono-oodham-museum-cultural-center.component';
import {LaveenElementarySchoolComponent} from './specialty-schools/laveen-elementary-school/laveen-elementary-school.component';
import {PhoenixDaySchoolForTheDeafComponent} from './specialty-schools/phoenix-day-school-for-the-deaf/phoenix-day-school-for-the-deaf.component';
import {WestMECCentralCampusComponent} from './career-tech-education/west-meccentral-campus/west-meccentral-campus.component';
import {WestMecnortheastCampusComponent} from './career-tech-education/west-mecnortheast-campus/west-mecnortheast-campus.component';
import {WestMECSouthwestCampusComponent} from './career-tech-education/west-mecsouthwest-campus/west-mecsouthwest-campus.component';
import {BuckeyeElementaryMaintenanceComponent} from './support-service-facilities/buckeye-elementary-maintenance/buckeye-elementary-maintenance.component';
import {MadisonElementarySchoolDistractComponent} from './support-service-facilities/madison-elementary-school-distract/madison-elementary-school-distract.component';


export const PORFILE_PATHS = {
  PORTFOLIO: 'portfolio',

  CHILD_COMMUNITY_TOHONO: 'tohono-ooham-museum',
  CHILD_SPECIALTY_SCHOOLS_LAVEEN: 'laveen-elementary-for-the-deaf',
  CHILD_SPECIALTY_SCHOOLS_PHOENIX: 'phoenix-day-school-for-the-deaf',
  CHILD_CAREER_TECH_EDUCATION_WMC: 'west-mec-central-campus',
  CHILD_CAREER_TECH_EDUCATION_WMNE: 'west-mec-northeast-campus',
  CHILD_CAREER_TECH_EDUCATION_WMSW: 'west-mec-southwest-campus',
  CHILD_SUPPORT_SERVICE_FACILITIES_BEM: 'buckeye-elementary-maintenance',
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
    path:  PORFILE_PATHS.CHILD_SUPPORT_SERVICE_FACILITIES_MESD,
    component:  MadisonElementarySchoolDistractComponent
  },
  {
    path:  PORFILE_PATHS.CHILD_CAREER_TECH_EDUCATION_WMC,
    component:  WestMECCentralCampusComponent
  },
  {
    path:  PORFILE_PATHS.CHILD_CAREER_TECH_EDUCATION_WMNE,
    component:  WestMecnortheastCampusComponent
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
