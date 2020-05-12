import {Directive, OnDestroy, OnInit, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appEgrStickyMenu]'
})
export class EgrStickyMenuDirective implements OnDestroy, OnInit {

  private prevScrollpos = window.pageYOffset;

  constructor(private _elemRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
    //add show class
    this._renderer.addClass(this._elemRef.nativeElement, 'show-element');
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event): void => {
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
    let currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      this.toggleClass('hide-element', 'show-element');
    } else {
      this.toggleClass('show-element', 'hide-element');
    }
    this.prevScrollpos = currentScrollPos;
  };


  toggleClass(styleNameNew: string, styleNameOld: string): void {
    this._renderer.removeClass(this._elemRef.nativeElement, styleNameOld);
    this._renderer.addClass(this._elemRef.nativeElement, styleNameNew);
  }
}
