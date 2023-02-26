import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { IUser } from 'src/app/models/user';

const NBSP: string = '\u00A0';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css'],
})
export class MetricsComponent implements OnChanges, OnInit {
  @Input() type!: string;
  @Input() user!: IUser;
  title!: string;
  updateTime!: Date;
  chartColor: string = '#800000';
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
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
      },
    },
    title: {
      verticalAlign: 'middle' as const,
      floating: true,
      y: 16,
      text: ``,
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
        data: [0, 0],
      },
    ],
    tooltip: {
      enabled: false,
    },
  };

  ngOnInit(): void {
    this.setMetrics(this.user);
  }
  ngOnChanges() {
    this.setMetrics(this.user);
    this.update = true;
  }

  setMetrics(user: IUser): void {
    if (this.type === 'task') {
      this.title = `Количество заданий`;
      this.updateTime = new Date(1642546324516587);
      this.chartOptions.plotOptions.pie.colors[0] = '#24C38E';
      this.chartOptions.series[0].data = [
        user.tasks.done,
        user.tasks.all - user.tasks.done,
      ];
      this.chartOptions.title.text = `${user.tasks.done}${NBSP}/${NBSP}${user.tasks.all}`;
    } else if (this.type === 'notification') {
      this.title = 'Уведомления';
      this.chartOptions.plotOptions.pie.colors[0] = '#F2C94C';
      this.updateTime = new Date(1682546324516587);
      this.chartOptions.series[0].data = [
        user.notification.readed,
        user.notification.all - user.notification.readed,
      ];
      this.chartOptions.title.text = `${user.notification.readed}${NBSP}/${NBSP}${user.notification.all}`;
    } else if (this.type === 'efficient') {
      this.title = 'Показатель эффективноcти';
      this.updateTime = new Date(1662546324516587);
      this.chartOptions.plotOptions.pie.colors[0] = '#800000';
      this.chartOptions.series[0].data = [
        user.efficient * 100,
        (1 - user.efficient) * 100,
      ];
      this.chartOptions.title.text = `${user.efficient * 100}%`;
    } else {
      this.type = 'add';
    }
  }
}
