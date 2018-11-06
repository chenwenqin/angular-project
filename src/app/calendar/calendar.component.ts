import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() Year: number;
  @Input() Month: number;
  weekDays: Array<string>;
  monthDayArray: Array<Array<number>>;
  constructor() { }

  ngOnInit() {
    this.getWeekDays();
    this.getMonthDaysArray();
  }

  // 返回该月第一天的索引，星期日为0，依次到星期六为6
  private getFirstDayIndex = (): number => {
    return new Date(this.Year, this.Month - 1, 1).getDay();
  }

  // 返回该月一共的天数，new Date(this.Year, this.Month, 0)表示该月最后一天
  private getMonthDaysNumber = (): number => {
    return new Date(this.Year, this.Month, 0).getDate();
  }

  // 获取weekDay
  private getWeekDays = (): void => {
    this.weekDays = ['一', '二', '三', '四', '五', '六', '日'];
  }

  // 返回该月天数以星期一为起点的数组
  private getMonthDaysArray = (): void => {
    const firstDayIndex = this.getFirstDayIndex();
    // console.log('firstDayIndex:' + firstDayIndex);
    const monthDaysNumber = this.getMonthDaysNumber();
    // console.log('monthDaysNumber:' + monthDaysNumber);
    const daysArray: Array<number> = [];
    const daysArrayByWeek: Array<Array<number>> = [];
    for (let i = 1; i <= 42; i++) {
      if (i >= 1 && i < firstDayIndex) {
        daysArray.push(0);
      }
      if (i >= firstDayIndex && i < monthDaysNumber + firstDayIndex) {
        daysArray.push(i - (firstDayIndex - 1));
      }
      if (i >= monthDaysNumber + firstDayIndex) {
        daysArray.push(0);
      }
    }
    // console.log(daysArray);
    for (let i = 0; i < 6; i++) {
      daysArrayByWeek.push(daysArray.slice(7 * i, 7 * (i + 1)));
    }
    // console.log('daysArrayByWeek:' + daysArrayByWeek);
    this.monthDayArray = daysArrayByWeek;
  }
}
