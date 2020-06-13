import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TohonoOodhamMuseumCulturalCenterComponent } from './tohono-oodham-museum-cultural-center.component';

describe('TohonoOodhamMuseumCulturalCenterComponent', () => {
  let component: TohonoOodhamMuseumCulturalCenterComponent;
  let fixture: ComponentFixture<TohonoOodhamMuseumCulturalCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohonoOodhamMuseumCulturalCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TohonoOodhamMuseumCulturalCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
