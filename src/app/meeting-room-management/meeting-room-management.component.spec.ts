import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRoomManagementComponent } from './meeting-room-management.component';

describe('MeetingRoomManagementComponent', () => {
  let component: MeetingRoomManagementComponent;
  let fixture: ComponentFixture<MeetingRoomManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingRoomManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRoomManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
