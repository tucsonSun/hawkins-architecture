import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import {AngularMaterialModule} from "../../modules/angular-material.module";
import {ContactMeComponent} from "./contact-me/contact-me.component";
import {ProfileComponent} from "./profile/profile.component";
import {ServicesComponent} from "./services/services.component";
import {StrengthsComponent} from "./strengths/strengths.component";
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
