import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {AngularMaterialModule} from '../modules/angular-material.module';
import {DirectivesModule} from '../directives/directives.module';
import { AccordionComponent } from './accordion/accordion.component';


const components: any[] = [
  FooterComponent,
  AccordionComponent,
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
