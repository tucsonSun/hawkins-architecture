import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  public title = 'hawkins-architecture';
  public appMyThemeStyleName = 'my-light-theme';

  constructor(private renderer: Renderer2,  private el: ElementRef) { }


  ngOnInit(): void {
    this.addClass();
  }

  public toggleStyle(): void {
    this.removeClass(); //removed old class

    if (this.appMyThemeStyleName === 'my-light-theme') {
      this.appMyThemeStyleName = 'my-dark-theme';
    } else {
      this.appMyThemeStyleName = 'my-light-theme';
    }

    this.addClass(); //add new class
  }

  private addClass(): void {
    this.renderer.addClass(this.el.nativeElement, this.appMyThemeStyleName);
  }

  private removeClass(): void {
    this.renderer.removeClass(this.el.nativeElement, this.appMyThemeStyleName);
  }
}
