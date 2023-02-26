import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IMetric } from 'src/app/models/metric';
import { IUser } from 'src/app/models/user';
import { MetricService } from 'src/app/services/metric.service';

@Component({
  selector: 'app-short-user-info',
  templateUrl: './short-user-info.component.html',
  styleUrls: ['./short-user-info.component.css'],
})
export class ShortUserInfoComponent implements OnChanges {
  @Input() user!: IUser;
  metrics!: IMetric[];
  sendMetric!: IMetric;
  activeToday: boolean = true;
  taskStatsActive: boolean = true;
  notificationStatsActive: boolean = true;
  efficiencyStatsActive: boolean = true;
  activeBtn = false;
  constructor(private metricsService: MetricService) {}

  ngOnChanges(): void {
    this.getMetrics();
    this.activeToday = true;

  }

  getMetrics() {
    this.metricsService.getMetricsByUser(this.user.id).subscribe((stream) => {
      this.metrics = stream;
      this.sendMetric = this.metrics[0];
    });
  }
  btnClick(): void {
    this.activeBtn = !this.activeBtn;
  }

  today() {
    this.activeToday = true;
    this.sendMetric = this.metrics[0];
  }
  yesterday() {
    this.activeToday = false;
    this.sendMetric = this.metrics[1];
  }
}
