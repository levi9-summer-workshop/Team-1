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
    selectedUser: SurveyUser = { id: null, username: null, password: null, userStatus: null };
    error: { name: string};

  constructor(private userService: UsersService) { }

  ngOnInit() {

    this.users$ = this.userService.getUsers();
    this.userService.getUsers().subscribe();
  }

  onUserDelete(user: SurveyUser) {
    this.selectedUser = user;
  }

  onUserDeleteSubmit() {
    this.userService.deleteUser(this.selectedUser.id)
      .subscribe(
        () => {
          this.users$ = this.userService.getUsers();
          this.selectedUser = new SurveyUser(null, null, null, null);
        },
        (error) => console.error(error)
      );
  }

  onUserBlock(user: SurveyUser) {
    this.selectedUser = user;
    // this.selectedUser.userStatus.push('ROLE_BLOCKED');
    this.selectedUser = JSON.parse(JSON.stringify(this.selectedUser));
    console.log(this.selectedUser);
  }

  onUserBlockSubmit() {
    
    this.userService.blockUser(this.selectedUser)
      .subscribe(
        () => {
        this.users$ = this.userService.getUsers();
        // this.selectedUser = new SurveyUser(this.selectedUser.id, this.selectedUser.username, this.selectedUser.password, this.selectedUser.userStatus);
        },
        (error) => console.error(error)       
      );
      
  }

}