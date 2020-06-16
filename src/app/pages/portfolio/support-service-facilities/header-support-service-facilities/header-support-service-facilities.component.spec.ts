import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSupportServiceFacilitiesComponent } from './header-support-service-facilities.component';

describe('HeaderSupportServiceFacilitiesComponent', () => {
  let component: HeaderSupportServiceFacilitiesComponent;
  let fixture: ComponentFixture<HeaderSupportServiceFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSupportServiceFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSupportServiceFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
