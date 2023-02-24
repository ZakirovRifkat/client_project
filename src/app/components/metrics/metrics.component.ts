import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

const NBSP: string = '\u00A0';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css'],
})
export class MetricsComponent {
  @Input() type!: string;

  title!: string;
  updateTime!: Date;
  chartColor: string = '#800000';
  a: number = 2;
  b: number = 4;
  Highcharts = Highcharts;
  update = false;
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
        startAngle: 180,
        colors: ['', '#161A1D'],
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
      },
    ],
    tooltip: {
      enabled: false,
    },
  };

  get value(): string {
    return '';
  }
  set value(a: string) {}

  ngOnInit() {
    this.setMetrics();
  }

  setMetrics(): void {
    if (this.type === 'task') {
      this.title = `Количество заданий`;
      this.updateTime = new Date(1642546324516587);
      this.chartOptions.plotOptions.pie.colors[0] = '#24C38E';
      this.chartOptions.series[0].data = [2, 2];
    } else if (this.type === 'notification') {
      this.title = 'Уведомления';
      this.updateTime = new Date(1682546324516587);
      this.chartOptions.plotOptions.pie.colors[0] = '#F2C94C';
      this.chartOptions.series[0].data = [12, 16];
    } else if (this.type === 'efficient') {
      this.title = 'Показатель эффективноcти';
      this.updateTime = new Date(1662546324516587);
      this.chartOptions.plotOptions.pie.colors[0] = '#800000';
      this.chartOptions.series[0].data = [5, 3];
    } else {
      this.type = 'add';
    }
  }
}
