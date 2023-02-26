import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-short-user-info',
  templateUrl: './short-user-info.component.html',
  styleUrls: ['./short-user-info.component.css'],
})
export class ShortUserInfoComponent implements OnInit{
  @Input() user!: IUser;
  activeToday: boolean = true;
  taskStatsActive: boolean = true;
  notificationStatsActive: boolean = true;
  efficiencyStatsActive: boolean = true;
  activeBtn = false;

  ngOnInit():void{
  }

  btnClick(): void {
    this.activeBtn = !this.activeBtn;
  }

  today() {
    this.activeToday = true;
  }
  yesterday() {
    this.activeToday = false;
  }
}
