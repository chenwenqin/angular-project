import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-meeting-management',
  templateUrl: './meeting-management.component.html',
  styleUrls: ['./meeting-management.component.scss']
})
export class MeetingManagementComponent implements OnInit {

  Organization: [];
  constructor(private meetingService: MeetingService) { }

  getOrganization = () => {
    this.meetingService.getOrganization().subscribe((data) => {
      console.log(data);
      this.Organization = data['Organization'];
    });
  }

  ngOnInit() {
    this.getOrganization();
  }

}
