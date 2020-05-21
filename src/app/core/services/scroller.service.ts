import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollerService {

  constructor() { }


  public scrollToTopOfPage(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  public  scrollToElement(elementId: string): void {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    } else {
      throw `Error with EgrScrollToDirective: '${elementId}' element not found on page.`;
    }
  }
}
