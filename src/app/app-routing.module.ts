import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
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

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'MyMeeting', component: MymeetingComponent, children: [
    {path: '', component: MyApplyMeetingComponent},
    {path: 'MyApplyMeeting/:id', component: MyApplyMeetingComponent},
    {path: 'MyParticipationMeeting', component: MyParticipationMeetingComponent},
    {path: 'FreeReminder', component: FreeReminderComponent},
    {path: 'MyMeetingSummary', component: MyMeetingSummaryComponent},
    {path: 'MyHostMobileMeeting', component: MyHostMobileMeetingComponent},
    {path: 'MyParticipationMobileMeeting', component: MyParticipationMobileMeetingComponent},
    {path: '**', component: Code404Component}
  ]},
  {path: 'MeetingManagement', component: MeetingManagementComponent},
  {path: 'MeetingRoomApprove', component: MeetingRoomApproveComponent},
  {path: 'MeetingRoomStatistics', component: MeetingRoomStatisticsComponent},
  {path: 'OrganizationManagement', component: OrganizationManagementComponent},
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
