import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRoomStatisticsComponent } from './meeting-room-statistics.component';

describe('MeetingRoomStatisticsComponent', () => {
  let component: MeetingRoomStatisticsComponent;
  let fixture: ComponentFixture<MeetingRoomStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingRoomStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRoomStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
