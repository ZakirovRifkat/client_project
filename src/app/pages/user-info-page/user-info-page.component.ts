import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe((params) => (this.id = params['id']));
    activateRoute.queryParams.subscribe((queryParam: any) => {
      this.password = queryParam['password'];
    });
  }

  ngOnInit(): void {
    this.isFalsePassword = false;
  }

  ngDoCheck(): void {
    if (this.enteredPassword != this.password) {
      this.isFalsePassword = false;
    }
  }

  checkPassword(enteredPassword: string) {
    this.enteredPassword = enteredPassword;
    if (enteredPassword === this.password) {
      this.isFalsePassword = true;
    } else {
      console.log('Неверный пароль');
    }
  }
}
