import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-support-service-facilities',
  templateUrl: './header-support-service-facilities.component.html',
  styleUrls: ['./header-support-service-facilities.component.scss']
})
export class HeaderSupportServiceFacilitiesComponent implements OnInit {

  @Input() showMadisonElementraySchoolVerbiage = false;
  @Input() showBuckeyeElementrayMaintenanceVerbiage = false;

  constructor() { }

  ngOnInit(): void {
  }

}
