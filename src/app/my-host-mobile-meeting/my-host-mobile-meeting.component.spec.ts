import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHostMobileMeetingComponent } from './my-host-mobile-meeting.component';

describe('MyHostMobileMeetingComponent', () => {
  let component: MyHostMobileMeetingComponent;
  let fixture: ComponentFixture<MyHostMobileMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHostMobileMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHostMobileMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
