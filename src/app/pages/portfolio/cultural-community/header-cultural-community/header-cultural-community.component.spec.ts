import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCulturalCommunityComponent } from './header-cultural-community.component';

describe('HeaderCulturalCommunityComponent', () => {
  let component: HeaderCulturalCommunityComponent;
  let fixture: ComponentFixture<HeaderCulturalCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCulturalCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCulturalCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
