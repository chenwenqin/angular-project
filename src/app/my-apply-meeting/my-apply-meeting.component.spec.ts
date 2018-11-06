import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplyMeetingComponent } from './my-apply-meeting.component';

describe('MyApplyMeetingComponent', () => {
  let component: MyApplyMeetingComponent;
  let fixture: ComponentFixture<MyApplyMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyApplyMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApplyMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
