import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {ComponentsModule} from '../../components/components.module';
import {AngularMaterialModule} from '../../modules/angular-material.module';
import {DirectivesModule} from '../../directives/directives.module';


const components: any[] = [
    SidenavComponent,
];

@NgModule({
  declarations: [...components],
    imports: [
        ComponentsModule,
        CommonModule,
        RouterModule,

        // --Material Design
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatMenuModule,
        MatGridListModule,

        AngularMaterialModule,
        DirectivesModule,
    ],
  exports: [...components]
})
export class SidenavModule {}
