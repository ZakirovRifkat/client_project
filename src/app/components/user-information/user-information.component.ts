import { outputAst } from '@angular/compiler';
import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
})
export class UserInformationComponent implements OnInit, DoCheck {
  id!: number;
  password!: string;
  enteredPassword!: string;
  IsFalsePassword!: boolean;

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    activateRoute.params.subscribe((params) => (this.id = params['id']));
    activateRoute.queryParams.subscribe((queryParam: any) => {
      this.password = queryParam['password'];
      console.log(this.password);
    });
  }
  ngOnInit(): void {
    this.IsFalsePassword = false;
  }
  ngDoCheck(): void {
    if (this.enteredPassword != this.password) {
      this.IsFalsePassword = false;
    }
  }

  checkPassword(enteredPassword: string) {
    this.enteredPassword = enteredPassword;
    if (enteredPassword === this.password) {
      this.IsFalsePassword = true;
    } else {
      console.log('Неверный пароль');
    }
  }
}
