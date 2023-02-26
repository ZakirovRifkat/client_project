import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})

export class WidgetsComponent implements OnInit {
  @Input() type!: string;
  selectedValue!: string;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
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
      text: `24`,
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
        data: [6, 3, 3],
      },
    ],
    tooltip: {
      enabled: false,
    },
  };
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
        allowPointerSelect: false,
        enableMouseTracking: false,
      },
      series: {
        label: {
          connectorAllowed: false,
        },
        pointEnd: 12,
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
    dataLabels: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: 'line' as const,
        name: 'Показатель КПЭ',
        style: {
          color: 'white',
          fontWeight: 400,
        },
        data: [6, 3, 3, 6, 3],
      },
    ],
    tooltip: {
      enabled: false,
    },
  };

  chartOptionsBar = {
    chart: {
      type: 'column',
      height: 185,
      spacingTop: 0,
      spacingBottom: 0,
      spacingRight: 0,
      spacingLeft: 0,
      backgroundColor: 'transparent',
      scrollablePlotArea: {
        minWidth: 700,
        scrollPositionX: 0,
        
      },
    },
    scrollbar: {
      barBackgroundColor: 'gray',
      barBorderRadius: 7,
      barBorderWidth: 0,
      buttonBackgroundColor: 'gray',
      buttonBorderWidth: 0,
      buttonArrowColor: 'yellow',
      buttonBorderRadius: 7,
      rifleColor: 'yellow',
      trackBackgroundColor: 'white',
      trackBorderWidth: 1,
      trackBorderColor: 'silver',
      trackBorderRadius: 7
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
        text: 'месяц',
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
    dataLabels: {
      enabled: false,
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
        groupPaddin: 0,
      },
    ],
    tooltip: {
      enabled: false,
    },
  };
}
