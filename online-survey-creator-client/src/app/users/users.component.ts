import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { UsersService } from './users-service.service';
import { SurveyUser } from './survey-user.model';
import { AuthService } from '../login/auth-service.service';

@Component({
  selector: 'survey-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users$: Observable<SurveyUser[]>;
    selectedUser: SurveyUser;
    error: { name: string};
    button: string;

  constructor(private userService: UsersService, private authService: AuthService) { }

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
          this.selectedUser = new SurveyUser(null, null, null);
        },
        (error) => console.error(error)
      );
  }

  onUserBlock(user: SurveyUser) {
    this.selectedUser = user;
    this.selectedUser = JSON.parse(JSON.stringify(this.selectedUser));
    // console.log(this.selectedUser);
  }

  onUserBlockSubmit() {    
    this.selectedUser.blocked = !this.selectedUser.blocked;
    // console.log(this.selectedUser);
      this.userService.saveUser(this.selectedUser)
      .subscribe(
        () => {
          this.users$ = this.userService.getUsers();
        },
          (error) => console.error(error)       
      );
  }

  ifUserIsAdmin(userToBlock: SurveyUser): boolean {
    if(this.authService.isAuthenticated && this.authService.hasRoleAdmin && this.authService.user.username == userToBlock.username) {
      return true;
    }
    return false;
  }

  

}