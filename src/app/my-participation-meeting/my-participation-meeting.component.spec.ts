import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParticipationMeetingComponent } from './my-participation-meeting.component';

describe('MyParticipationMeetingComponent', () => {
  let component: MyParticipationMeetingComponent;
  let fixture: ComponentFixture<MyParticipationMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyParticipationMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyParticipationMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
