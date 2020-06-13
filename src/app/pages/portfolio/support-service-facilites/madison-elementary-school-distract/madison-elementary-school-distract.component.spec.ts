import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadisonElementarySchoolDistractComponent } from './madison-elementary-school-distract.component';

describe('MadisonElementarySchoolDistractComponent', () => {
  let component: MadisonElementarySchoolDistractComponent;
  let fixture: ComponentFixture<MadisonElementarySchoolDistractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadisonElementarySchoolDistractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadisonElementarySchoolDistractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
