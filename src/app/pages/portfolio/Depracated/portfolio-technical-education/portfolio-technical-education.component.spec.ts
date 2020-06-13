import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTechnicalEducationComponent } from './portfolio-technical-education.component';

describe('PortfolioTechnicalEducationComponent', () => {
  let component: PortfolioTechnicalEducationComponent;
  let fixture: ComponentFixture<PortfolioTechnicalEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTechnicalEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTechnicalEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
