import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestMECNorthwestCampusComponent } from './west-mecnorthwest-campus.component';

describe('WestMECNorthwestCampusComponent', () => {
  let component: WestMECNorthwestCampusComponent;
  let fixture: ComponentFixture<WestMECNorthwestCampusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestMECNorthwestCampusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestMECNorthwestCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
