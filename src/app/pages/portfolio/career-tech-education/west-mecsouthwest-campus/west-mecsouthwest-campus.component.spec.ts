import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestMECSouthwestCampusComponent } from './west-mecsouthwest-campus.component';

describe('WestMECSouthwestCampusComponent', () => {
  let component: WestMECSouthwestCampusComponent;
  let fixture: ComponentFixture<WestMECSouthwestCampusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestMECSouthwestCampusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestMECSouthwestCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
