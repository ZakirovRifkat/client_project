import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

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

  Highcharts = Highcharts;
  update = false;
  chartOptions = {
    chart: {
      type: 'pie',
      width: 231,
      height: 231,
      spacingTop: 0,
      spacingBottom: 0,
      spacingRight: 0,
      spacingLeft: 0,
      backgroundColor: 'transparent',
    },
    plotOptions: {
      pie: {
        size: 231,
        innerSize: 161,
        borderWidth: 0,
        startAngle: 180,
        colors: ['#24C38E', '#F38B01', '#161A1D'],
        states: {
          hover: { enabled: false },
          inactive: { enabled: false },
        },
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled:false,
        }
      },
    },

    title: {
      verticalAlign: 'middle' as const,
      floating: true,
      y: 35,
      text: `24`,
      style: {
        color: 'white',
        fontSize: '32px',
        lineHeight: '21px',
        textAlign: 'center',
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: 'pie' as const,
        name: 'Line 1',
        data: [6, 3, 3],
      },
    ],
    tooltip: {
      enabled: false,
    },
  };
}
