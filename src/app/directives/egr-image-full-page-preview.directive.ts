import {Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {MyAppRouterService} from '../core/services/my-app-router.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Directive({
  selector: '[appEgrImageFullPagePreview]'
})

export class EgrImageFullPagePreviewDirective implements OnInit, OnDestroy {

  private subKiller$ = new Subject();
  private imgFullPageClassContainerName = 'img-full-page-preview';
  public isImageInLargePreviewMode = false;
  public parentElement: Element;
  public imageElement: HTMLImageElement;
  public currentElementOriginalClassValues: string[];
  public imageElementOriginalClassValues: string[];

  // If HTMLElement clicked then go into preview mode
  @HostListener('click' , ['$event']) onclick($event) {
    $event.preventDefault();

    if (this.isImageInLargePreviewMode) {
      this.endPreviewMode();
    } else {
      this.startPreviewMode();
    }
  }

  // If escape button is pressed then hide image
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    // only hide the image if isImageInLargePreviewMode=true
    if (this.isImageInLargePreviewMode) {
      this.endPreviewMode();
    }
  }

  // //If in mobile mode and mobile (native) back button is pressed then close if
  // @HostListener('window:popstate', ['$event']) onPopState($event) {
  //   //only hide the image if isImageInLargePreviewMode=true
  //   if (this.isImageInLargePreviewMode) {
  //     $event.preventDefault();
  //     this.endPreviewMode();
  //   }
  // }

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private router: Router,
              private myAppRouterService: MyAppRouterService) {}

  ngOnInit(): void {
    this.initParentElement();
    this.initImageElement();
    this.initBackPageSub();
  }

  ngOnDestroy() {
    this.subKiller$.next();
    this.subKiller$.complete();
    if (this.isImageInLargePreviewMode) {
      this.endPreviewMode();
    }
  }

  public initBackPageSub(): void {
    this.myAppRouterService.backButton$(this.router.events).pipe(takeUntil(this.subKiller$)).subscribe( result => {
      console.log('***************************************************** Backbutton clicked');
      if (this.isImageInLargePreviewMode) {
        this.endPreviewMode();
      }
    });
  }

  public initParentElement(): void {
    const parentElement = this.elRef.nativeElement;

    if (parentElement) {
      this.parentElement = parentElement;

      if (parentElement.className && parentElement.className.length > 0) {
        this.currentElementOriginalClassValues = parentElement.className.split(' ');
      }
    } else {
      throw new Error(`Error with EgrImageFullPagePreviewDirective: We were expecting a element but none was found. ${parentElement}`);
    }
  }

  private initImageElement(): void {
    const imageElement = this.elRef.nativeElement.querySelector('img') as HTMLImageElement;

    if (imageElement) {
      this.imageElement = imageElement;
      this.imageElementOriginalClassValues = imageElement.className.split(' ');
    } else {
      throw new Error(`Error with EgrImageFullPagePreviewDirective: We were expecting a "img" child element for parent element but none was found. ${this.elRef.nativeElement}`);
    }
  }

  private startPreviewMode(): void {
    if (!this.isImageInLargePreviewMode) {
      this.addElementClasses();
    }
    this.isImageInLargePreviewMode = true;
  }

  private endPreviewMode(): void {
    if (this.isImageInLargePreviewMode) {
      this.removeElementClasses();
    }
    this.isImageInLargePreviewMode = false;
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
