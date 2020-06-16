import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSpecialtySchoolsComponent } from './header-specialty-schools.component';

describe('HeaderSpecialtySchoolsComponent', () => {
  let component: HeaderSpecialtySchoolsComponent;
  let fixture: ComponentFixture<HeaderSpecialtySchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSpecialtySchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSpecialtySchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
