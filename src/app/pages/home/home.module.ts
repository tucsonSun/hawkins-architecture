import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import {AngularMaterialModule} from "../../modules/angular-material.module";
import {ContactMeComponent} from "./components/contact-me/contact-me.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ServicesComponent} from "./components/services/services.component";
import {StrengthsComponent} from "./components/strengths/strengths.component";
import {DirectivesModule} from "../../directives/directives.module";

const components: any[] = [
  HomeComponent,
  ContactMeComponent,
  ProfileComponent,
  ServicesComponent,
  StrengthsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    DirectivesModule,

    AngularMaterialModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class HomeModule {}
