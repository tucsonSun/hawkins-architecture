import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSupportFacilitesComponent } from './portfolio-support-facilites.component';

describe('PortfolioSupportFacilitesComponent', () => {
  let component: PortfolioSupportFacilitesComponent;
  let fixture: ComponentFixture<PortfolioSupportFacilitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSupportFacilitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSupportFacilitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
