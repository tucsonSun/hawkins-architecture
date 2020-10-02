import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestMecnortheastCampusComponent } from './west-mecnortheast-campus.component';

describe('WestMECNorthwestCampusComponent', () => {
  let component: WestMecnortheastCampusComponent;
  let fixture: ComponentFixture<WestMecnortheastCampusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestMecnortheastCampusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestMecnortheastCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
