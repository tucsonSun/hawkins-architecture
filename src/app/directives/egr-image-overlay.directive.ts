import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appEgrImageOverlay]'
})

export class EgrImageOverlayDirective implements OnInit{

  private newClassValue = 'img-full-page-preview';
  public isImageInLargePreviewMode = false;
  public currentElement: Element;
  public currentElementOriginalClassValues: string[];

  @HostListener('click' , ['$event']) onclick($event) {
    $event.preventDefault(); //ignore native button clicks
    this.addOrRemoveStyle();
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(event);
    //only hide only if image is in preview mode
    if (this.isImageInLargePreviewMode) {
      this.addOrRemoveStyle();
    }
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

  public addOrRemoveStyle(): void {
    if (!this.isImageInLargePreviewMode) {
      this.addStylingToElement();
    } else {
      this.removeStylingToElement();
    }
    this.isImageInLargePreviewMode = !this.isImageInLargePreviewMode;
  }


  private removeStylingToElement(): void {
    this.renderer.removeClass(this.currentElement, this.newClassValue);
    this.currentElementOriginalClassValues.forEach((aClass: string) => {
      this.renderer.addClass(this.currentElement, aClass);
    });
  }

  private addStylingToElement(): void {
    this.currentElementOriginalClassValues.forEach((aClass: string) => {
      this.renderer.removeClass(this.currentElement, aClass);
    });
    this.renderer.addClass(this.currentElement, this.newClassValue);
  }

}
