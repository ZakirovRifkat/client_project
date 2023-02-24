import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetsComponent implements OnInit {
  @Input() type!: string;
  title!: string;
  activeDay: boolean = true;
  activeMonth: boolean = false;
  eventDayActive: boolean = true;
  day(): void {
    this.activeMonth = false;
    this.activeDay = true;
  }
  week(): void {
    this.activeMonth = false;
    this.activeDay = false;
  }
  month(): void {
    this.activeDay = false;
    this.activeMonth = true;
  }
  dayEvent(): void {
    this.eventDayActive = true;
  }
  weekEvent(): void {
    this.eventDayActive = false;
  }
  setWidgets(): void {
    if (this.type === 'incident') {
      this.title = `Количество инцидентов`;
    } else if (this.type === 'KPE') {
      this.title = 'Показатель КПЭ';
    } else if (this.type === 'event') {
      this.title = 'Лента Событий';
    } else if (this.type === 'laboratory') {
      this.title = 'Данные лаб.анализов';
    } else {
      this.type = 'add';
    }
  }
  ngOnInit(): void {
    this.setWidgets();
  }
}
