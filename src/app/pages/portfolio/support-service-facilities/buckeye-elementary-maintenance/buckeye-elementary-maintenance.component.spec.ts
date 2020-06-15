import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuckeyeElementaryMaintenanceComponent } from './buckeye-elementary-maintenance.component';

describe('BuckeyeElementaryMaintenanceComponent', () => {
  let component: BuckeyeElementaryMaintenanceComponent;
  let fixture: ComponentFixture<BuckeyeElementaryMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuckeyeElementaryMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuckeyeElementaryMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
