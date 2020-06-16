import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCareerTechEducationComponent } from './header-career-tech-education.component';

describe('HeaderCareerTechEducationComponent', () => {
  let component: HeaderCareerTechEducationComponent;
  let fixture: ComponentFixture<HeaderCareerTechEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCareerTechEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCareerTechEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
