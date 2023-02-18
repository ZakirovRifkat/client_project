import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit, DoCheck {
  constructor(private router: Router) {}
  users: IUser[] = [
    {
      id: 1,
      name: 'vlad',
      surname: 'Eladovsci',
      jobTitle: 'eblan1',
      userImg: '',
      password: '0000',
    },
    {
      id: 2,
      name: 'kurva',
      surname: 'ppladovsci',
      jobTitle: 'eblan2',
      userImg: '',
      password: '1111',
    },
    {
      id: 3,
      name: 'pasha',
      surname: 'technic',
      jobTitle: 'eblan3',
      userImg: '',
      password: '2222',
    },
  ];

  ngOnInit(): void {}
  ngDoCheck(): void {}

  getRandomColor(): number {
    return Math.random() * 255;
  }
}
