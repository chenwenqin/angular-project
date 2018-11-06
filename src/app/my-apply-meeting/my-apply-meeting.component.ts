import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-my-apply-meeting',
  templateUrl: './my-apply-meeting.component.html',
  styleUrls: ['./my-apply-meeting.component.scss']
})
export class MyApplyMeetingComponent implements OnInit {

  MeetingId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.MeetingId = params['id']);
  }

}
