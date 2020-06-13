import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestMECCentralCampusComponent } from './west-meccentral-campus.component';

describe('WestMECCentralCampusComponent', () => {
  let component: WestMECCentralCampusComponent;
  let fixture: ComponentFixture<WestMECCentralCampusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestMECCentralCampusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestMECCentralCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
