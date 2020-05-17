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
  @Input() scrollTop: boolean = false;

  @HostListener('click' , ['$event']) onclick($event) {
    $event.preventDefault(); //ignore native button clicks

    if (this.scrollTop) {
      this.scrollToTopOfPage();
    }
    else {
      this.scrollToElement(this.appEgrScrollTo);
    }
  }

  constructor() { }

  public scrollToTopOfPage(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  scrollToElement(elementId: string): void {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    } else {
      throw `Error with EgrScrollToDirective: '${elementId}' element not found on page.`;
    }
  }
}
