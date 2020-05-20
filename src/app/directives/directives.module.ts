import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EgrScrollToDirective } from "./egr-scroll-to.directive";
import { EgrStickyMenuDirective } from "./egr-sticky-menu.directive";
import { EgrImageOverlayDirective } from './egr-image-overlay.directive';


const list :any[] = [
  EgrScrollToDirective,
  EgrStickyMenuDirective,
  EgrImageOverlayDirective,
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...list],
  exports: [...list],
})
export class DirectivesModule { }
