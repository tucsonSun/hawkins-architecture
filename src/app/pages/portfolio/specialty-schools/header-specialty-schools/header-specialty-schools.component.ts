import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-specialty-schools',
  templateUrl: './header-specialty-schools.component.html',
  styleUrls: ['./header-specialty-schools.component.scss']
})
export class HeaderSpecialtySchoolsComponent implements OnInit {

  @Input() showPhoenixDaySchoolForTheDeafVerbiage = false;
  @Input() showLaveenElementrySchoolVerbiage = false;

  constructor() { }

  ngOnInit(): void {
  }

}
