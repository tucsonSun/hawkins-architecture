import {Directive, OnDestroy, OnInit, ElementRef, Renderer2} from '@angular/core';
import {ScrollerService} from "../core/services/scroller.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";



/**
 * Usage example:
 *
 *
 * <div class="someMenu-container" appEgrStickyMenu>
 *   <the sticky menu content here...>
 * </div>
 *
 * .someMenu-container {
 *   @include sticky-menu;
 *
 *   &.show-element{
 *      top: 0;
 *      transition: top 0.25s ease-in;
 *    }
 *   &.hide-element{
 *      top: -64px;
 *      transition: top 0.25s ease-out;
 *    }
 * }
 *
 */
@Directive({
  selector: '[appEgrStickyMenu]'
})
export class EgrStickyMenuDirective implements OnInit, OnDestroy {

  private subKiller$ = new Subject();

  constructor(private _elemRef: ElementRef,
              private _renderer: Renderer2,
              private _scrollerService: ScrollerService) { }

  ngOnInit() {
    this.initScrollDown();
    this.initScrollUp();

    //add show class
    this._renderer.addClass(this._elemRef.nativeElement, 'show-element');
  }

  ngOnDestroy() {
    this.subKiller$.next()
    this.subKiller$.complete()
  }

  private initScrollDown(): void {
    this._scrollerService.onScrolledDown$(true).pipe(takeUntil(this.subKiller$)).subscribe(event => {
      this.scrollDownAction(event);
    });
  }

  private initScrollUp(): void {
    this._scrollerService.onScrolledUp$().pipe(takeUntil(this.subKiller$)).subscribe(event => {
      this.scrollUpAction(event);
    });
  }


  private scrollUpAction = (event): void => {
    this.toggleClass('show-element', 'hide-element');
  }

  private scrollDownAction = (event): void => {
    this.toggleClass('hide-element', 'show-element');
  }


  private toggleClass(styleNameNew: string, styleNameOld: string): void {
    this._renderer.removeClass(this._elemRef.nativeElement, styleNameOld);
    this._renderer.addClass(this._elemRef.nativeElement, styleNameNew);
  }
}
