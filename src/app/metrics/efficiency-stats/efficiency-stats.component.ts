import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
const NBSP = '\u00a0';
@Component({
  selector: 'app-efficiency-stats',
  templateUrl: './efficiency-stats.component.html',
  styleUrls: ['./efficiency-stats.component.css'],
})
export class EfficiencyStatsComponent {
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
        colors: ['maroon', 'rgba(22, 26, 29, 1)'],
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
      text: `${5}${NBSP}/${NBSP}${10}`,
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
}
