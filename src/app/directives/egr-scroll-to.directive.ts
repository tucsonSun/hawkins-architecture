import {Directive, HostListener, Input} from '@angular/core';
import {ScrollerService} from '../core/services/scroller.service';


/**
 * Usage example:
 *
 * <a mat-raised-button [appEgrScrollTo]="'#profile'">
 *    <span class="btn-description">Profile</span>
 *    <mat-icon class="example-icon">supervisor_account</mat-icon>
 * </a>
 *
 * <div #profile>Your target</div>
 */

@Directive({
  selector: '[appEgrScrollTo]'
})

export class EgrScrollToDirective {

  @Input() appEgrScrollTo: string;
  @Input() scrollTop = false;

  @HostListener('click' , ['$event']) onclick($event) {
    $event.preventDefault(); // ignore native button clicks

    if (this.scrollTop) {
      this.scrollToTopOfPage();
    }
    else {
      this.scrollToElementId(this.appEgrScrollTo);
    }
  }

  constructor(private scrollerService: ScrollerService) { }

  public scrollToTopOfPage(): void {
    return this.scrollerService.scrollToTopOfPage();
  }

  scrollToElementId(elementId: string): void {
    return this.scrollerService.scrollToElementId(elementId);
  }
}
