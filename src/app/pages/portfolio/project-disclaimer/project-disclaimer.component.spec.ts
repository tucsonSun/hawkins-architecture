import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDisclaimerComponent } from './project-disclaimer.component';

describe('ProjectDisclaimerComponent', () => {
  let component: ProjectDisclaimerComponent;
  let fixture: ComponentFixture<ProjectDisclaimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDisclaimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
