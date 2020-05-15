import {Directive, HostListener, Input} from '@angular/core';


/**
 * Usage example:
 *
 * <a mat-raised-button [appEgrScrollTo]="'#profile'">
 *    <span class="btn-description">Profile</span>
 *    <mat-icon class="example-icon">supervisor_account</mat-icon>
 *</a>
 *
 * <div #profile>Your target</div>
 */

@Directive({
  selector: '[appEgrScrollTo]'
})

export class EgrScrollToDirective {

  @Input() appEgrScrollTo: string;
  @HostListener('click', ['$event']) onclick($event) {
    $event.preventDefault(); //ignore native button clicks
    this.scrollToElement(this.appEgrScrollTo);
  }

  constructor() { }


  scrollToElement(elementId: string): void {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    } else {
      throw `Error with EgrScrollToDirective: '${elementId}' element not found on page.`;
    }
  }
}
