import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistractOfficeMaintenanceComponent } from './distract-office-maintenance.component';

describe('DistractOfficeMaintenanceComponent', () => {
  let component: DistractOfficeMaintenanceComponent;
  let fixture: ComponentFixture<DistractOfficeMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistractOfficeMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistractOfficeMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
