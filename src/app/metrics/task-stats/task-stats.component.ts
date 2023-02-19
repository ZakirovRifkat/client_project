import { NONE_TYPE } from '@angular/compiler';
import {
  Component,
  ComponentRef,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import * as Highcharts from 'highcharts';

const NBSP = '\u00a0';
@Component({
  selector: 'app-task-stats',
  templateUrl: './task-stats.component.html',
  styleUrls: ['./task-stats.component.css'],
})
export class TaskStatsComponent {
  Highcharts = Highcharts;
  update = false;
  a!: string;
  b: number = 4;

  get value(): string {
    return 'loasdlasodl';
  }
  set value(a: string) {
    this.a = a;
    this.chartOptions.title.text = `${a}${NBSP}/${NBSP}${this.b}`;
    this.update = true;
  }

  chartOptions = {
    chart: {
      type: 'line',
      width: 64,
      height: 64,
      spacingTop: 0,
      spacingBottom: 0,
      spacingRight: 0,
      spacingLeft: 0,
      backgroundColor: 'transparent',
    },
    plotOptions: {
      pie: {
        size: 64,
        innerSize: 54,
        borderWidth: 0,
        colors: ['indigo', 'palevioletred'],
        startAngle: 180,
        states: {
          hover: { enabled: false },
          inactive: { enabled: false },
        },
      },
    },
    title: {
      verticalAlign: 'middle' as const,
      floating: true,
      y: 16,
      text: `${this.a}${NBSP}/${NBSP}${this.b}`,
      style: {
        color: 'white',
        fontSize: '14px',
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
        data: [2, 2],
        dataLabels: [],
      },
    ],
    tooltip: {
      enabled: false,
    },
  };

  ngOnInit() {}
  onChange(a: string) {
    this.chartOptions.title.text = `${a}${NBSP}/${NBSP}${this.b}`;
    this.update = true;
    console.log(this.update);
  }
}
