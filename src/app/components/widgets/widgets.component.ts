import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { IIncident } from 'src/app/models/incident';
import { IUser } from 'src/app/models/user';
import { WidgetService } from 'src/app/services/widget.service';
interface Food {
  value: string;
  viewValue: string;
}

const min = 2;
const max = 6;
@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetsComponent implements OnInit, OnChanges {
  @Input() type!: string;
  @Input() incident!: IIncident[];

  title!: string;
  isActiveDay: boolean = true;
  isActiveMonth: boolean = false;
  isActiveEventDay: boolean = true;
  Highcharts = Highcharts;
  updatePie:boolean= false;
  updateBar:boolean = false;
  updateLine:boolean = false;
  dataIncident!: number[];
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
      min,
      max,
      startOnTick: true,
      endOnTick: true,
      tickPositions: Array.from({ length: max - min + 1 }).map(
        (_, i) => min + i
      ),
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
        data: [6, 3, 3, 6, 3, 3, 6, 3, 3, 6, 3, 3],
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
  }
  weekEvent(): void {
    this.isActiveEventDay = false;
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

  ngOnInit(): void {}

  ngOnChanges() {
    this.setWidgets();
    this.setIncident(0);
    this.updatePie = true;
  }
}
