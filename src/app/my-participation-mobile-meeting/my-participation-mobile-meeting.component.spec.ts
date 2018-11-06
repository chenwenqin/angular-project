import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParticipationMobileMeetingComponent } from './my-participation-mobile-meeting.component';

describe('MyParticipationMobileMeetingComponent', () => {
  let component: MyParticipationMobileMeetingComponent;
  let fixture: ComponentFixture<MyParticipationMobileMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyParticipationMobileMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyParticipationMobileMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
