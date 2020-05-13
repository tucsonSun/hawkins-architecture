import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHigherEducationComponent } from './portfolio-higher-education.component';

describe('PortfolioHigherEducationComponent', () => {
  let component: PortfolioHigherEducationComponent;
  let fixture: ComponentFixture<PortfolioHigherEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioHigherEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHigherEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
