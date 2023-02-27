import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IIncident } from 'src/app/models/incident';
import { IKpe } from 'src/app/models/kpe';
import { IUser } from 'src/app/models/user';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-main-user-info',
  templateUrl: './main-user-info.component.html',
  styleUrls: ['./main-user-info.component.css'],
})
export class MainUserInfoComponent implements OnInit, OnChanges {
  @Input() user!: IUser;
  @Input() incident!:IIncident[];
  @Input() kpe!:IKpe[]
  ngOnInit(): void {}
  ngOnChanges(): void {}
}
