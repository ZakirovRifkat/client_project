import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IEvent } from 'src/app/models/event';
import { IIncident } from 'src/app/models/incident';
import { IKpe } from 'src/app/models/kpe';
import { ILab } from 'src/app/models/lab';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-main-user-info',
  templateUrl: './main-user-info.component.html',
  styleUrls: ['./main-user-info.component.css'],
})
export class MainUserInfoComponent implements OnInit, OnChanges {
  @Input() user!: IUser;
  @Input() incident!: IIncident[];
  @Input() kpe!: IKpe[];
  @Input() lab!: ILab[];
  @Input() dayEvents!: IEvent[];
  @Input() weekEvents!: IEvent[];
  ngOnInit(): void {}
  ngOnChanges(): void {}
}
