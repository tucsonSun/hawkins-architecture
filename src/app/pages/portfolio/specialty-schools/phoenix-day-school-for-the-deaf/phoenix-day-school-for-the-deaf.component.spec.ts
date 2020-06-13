import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoenixDaySchoolForTheDeafComponent } from './phoenix-day-school-for-the-deaf.component';

describe('PhoenixDaySchoolForTheDeafComponent', () => {
  let component: PhoenixDaySchoolForTheDeafComponent;
  let fixture: ComponentFixture<PhoenixDaySchoolForTheDeafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoenixDaySchoolForTheDeafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoenixDaySchoolForTheDeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
