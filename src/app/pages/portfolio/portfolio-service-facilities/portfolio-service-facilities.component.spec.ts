import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioServiceFacilitiesComponent } from './portfolio-service-facilities.component';

describe('PortfolioServiceFacilitiesComponent', () => {
  let component: PortfolioServiceFacilitiesComponent;
  let fixture: ComponentFixture<PortfolioServiceFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioServiceFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioServiceFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
