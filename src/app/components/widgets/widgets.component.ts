import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { IEvent } from 'src/app/models/event';
import { IIncident } from 'src/app/models/incident';
import { IKpe } from 'src/app/models/kpe';
import { ILab } from 'src/app/models/lab';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetsComponent implements OnInit, OnChanges {
  @Input() type!: string;
  @Input() incident!: IIncident[];
  @Input() kpe!: IKpe[];
  @Input() lab!: ILab[];
  @Input() dayEvents!: IEvent[];
  @Input() weekEvents!: IEvent[];
  title!: string;
  isActiveDay: boolean = true;
  isActiveMonth: boolean = false;
  isActiveEventDay: boolean = true;
  Highcharts = Highcharts;
  updatePie: boolean = false;
  updateBar: boolean = false;
  updateLine: boolean = false;
  dataIncident!: number[];
  min!: number;
  max!: number;
  filteredEvents!: IEvent[];
  customMin!: any;
  customMax!: any;
  constructor(private widgetsService: WidgetService) {}

  chartOptionsPie = {
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
          enabled: false,
        },
      },
    },

    title: {
      verticalAlign: 'middle' as const,
      floating: true,
      y: 42,
      text: `${5}`,
      style: {
        color: 'white',
        fontSize: '32px',
        lineHeight: '21px',
        textAlign: 'center',
      },
    },
    subtitle: {
      text: `Всего`,
      verticalAlign: 'middle' as const,
      y: -12,
      style: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '12px',
        lineHeight: '12px',
        textAlign: 'center',
        fontWeight: '400',
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
  } satisfies Highcharts.Options;

  chartOptionsLine = {
    chart: {
      type: 'line',
      width: 375,
      height: 231,
      spacingTop: 0,
      spacingBottom: 0,
      spacingRight: 0,
      spacingLeft: 0,
      backgroundColor: 'transparent',
    },
    plotOptions: {
      line: {
        enableMouseTracking: false,
      },
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },
    legend: {
      enabled: false,
    },
    title: {
      text: '',
    },
    yAxis: {
      gridLineWidth: 0.2,
      labels: {
        enabled: false,
      },
      categories: [''],
      title: {
        text: null,
      },
    },
    xAxis: {
      title: {
        text: 'Месяц',
        style: {
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '12px',
          lineHeight: '12px',
          textAlign: 'center',
          fontWeight: '400',
          fontFamily: 'Inter, sans-serif',
        },
      },
      gridLineWidth: 0.2,
      min: 0,
      max: 5,
      startOnTick: true,
      endOnTick: true,
      tickPositions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },

    credits: {
      enabled: false,
    },
    series: [
      {
        type: 'line' as const,
        name: 'Показатель КПЭ',

        data: [
          [2 + 25 / 31, 4],
          [3 + 5 / 31, 5],
        ],
      },
    ],
    tooltip: {
      enabled: false,
    },
  } satisfies Highcharts.Options;

  chartOptionsBar = {
    chart: {
      type: 'column',
      height: 185,
      spacingTop: 0,
      spacingBottom: 5,
      spacingRight: 0,
      spacingLeft: 0,
      backgroundColor: 'transparent',
      scrollablePlotArea: {
        minWidth: 800,
        scrollPositionX: 0,
      },
    },

    plotOptions: {
      column: {
        borderWidth: 0,
        pointWidth: 38,
      },
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },

    title: {
      text: '',
    },
    yAxis: {
      gridLineWidth: 0.2,
      labels: {
        enabled: false,
      },
      title: {
        text: null,
      },
    },
    xAxis: {
      title: {
        text: ' ',
      },
      gridLineWidth: 0.2,
      categories: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ],
    },

    credits: {
      enabled: false,
    },
    series: [
      {
        type: 'column' as const,
        name: '',
        data: [6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        showInLegend: false,
      },
    ],
    tooltip: {
      enabled: false,
    },
  } satisfies Highcharts.Options;

  dayIncidents(): void {
    this.isActiveMonth = false;
    this.isActiveDay = true;
    this.setIncident(0);
    this.updatePie = true;
  }
  weekIncidents(): void {
    this.isActiveMonth = false;
    this.isActiveDay = false;
    this.setIncident(1);
    this.updatePie = true;
  }
  monthIncidents(): void {
    this.isActiveDay = false;
    this.isActiveMonth = true;
    this.setIncident(2);
    this.updatePie = true;
  }
  dayEvent(): void {
    this.isActiveEventDay = true;
    this.setEvent('day');
  }
  weekEvent(): void {
    this.isActiveEventDay = false;
    this.setEvent('week');
  }
  expenceData(): void {
    this.isActiveEventDay = true;
    this.setLab(0);
    this.updateBar = true;
  }
  incomeData(): void {
    this.isActiveEventDay = false;
    this.setLab(1);
    this.updateBar = true;
  }

  setIncident(id: number) {
    this.chartOptionsPie.series[0].data = [
      this.incident[id].closed,
      this.incident[id].active,
      this.incident[id].new,
    ];
    this.chartOptionsPie.title.text = `${
      this.incident[id].closed +
      this.incident[id].active +
      this.incident[id].new
    }`;
  }

  setKPE(): void {
    this.min = new Date(this.kpe[0].date).getMonth() + 1;
    this.max = new Date(this.kpe[this.kpe.length - 1].date).getMonth() + 2;
    this.chartOptionsLine.xAxis.min = this.min;
    this.chartOptionsLine.xAxis.max = this.max;
    this.chartOptionsLine.xAxis.tickPositions = Array.from({
      length: this.max - this.min + 1,
    }).map((_, i) => this.min + i);

    for (let i = 0; i < 11; i++) {
      this.chartOptionsLine.series[0].data[i] = [
        new Date(this.kpe[i].date).getMonth() +
          1 +
          new Date(this.kpe[i].date).getDate() / 31,
        this.kpe[i].value,
      ];
    }
  }
  setLab(flag: number) {
    if (flag == 0) {
      for (let i = 0; i < 12; i++) {
        this.chartOptionsBar.series[0].data[i] = this.lab[i].expanceValue;
      }
    } else {
      for (let i = 0; i < 12; i++) {
        this.chartOptionsBar.series[0].data[i] = this.lab[i].incomeValue;
      }
    }
  }
  setEvent(timeStart: string) {
    if (timeStart === 'day') {
      this.filteredEvents = this.dayEvents;
    } else {
      this.filteredEvents = this.weekEvents;
    }
  }

  setWidgets(): void {
    if (this.type === 'incident') {
      this.title = `Количество инцидентов`;
      this.setIncident(0);
      this.updatePie = true;
    } else if (this.type === 'KPE') {
      this.setKPE();
      this.updateLine = true;
      this.title = 'Показатель КПЭ';
    } else if (this.type === 'event') {
      this.title = 'Лента Событий';
      this.setEvent('day');
      this.isActiveEventDay = true;
    } else if (this.type === 'laboratory') {
      this.title = 'Данные лаб.анализов';
      this.setLab(0);
      this.updateBar = true;
    } else {
      this.type = 'add';
    }
  }
  setCustomBorder() {
    let a = new Date(this.customMin).getMonth() + 1;
    let b = new Date(this.customMax).getMonth() + 1;
    if (b && a) {
      this.chartOptionsLine.xAxis.min = a;
      this.chartOptionsLine.xAxis.max = b;
      this.chartOptionsLine.xAxis.tickPositions = Array.from({
        length: b - a + 1,
      }).map((_, i) => a + i);
      this.updateLine = true;
    }
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.setWidgets();
    console.log(this.customMin, this.customMax);
  }
}
