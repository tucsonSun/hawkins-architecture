import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appEgrImageFullPagePreview]'
})

export class EgrImageFullPagePreviewDirective implements OnInit{

  private imgFullPageClassContainerName = 'img-full-page-preview';
  public isImageInLargePreviewMode = false;
  public parentElement: Element;
  public imageElement: HTMLImageElement;
  public currentElementOriginalClassValues: string[];
  public imageElementOriginalClassValues: string[];

  //If HTMLElement clicked then go into preview mode
  @HostListener('click' , ['$event']) onclick($event) {
    $event.preventDefault();
    this.addOrRemoveClasses();
  }

  //If escape button is pressed then hide image
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    //only hide the image if isImageInLargePreviewMode=true
    if (this.isImageInLargePreviewMode) {
      this.addOrRemoveClasses();
    }
  }

  //If in mobile mode and mobile (native) back button is pressed then close if
  @HostListener('window:popstate', ['$event']) onPopState($event) {
    //only hide the image if isImageInLargePreviewMode=true
    if (this.isImageInLargePreviewMode) {
      $event.preventDefault();
      this.addOrRemoveClasses();
    }
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initParentElement();
    this.initImageElement();
  }

  public initParentElement(): void {
    const parentElement = this.elRef.nativeElement;

    if (parentElement) {
      this.parentElement = parentElement;

      if (parentElement.className && parentElement.className.length > 0) {
        this.currentElementOriginalClassValues = parentElement.className.split(' ');
      }
    } else {
      throw `Error with EgrImageFullPagePreviewDirective: We were expecting a element but none was found. ${parentElement}`;
    }
  }

  public initImageElement(): void {
    const imageElement = this.elRef.nativeElement.querySelector('img') as HTMLImageElement;

    if (imageElement) {
      this.imageElement = imageElement;
      this.imageElementOriginalClassValues = imageElement.className.split(' ');
    } else {
      throw `Error with EgrImageFullPagePreviewDirective: We were expecting a "img" child element for parent element but none was found. ${this.elRef.nativeElement}`;
    }
  }

  public addOrRemoveClasses(): void {
    if (!this.isImageInLargePreviewMode) {
      this.addElementClasses();
    } else {
      this.removeElementClasses();
    }
    this.isImageInLargePreviewMode = !this.isImageInLargePreviewMode;
  }


  private removeElementClasses(): void {
    this.renderer.removeClass(this.parentElement, this.imgFullPageClassContainerName);
    this.currentElementOriginalClassValues.forEach((aClass: string) => {
      this.renderer.addClass(this.parentElement, aClass);
    });
    this.imageElementOriginalClassValues.forEach((aClass: string) => {
      this.renderer.addClass(this.imageElement, aClass);
    });
  }

  private addElementClasses(): void {
    this.currentElementOriginalClassValues.forEach((aClass: string) => {
      this.renderer.removeClass(this.parentElement, aClass);
    });
    this.imageElementOriginalClassValues.forEach((aClass: string) => {
      this.renderer.removeClass(this.imageElement, aClass);
    });
    this.renderer.addClass(this.parentElement, this.imgFullPageClassContainerName);
  }

}
