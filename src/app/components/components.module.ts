import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {AngularMaterialModule} from "../modules/angular-material.module";
import {DirectivesModule} from "../directives/directives.module";


const components :any[] = [
  FooterComponent,
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
