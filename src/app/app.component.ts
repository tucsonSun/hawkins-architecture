import {Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ColorPickerService} from "./core/services/color-picker.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit, OnDestroy{
  public title = 'hawkins-architecture';
  public themeClass$: Observable<string>;
  
  constructor( private colorPicker: ColorPickerService) {

    this.themeClass$ = this.colorPicker.getColorClass();
  }

  ngOnDestroy() {
  }

  ngOnInit(): void {
    //this.addClass();
  }
}
