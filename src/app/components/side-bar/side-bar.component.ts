import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit, DoCheck {
  constructor(private router: Router, private userService: UserService) {}
  users!: IUser[];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((stream) => {
      this.users = stream;
    });
  }
  ngDoCheck(): void {}
}
