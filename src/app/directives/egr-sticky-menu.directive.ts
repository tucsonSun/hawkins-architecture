import {Directive, OnDestroy, OnInit, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appEgrStickyMenu]'
})
export class EgrStickyMenuDirective implements OnDestroy, OnInit {

  @Input() appEgrStickyMenu: string = '-64px';
  private prevScrollpos = window.pageYOffset;

  constructor(private _elemRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
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
      this._elemRef.nativeElement.style.top
      this._renderer.setStyle(this._elemRef.nativeElement, 'top', '0');
    } else {
      this._renderer.setStyle(this._elemRef.nativeElement, 'top', this.appEgrStickyMenu);
    }
    this.prevScrollpos = currentScrollPos;
  };
}
