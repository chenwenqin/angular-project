import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMeetingSummaryComponent } from './my-meeting-summary.component';

describe('MyMeetingSummaryComponent', () => {
  let component: MyMeetingSummaryComponent;
  let fixture: ComponentFixture<MyMeetingSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMeetingSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMeetingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
