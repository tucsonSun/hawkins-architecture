import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCommunityComponent } from './portfolio-community.component';

describe('PortfolioCommunityComponent', () => {
  let component: PortfolioCommunityComponent;
  let fixture: ComponentFixture<PortfolioCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
