import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appEgrImageOverlay]'
})

export class EgrImageOverlayDirective implements OnInit{

  public hideLargeImage = false;
  public currentElement: Element;
  public currentElementOriginalClassValues: string[];

  @HostListener('click' , ['$event']) onclick($event) {
    $event.preventDefault(); //ignore native button clicks
    this.addOrRemoveStyle();

  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initCurrentElement();
  }

  public initCurrentElement(): void {
    const element = this.elRef.nativeElement;
    if (element) {
      this.currentElement = element;

      if (element.className && element.className.length > 0) {
        this.currentElementOriginalClassValues = element.className.split(' ');
      }

      console.log(element.src);
    } else {
      throw `Error with EgrImageOverlayDirective: We were expecting a element but none was found. ${element}`;
    }
  }


  // public findFirstImageURL(): void {
  //   const element = this.elRef.nativeElement.querySelector('img') as HTMLImageElement;
  //   if (element) {
  //     this.imageElement = element;
  //     this.imageElementOriginalClassValues = element.className;
  //     console.log(element.src);
  //   } else {
  //     throw `Error with EgrImageOverlayDirective: We were expecting a "img" child element for parent element but none was found. ${element}`;
  //   }
  // }

  public addOrRemoveStyle(): void {
    if (!this.hideLargeImage) {
      this.addStylingToElement();
    } else {
      this.removeStylingToElement();
    }
    this.hideLargeImage = !this.hideLargeImage;
  }


  private removeStylingToElement(): void {
    this.renderer.removeClass(this.currentElement, `fullPage-image-overlay`);
    this.currentElementOriginalClassValues.forEach((aClass: string) => {
      this.renderer.addClass(this.currentElement, aClass);
    });
  }

  private addStylingToElement(): void {
    this.currentElementOriginalClassValues.forEach((aClass: string) => {
      this.renderer.removeClass(this.currentElement, aClass);
    });
    this.renderer.addClass(this.currentElement, `fullPage-image-overlay`);
  }

  // private addStylingToElement(): void {
  //   const requiredStyles = {
  //     // 'background-color': 'yellow',
  //     // 'color': 'red',
  //     // 'font-weight': 'bold',
  //     // //...and so on
  //
  //     'position': 'absolute',
  //     'bottom': '0',
  //     'background': 'rgba(0, 0, 0, 0.5)', /* Black see-through */
  //     'width': '100%',
  //     'height': '100%',
  //     'transition': '.5s ease',
  //     'opacity': '0',
  //     'color': 'white',
  //   };
  //   Object.keys(requiredStyles).forEach(newStyle => {
  //     this.renderer.setStyle(this.imageElement, `${newStyle}`, requiredStyles[newStyle]);
  //   });
  // }


}
