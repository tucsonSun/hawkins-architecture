import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DirectivesModule} from "./directives/directives.module";
import {ComponentsModule} from "./components/components.module";
import {MatSliderModule} from "@angular/material/slider";
import {SidenavModule} from "./pages/sidenav/sidenav.module";
import {PageNotFoundModule} from "./pages/page-not-found/page-not-found.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

    MatSliderModule, // This is a weird but for hammerjs I think

      //app global
    DirectivesModule,
    ComponentsModule,

      //pages
    SidenavModule,
    PageNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
