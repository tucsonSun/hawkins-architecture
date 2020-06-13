import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSpecialtySchoolsComponent } from './portfolio-specialty-schools.component';

describe('PortfolioSpecialtySchoolsComponent', () => {
  let component: PortfolioSpecialtySchoolsComponent;
  let fixture: ComponentFixture<PortfolioSpecialtySchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSpecialtySchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSpecialtySchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
