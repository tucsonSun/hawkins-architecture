import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {TopMenuComponent} from "./top-menu/top-menu.component";
import {AngularMaterialModule} from "../modules/angular-material.module";
import {DirectivesModule} from "../directives/directives.module";


const components :any[] = [
  HeaderComponent,
  FooterComponent,
  TopMenuComponent
];


@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,

    AngularMaterialModule,
  ],
  declarations: [...components],
  exports: [ ...components],
})
export class ComponentsModule { }
