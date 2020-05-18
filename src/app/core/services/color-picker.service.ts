import { OverlayContainer } from '@angular/cdk/overlay';
import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorPickerService {

  //private subKiller = new Subject<void>()
  private APP_COLOR_PICKER_KEY = 'app-color-picker';
  initialClass = 'my-light-theme';
  colorClass$: BehaviorSubject<string> = new BehaviorSubject(this.initialClass);

  constructor(private overlayContainer: OverlayContainer) {
    this.initColorClass(overlayContainer);
  }

  // ngOnDestroy() {
  //   this.subKiller.next()
  //   this.subKiller.complete()
  // }

  /** Get local storage value for style **/
  public initColorClass(overlayContainer: OverlayContainer, ): void {
    const storageClass = localStorage.getItem(this.APP_COLOR_PICKER_KEY);
    console.log(storageClass);

    if (storageClass) {
      overlayContainer.getContainerElement().classList.add(storageClass);
      this.colorClass$.next(storageClass);
    } else {
      overlayContainer.getContainerElement().classList.add(this.initialClass);
    }
  }

  getColorClass(): Observable<string> {
    return this.colorClass$;
  }
  setColorClass(className: string): void {
    this.overlayContainer.getContainerElement().classList.forEach(css => {
      this.overlayContainer.getContainerElement().classList.remove(css);
    });
    this.overlayContainer.getContainerElement().classList.add(className);
    this.colorClass$.next(className);
    localStorage.setItem(this.APP_COLOR_PICKER_KEY, className);
  }
}
