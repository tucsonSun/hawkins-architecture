import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuckeyeElementrayMaintenanceComponent } from './buckeye-elementray-maintenance.component';

describe('BuckeyeElementrayMaintenanceComponent', () => {
  let component: BuckeyeElementrayMaintenanceComponent;
  let fixture: ComponentFixture<BuckeyeElementrayMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuckeyeElementrayMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuckeyeElementrayMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
