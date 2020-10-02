import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-career-tech-education',
  templateUrl: './header-career-tech-education.component.html',
  styleUrls: ['./header-career-tech-education.component.scss']
})
export class HeaderCareerTechEducationComponent implements OnInit {

  @Input() showWestMECNortheastCampusPhoenixVerbiage = false;
  @Input() showWestMECCentralCampusVerbiage = false;
  @Input() showWestMECSouthwestCampusVerbiage = false;

  constructor() { }

  ngOnInit(): void {
  }

}
