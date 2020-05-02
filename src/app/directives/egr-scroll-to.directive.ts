import {Directive, HostListener, Input} from '@angular/core';


/**
 * Usage example:
 *
 * <button (click)="scrollToElement(target)"></button>
 * <div #target>Your target</div>
 */

@Directive({
  selector: '[appEgrScrollTo]'
})

export class EgrScrollToDirective {

  @Input() scrollToId: string;
  @HostListener('click', ['$event']) onclick($event) {
    $event.preventDefault(); //ignore native button clicks
    this.scrollToElement(this.scrollToId);
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
