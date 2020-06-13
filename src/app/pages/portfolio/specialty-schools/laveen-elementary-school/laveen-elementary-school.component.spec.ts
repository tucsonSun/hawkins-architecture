import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaveenElementarySchoolComponent } from './laveen-elementary-school.component';

describe('LaveenElementarySchoolComponent', () => {
  let component: LaveenElementarySchoolComponent;
  let fixture: ComponentFixture<LaveenElementarySchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaveenElementarySchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaveenElementarySchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
