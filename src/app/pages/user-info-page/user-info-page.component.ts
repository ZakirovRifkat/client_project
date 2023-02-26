import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

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
  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService
  ) {
    activateRoute.params.subscribe((params) => (this.id = params['id']));
  }

  ngOnInit(): void {
    this.getUserById(this.id);
    console.log(this.user);
    this.isFalsePassword = false;
  }

  ngDoCheck(): void {
    if (this.id != this.user.id) {
      this.isFalsePassword = false;
      this.getUserById(this.id);
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
}
