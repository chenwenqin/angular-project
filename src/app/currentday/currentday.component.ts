import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currentday',
  templateUrl: './currentday.component.html',
  styleUrls: ['./currentday.component.scss']
})
export class CurrentdayComponent implements OnInit {

  currentDate: Date;
  constructor() { }

  ngOnInit() {
    this.getCurrentDate();
  }
  getCurrentDate = (): void => {
    this.currentDate = new Date();
  }
}
