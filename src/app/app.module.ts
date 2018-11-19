import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatTableModule, MatGridListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { MeetingroomsComponent } from './meetingrooms/meetingrooms.component';
import { CurrentdayComponent } from './currentday/currentday.component';
import { Code404Component } from './code404/code404.component';
import { HomeComponent } from './home/home.component';
import { MymeetingComponent } from './mymeeting/mymeeting.component';
import { MeetingManagementComponent } from './meeting-management/meeting-management.component';
import { MeetingRoomApproveComponent } from './meeting-room-approve/meeting-room-approve.component';
import { MeetingRoomStatisticsComponent } from './meeting-room-statistics/meeting-room-statistics.component';
import { OrganizationManagementComponent } from './organization-management/organization-management.component';
import { MyApplyMeetingComponent } from './my-apply-meeting/my-apply-meeting.component';
import { MyParticipationMeetingComponent } from './my-participation-meeting/my-participation-meeting.component';
import { FreeReminderComponent } from './free-reminder/free-reminder.component';
import { MyMeetingSummaryComponent } from './my-meeting-summary/my-meeting-summary.component';
import { MyHostMobileMeetingComponent } from './my-host-mobile-meeting/my-host-mobile-meeting.component';
import { MyParticipationMobileMeetingComponent } from './my-participation-mobile-meeting/my-participation-mobile-meeting.component';
import { MeetingService } from './meeting.service';
import { MeetingRoomManagementComponent } from './meeting-room-management/meeting-room-management.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarsComponent,
    NavigationComponent,
    CopyrightComponent,
    MeetingroomsComponent,
    CurrentdayComponent,
    Code404Component,
    HomeComponent,
    MymeetingComponent,
    MeetingManagementComponent,
    MeetingRoomApproveComponent,
    MeetingRoomStatisticsComponent,
    OrganizationManagementComponent,
    MyApplyMeetingComponent,
    MyParticipationMeetingComponent,
    FreeReminderComponent,
    MyMeetingSummaryComponent,
    MyHostMobileMeetingComponent,
    MyParticipationMobileMeetingComponent,
    MeetingRoomManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [MeetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
