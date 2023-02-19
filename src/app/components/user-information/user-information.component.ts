import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
})
export class UserInformationComponent implements OnInit, DoCheck {
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
