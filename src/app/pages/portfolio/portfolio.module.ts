import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortfolioRoutingModule } from "./portfolio-routing.module";
import {AngularMaterialModule} from "../../modules/angular-material.module";
import {DirectivesModule} from "../../directives/directives.module";
import {PortfolioComponent} from "./portfolio.component";

const components: any[] = [
  PortfolioComponent,
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
