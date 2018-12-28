import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningteamComponent } from './learningteam.component';

describe('LearningteamComponent', () => {
  let component: LearningteamComponent;
  let fixture: ComponentFixture<LearningteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
