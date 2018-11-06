import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetingrooms',
  templateUrl: './meetingrooms.component.html',
  styleUrls: ['./meetingrooms.component.scss']
})
export class MeetingroomsComponent implements OnInit {

  constructor() { }
  meetingTimeArray: Array<string>;
  availableTimeArray: Array<string>;
  meetingRooms: Array<MeetingRoom>;
  ngOnInit() {
    this.getMeetingTimeArray();
    this.getAvailableTimeArray();
    this.getMeetingRooms();
  }
  private getMeetingTimeArray = (): void => {
    this.meetingTimeArray = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  }
  private getAvailableTimeArray = () => {
    this.availableTimeArray = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12：00', '12：30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'];
  }
  private getMeetingRooms = () => {
    this.meetingRooms = [
      {
        id: 1,
        name: '101',
        capacity: 10,
        equipments: ['电视', '投影'],
        roomFunctions: ['培训室', '洽谈室'],
        bookingList: [
          {
            appicant: 'cwq',
            appicantDepartment: 'IT',
            meetingTitle: '测试',
            meetingStartTime: '08：00',
            meetingEndTime: '10：00'
          }
        ]
      }
    ];
  }
}

class MeetingRoom {
  constructor(
    public id: number,
    public name: string,
    public capacity: number,
    public equipments: Array<string>,
    public roomFunctions: Array<string>,
    public bookingList: Array<RoomState>
  ) { }
}
class RoomState {
  constructor(
    public appicant: string,
    public appicantDepartment: string,
    public meetingTitle: string,
    public meetingStartTime: string,
    public meetingEndTime: string
  ) { }
}
