import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/models/event';
import { IIncident } from 'src/app/models/incident';
import { IKpe } from 'src/app/models/kpe';
import { ILab } from 'src/app/models/lab';
import { IUser } from 'src/app/models/user';
import { IncidentService } from 'src/app/services/incident.service';
import { UserService } from 'src/app/services/user.service';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css'],
})
export class UserInfoPageComponent implements OnInit, DoCheck {
  id!: number;
  password!: string;
  enteredPassword!: string;
  isFalsePassword!: boolean;
  users!: IUser[];
  user!: IUser;
  incidents!: IIncident[];
  kpe!: IKpe[];
  lab!: ILab[];
  dayEvents!: IEvent[];
  weekEvents!: IEvent[];
  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private widgetService: WidgetService
  ) {
    activateRoute.params.subscribe((params) => (this.id = params['id']));
  }

  ngOnInit(): void {
    this.getUserById(this.id);
    this.getIncidents();
    this.getKPE();
    this.getLab();
    this.getDayEvent();
    this.getWeekEvent();
    
    this.isFalsePassword = false;
  }

  ngDoCheck(): void {
    if (this.id != this.user.id) {
      this.isFalsePassword = false;
      this.getUserById(this.id);
      this.getIncidents();
      this.getKPE();
      this.getLab();
      this.getDayEvent();
      this.getWeekEvent();
    }
  }

  checkPassword(enteredPassword: string) {
    this.enteredPassword = enteredPassword;
    if (enteredPassword === this.user.password) {
      this.isFalsePassword = true;
    } else {
      console.log('Неверный пароль');
    }
  }

  getUserById(id: number) {
    this.userService.getUsers().subscribe((stream) => {
      this.users = stream;
      this.user = this.users[id];
    });
  }

  getIncidents() {
    this.widgetService.getIncidentsByUser(this.id).subscribe((stream) => {
      this.incidents = stream;
    });
  }
  getKPE() {
    this.widgetService.getKPEByUser(this.id).subscribe((stream) => {
      this.kpe = stream;
    });
  }
  getLab() {
    this.widgetService.getLabByUser(this.id).subscribe((stream) => {
      this.lab = stream;
    });
  }
  getDayEvent() {
    this.widgetService.getDayEventByUser(this.id).subscribe((stream) => {
      this.dayEvents = stream;
    });
  }

  getWeekEvent() {
    this.widgetService.getWeekEventByUser(this.id).subscribe((stream) => {
      this.weekEvents = stream;
    });
  }
}
