import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-short-user-info',
  templateUrl: './short-user-info.component.html',
  styleUrls: ['./short-user-info.component.css'],
})
export class ShortUserInfoComponent {
  // @Input() user!: IUser;
  user: IUser = {
    id: 1,
    name: 'vlad',
    surname: 'Eladovsci',
    jobTitle: 'eblan1',
    userImg: '',
    password: '0000',
  };
  activeBtn = false;
  btnClick(): void {
    this.activeBtn = !this.activeBtn;
  }
}
