import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public appStyleName = 'my-light-theme';

  constructor() { }

  ngOnInit(): void {
  }

  public toggleStyle(): void {
    if (this.appStyleName === 'my-light-theme') {
      this.appStyleName = 'my-dark-theme';
    } else {
      this.appStyleName = 'my-light-theme';
    }
  }

}
