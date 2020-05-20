import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EgrScrollToDirective } from "./egr-scroll-to.directive";
import { EgrStickyMenuDirective } from "./egr-sticky-menu.directive";
import { EgrImageFullPagePreviewDirective } from './egr-image-full-page-preview.directive';


const list :any[] = [
  EgrScrollToDirective,
  EgrStickyMenuDirective,
  EgrImageFullPagePreviewDirective,
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...list],
  exports: [...list],
})
export class DirectivesModule { }
