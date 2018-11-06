import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRoomApproveComponent } from './meeting-room-approve.component';

describe('MeetingRoomApproveComponent', () => {
  let component: MeetingRoomApproveComponent;
  let fixture: ComponentFixture<MeetingRoomApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingRoomApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRoomApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
