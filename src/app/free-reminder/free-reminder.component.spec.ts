import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeReminderComponent } from './free-reminder.component';

describe('FreeReminderComponent', () => {
  let component: FreeReminderComponent;
  let fixture: ComponentFixture<FreeReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
