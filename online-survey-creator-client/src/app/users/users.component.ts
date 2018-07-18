import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { UsersService } from './users-service.service';
import { SurveyUser } from './survey-user';

@Component({
  selector: 'survey-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users$: Observable<SurveyUser[]>;
    selectedUser: SurveyUser = new SurveyUser(null, null);


  constructor(private userService: UsersService) { }

  ngOnInit() {

    this.users$ = this.userService.getUsers();
    this.userService.getUsers().subscribe();
  }

  onUserDelete(user: SurveyUser) {
    this.selectedUser = user;
  }

  onUserDeleteSubmit() {
    this.userService.deleteUser(this.selectedUser.username)
      .subscribe(
        () => {
          this.users$ = this.userService.getUsers();
          this.selectedUser = new SurveyUser(null, null);
        },
        (error) => console.error(error)
      );
  }
  }

